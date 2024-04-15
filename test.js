const path = require('path');
const fs = require('fs');

const langFile = path.join(__dirname, 'tree-sitter-usfm3.wasm');

// If you need to check if the file exists or read from it:
if (fs.existsSync(langFile)) {
  console.log('File exists:', langFile);
  // You can add code here to read the file or perform other operations.
} else {
  console.log('File does not exist:', langFile);
}