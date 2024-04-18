const Parser = require('web-tree-sitter');
const path = require('path');

class USFMParser {
  static async init() {
    await Parser.init();
    this.USFMLanguage = await Parser.Language.load(path.join(__dirname, 'tree-sitter-usfm3.wasm'));
  }

  constructor(usfmString = null, fromUSJ = null, fromUSX = null) {
    let tree = null;
    this.usfm = usfmString;
    if (!USFMParser.USFMLanguage) {
      throw new Error('Parser not initialized. Call USFMParser.init() before creating instances.');
    }
    this.parser = new Parser();
    this.parser.setLanguage(USFMParser.USFMLanguage);
    try {
      tree = this.parser.parse(this.usfm);
    } catch (err) {
      console.log(err.toString());
    }
    this.syntaxTree = tree.rootNode.toString();
    this.syntaxTree = tree.rootNode.child(1).firstChild.text;
    // console.log(tree.rootNode.child(2).firstChild.text)
    // this.initializeData(usfmString, fromUSJ, fromUSX);
  }
  parse() {
    return this.syntaxTree
  }
}


(async () => {
  await USFMParser.init();
  const usfmParser = new USFMParser('\\id GEN\n\\c 1\n\\p\n\\v 1 In the begining..\\v 2');
  console.log(JSON.stringify(usfmParser.parse()))
})();
