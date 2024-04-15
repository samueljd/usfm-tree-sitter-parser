// Import necessary libraries
const Parser = require('web-tree-sitter');
const USJGenerator = require('./usjGenerator');
const ListGenerator = require('./listGenerator');
const USFMGenerator = require('./usfmGenerator');
const { excludeMarkersInUsj, includeMarkersInUsj } = require('./filters');
const Filter = require('./utils/filter');
const Format = require('./utils/format');
// const Parser = require("tree-sitter");node 
const usfm = require("tree-sitter-usfm3");
const path = require('path');
const fs = require('fs');

const parser = new Parser();
let usfmLanguage;


const langWasmFilePath = path.join(__dirname, 'tree-sitter-usfm3.wasm');
try {
  if (fs.existsSync(langWasmFilePath)) {
    usfmLanguage = await Parser.Language.load(langWasmFilePath);
    parser.setLanguage(usfmLanguage);
  } else {
    console.log('File does not exist:', langWasmFilePath);
  }
} catch (error) {
  console.error('Error handling the language file:', error);
}

const idQuery = usfmLanguage.query(`(book (id (bookcode) @book-code (description) @desc ))`);
const chapterDataQuery = usfmLanguage.query(`(c (chapterNumber) @chapter-number)(cp (text) @cp-text)(cl (text) @cl-text)(ca (chapterNumber) @ca-number)(cd) @cd-node`);
const verseDataQuery = usfmLanguage.query(`(v (verseNumber) @verse-number)(vp (text) @vp-text)(va (verseNumber) @va-number)`);
const errorQuery = usfmLanguage.query(`(ERROR) @errors`);


class USFMParser {
  constructor(usfmString = null, fromUSJ = null, fromUSX = null) {
    this.validateInputs(usfmString, fromUSJ, fromUSX);
    this.initializeParser(usfmString, fromUSJ, fromUSX);
  }

  validateInputs(usfmString, fromUSJ, fromUSX) {
    const inputs = [usfmString, fromUSJ, fromUSX].filter(x => x !== null);
    if (inputs.length > 1) {
      throw new Error("Only one of USFM, USJ, or USX is supported in one object.");
    }
    if (inputs.length === 0) {
      throw new Error("Missing input! Either USFM, USJ, or USX is to be provided.");
    }
  }

  async initializeParser(usfmString, fromUSJ, fromUSX) {
    await Parser.init();
    this.parser = new Parser();
    const USFMLanguage = await Parser.Language.load(langWasmFilePath);
    this.parser.setLanguage(USFMLanguage);

    if (usfmString) {
      this.usfm = usfmString;
    } else if (fromUSJ) {
      this.usfm = new USFMGenerator().usjToUsfm(fromUSJ); // Simulated conversion
    } else if (fromUSX) {
      this.usfm = new USFMGenerator().usjToUsfm(fromUSX); // Simulated conversion
    }

    this.parseUSFM();
  }

  parseUSFM() {
    let tree = this.parser.parse(this.usfm);
    this.syntaxTree = tree.rootNode;
    this.checkForErrors();
  }

  checkForErrors() {
    const errorQuery = this.parser.getLanguage().query("(ERROR) @errors");
    const errors = errorQuery.captures(this.syntaxTree.rootNode);
    if (errors.length > 0) {
      this.errors = errors.map(err => `At ${err.node.startPosition.row}:${err.node.startPosition.column}, Error: ${this.usfm.substring(err.node.startIndex, err.node.endIndex)}`);
      throw new Error(`Errors found in USFM: ${this.errors.join(", ")}`);
    }
  }

  toSyntaxTree(ignoreErrors = false) {
    console.log("toSyntaxTree")
    // Provides the syntax tree from class as a string
    if (!ignoreErrors && this.errors) {
      let errorString = this.errors.map(err => err.join(":")).join("\n\t");
      throw new Error(`Errors present:\n\t${errorString}\nUse ignoreErrors = true to generate output despite errors.`);
    }
    return this.syntaxTree.sexp();
  }


  toUSJ({ excludeMarkers = null, includeMarkers = null, ignoreErrors = false, combineTexts = true } = {}) {
    // Converts the syntax tree to the JSON format USJ and filters content using exclude markers option
    if (!ignoreErrors && this.errors) {
      let errorString = this.errors.map(err => err.join(":")).join("\n\t");
      throw new Error(`Errors present:\n\t${errorString}\nUse ignoreErrors = true to generate output despite errors.`);
    }

    let jsonRootObj = {
      "type": "USJ",
      "version": "0.2.0",
      "content": []
    };

    let outputUSJ;
    try {
      let usjGenerator = new USJGenerator(USFM_LANGUAGE, this.usfmBytes, jsonRootObj); // Assuming USJGenerator is defined elsewhere
      usjGenerator.nodeToUSJ(this.syntaxTree, jsonRootObj); // Assuming nodeToUSJ method is properly defined
      outputUSJ = usjGenerator.jsonRootObj;
    } catch (err) {
      let message = "Unable to do the conversion. ";
      if (this.errors) {
        let errorString = this.errors.map(err => err.join(":")).join("\n\t");
        message += `Could be due to an error in the USFM\n\t${errorString}`;
      }
      throw new Error(message);
    }

    if (includeMarkers) {
      outputUSJ = includeMarkersInUsj(outputUSJ, [...includeMarkers, 'USJ'], combineTexts); // Assuming includeMarkersInUSJ is defined
    }
    if (excludeMarkers) {
      outputUSJ = excludeMarkersInUsj(outputUSJ, excludeMarkers, combineTexts); // Assuming excludeMarkersFromUSJ is defined
    }

    return outputUSJ;
  }
  toUSX(ignoreErrors = false) {
    // Converts the syntax tree to the XML format USX
    if (!ignoreErrors && this.errors) {
      let errorString = this.errors.map(err => err.join(":")).join("\n\t");
      throw new Error(`Errors present:\n\t${errorString}\nUse ignoreErrors = true to generate output despite errors.`);
    }

    // Assuming that XML manipulation is handled similarly to how browsers handle it with DOMParser and XMLSerializer
    let parser = new DOMParser();
    let serializer = new XMLSerializer();
    let doc = document.implementation.createDocument(null, "usx", null);
    let usxRoot = doc.documentElement;
    usxRoot.setAttribute("version", "3.0");

    try {
      let usxGenerator = new USXGenerator(USFM_LANGUAGE, this.usfmBytes, usxRoot); // Assuming USXGenerator is defined elsewhere
      usxGenerator.nodeToUSX(this.syntaxTree, usxRoot); // Assuming nodeToUSX method is properly defined
    } catch (exe) {
      let message = "Unable to do the conversion. ";
      if (this.errors) {
        let errorString = this.errors.map(err => err.join(":")).join("\n\t");
        message += `Could be due to an error in the USFM\n\t${errorString}`;
      }
      throw new Error(message);
    }

    return serializer.serializeToString(usxRoot); // Converts the XML document back to a string for output
  }

}

module.exports = USFMParser;
