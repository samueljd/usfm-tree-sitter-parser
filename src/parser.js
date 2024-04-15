import Parser from "tree-sitter";
import usfm from "tree-sitter-usfm3";
import grammar from "tree-sitter-javascript";

const parser = new Parser();
parser.setLanguage(usfm);
export class USFMParser {

  constructor(usfmString) {
    this.usfm = usfmString;
    this.syntaxTree = null;
    this.errors = null;
    let tree = null;

    try {
      tree = parser.parse(this.usfm);
    } catch (err) {
      console.log(err.toString());
    }
    this.syntaxTree = tree.rootNode;
  }

  toSyntaxTree() {
    console.log(this.usfm);
    return this.syntaxTree.toString();
  }

  parse() {
    // Mock parse function: this should be replaced with actual parsing logic
    // console.log("Parsing data:", this.usfm);
    return this.usfm;
  }
}
let sourceCode = '\\id GEN\n\\c 1\n\\p\n\\v 1 In the begining..\\v 2 asldkfjas';
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
