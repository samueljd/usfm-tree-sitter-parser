const Parser = require('web-tree-sitter');
const path = require('path');
const fs = require('fs');
const USJGenerator = require('./usjGenerator');
const { usfmString, titus } = require('./titus');
const { toca_markers } = require('./testFiles/headers');
const testCases = require('./testFiles/test');

class USFMParser {
  static async init() {
    await Parser.init();
    this.USFMLanguage = await Parser.Language.load(path.join(__dirname, 'tree-sitter-usfm3.wasm'));

    //another way to load wasm file

    // const wasmPath = path.join(__dirname, 'tree-sitter-usfm3.wasm');
    // const wasmBuffer = fs.readFileSync(wasmPath);
    // this.USFMLanguage = await Parser.Language.load(wasmBuffer);
  }

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
    console.log('=====>Inputs validated')
  }
  initializeParser(usfmString, fromUSJ, fromUSX) {
    if (!USFMParser.USFMLanguage) {
      this.USFMLanguage = USFMParser.USFMLanguage;
      throw new Error('USFMParser not initialized. Call USFMParser.init() before creating instances.');
    }
    this.parser = new Parser();
    this.parser.setLanguage(USFMParser.USFMLanguage);

    if (usfmString) {
      this.usfm = usfmString;
    } else if (fromUSJ) {
      this.usfm = new USFMGenerator().usjToUsfm(fromUSJ); // Simulated conversion
    } else if (fromUSX) {
      this.usfm = new USFMGenerator().usjToUsfm(fromUSX); // Simulated conversion
    }
    console.log('=====>Parser initialized')
    this.parseUSFM();
  }
  parseUSFM() {
    let tree = null;
    try {
      tree = this.parser.parse(this.usfm);
      // console.log(JSON.stringify(tree))
    } catch (err) {
      console.log(err.toString());
    }
    this.syntaxTree = tree.rootNode;
    this.checkForErrors(tree);
    return this.syntaxTree.toString()
    // return this.syntaxTree

  }

  toUSJ({ excludeMarkers = null, includeMarkers = null, ignoreErrors = false, combineTexts = true } = {}) {
    // Converts the syntax tree to the JSON format USJ and filters content using exclude markers option
    if (!ignoreErrors && this.errors) {
      let errorString = this.errors.map(err => err.join(":")).join("\n\t");
      throw new Error(`Errors present:\n\t${errorString}\nUse ignoreErrors = true to generate output despite errors.`);
    }

    let jsonRootObj = {
      "type": "USJ",
      "version": "0.3.0.alpha",
      "content": []
    };

    let outputUSJ;
    try {
      let usjGenerator = new USJGenerator(USFMParser.USFMLanguage, this.usfm, jsonRootObj); // Assuming USJGenerator is defined elsewhere
      usjGenerator.nodeToUSJ(this.syntaxTree, jsonRootObj); // Assuming nodeToUSJ method is properly defined
      outputUSJ = usjGenerator.jsonRootObj;
      console.log('=====>USJ generated', outputUSJ)
    } catch (err) {
      let message = "Unable to do the conversion. ";
      if (this.errors) {
        let errorString = this.errors.map(err => err.join(":")).join("\n\t");
        message += `Could be due to an error in the USFM\n\t${errorString}`;
      }
      // throw new Error(message);
      return null;
    }

    // if (includeMarkers) {
    //   outputUSJ = includeMarkersInUsj(outputUSJ, [...includeMarkers, 'USJ'], combineTexts); // Assuming includeMarkersInUSJ is defined
    // }
    // if (excludeMarkers) {
    //   outputUSJ = excludeMarkersInUsj(outputUSJ, excludeMarkers, combineTexts); // Assuming excludeMarkersFromUSJ is defined
    // }

    return outputUSJ;
  }
  checkForErrors(tree) {
    const errorQuery = this.parser.getLanguage().query("(ERROR) @errors");
    const errors = errorQuery.captures(tree.rootNode);
    if (errors.length > 0) {
      console.log("!!!!!!!!!!!!!!!ERRORS")
      this.errors = errors.map(err => `At ${err.node.startPosition.row}:${err.node.startPosition.column}, Error: ${this.usfm.substring(err.node.startIndex, err.node.endIndex)}`);
      throw new Error(`Errors found in USFM: ${this.errors.join(", ")}`);
      // }
    }
  }
}

module.exports = USFMParser;

// (async () => {
//   await USFMParser.init();
//   const usfmParser = new USFMParser(testCases.rem_under_one_h_marker);
//   // const output = usfmParser.toUSJ()
//   console.log(usfmParser.parseUSFM())
// })();

// (async () => {
//   await USFMParser.init();
//   let counter = 0;

//   for (const [name, text] of Object.entries(testCases)) {
//     try {
//       console.log({ text })
//       const usfmParser = new USFMParser(text);
//       const output = usfmParser.toUSJ();
//       counter++;
//       if (output) {
//         console.log(`${name}: Conversion successful`, output, counter, name); ''
//         // if (counter === 12) {
//         //   break;
//         // }
//       } else {
//         console.log(`${name}: Conversion returned null, pausing...`, counter);
//         break; // Stop further processing if output is null
//       }
//     } catch (error) {
//       console.log(`${name}: Error during conversion`, error.message);
//       break; // Optionally break on errors if required
//     }
//   }
// })();

