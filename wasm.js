const Parser = require('web-tree-sitter');

(async () => {
  await Parser.init();
  const parser = new Parser();
  const Lang = await Parser.Language.load('/home/samueljohn/projects/usfm-grammar-js/tree-sitter-usfm3.wasm');
  parser.setLanguage(Lang);
  const tree = parser.parse('\\id GEN\n\\c 1\n\\p\n\\v 1 In the begining..\\v 2');
  console.log(tree.rootNode.toString());
})();