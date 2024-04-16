// import Parser from "tree-sitter";
// import usfm from "tree-sitter-usfm3";
// import grammar from "tree-sitter-javascript";

const Parser = require("web-tree-sitter");
const path = require('path');
const fs = require('fs');
const parser = new Parser();
const langWasmFilePath = path.join(__dirname, 'tree-sitter-usfm3.wasm');

(async () => {
  try {
    if (fs.existsSync(langWasmFilePath)) {
      usfmLanguage = await Parser.Language.load(langWasmFilePath);
      parser.setLanguage(usfmLanguage);
      console.log('Language file loaded:', langWasmFilePath)
    } else {
      console.log('File does not exist:', langWasmFilePath);
    }
  } catch (error) {
    console.error('Error handling the language file:', error);
  }
})();


// parser.setLanguage(usfm);
class USFMParser {

  constructor(usfmString) {
    this.usfm = usfmString;
    this.syntaxTree = null;
    this.errors = null;
    let tree = null;

    try {
      console.log(this.usfm)
      tree = parser.parse(this.usfm);
      console.log(tree.rootNode)
    } catch (err) {
      console.log(err.toString());
    }
    this.syntaxTree = tree;
  }

  toSyntaxTree() {
    console.log(this.usfm);
    return this.syntaxTree;
  }

  parse() {
    // Mock parse function: this should be replaced with actual parsing logic
    // console.log("Parsing data:", this.usfm);
    return this.usfm;
  }
}

module.exports = USFMParser;
let sourceCode = '\\id GEN\n\\c 1\n\\p\n\\v 1 In the begining..\\v 2';
let parserObj = new USFMParser(sourceCode)
console.log(parserObj.toSyntaxTree())
console.log('--------------------------------------------------------')
console.log(parserObj.parse())
console.log('********************************************************\n\n')
// let inputPath = "../tests/basic/minimal/origin.usfm"
// fs.readFile(inputPath, 'utf8', function (err, data) {
//   if (err) throw err;
//   parserObj = new USFMParser(data.toString());
//   console.log(parserObj.toSyntaxTree())
//   console.log('--------------------------------------------------------')
//   console.log(parserObj.toJSON())
//   console.log('********************************************************')
// });
