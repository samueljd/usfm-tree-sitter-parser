# js-usfm-parser

Parsing and validation of USFM files using tree-sitter-usfm3

##  How it works

The project has a `tree-sitter-usfm3.wasm` in the root. This is consumed by the USFMParser class and the resulting tree-sitter-parser parses usfm files. 

## Goal 
To create an npm package  that uses the tree-sitter-usfm3 to parse usfm. 

## How to run

Pull the branch and run

```bash
npm install
```
make sure you've th latest version of `web-tree-sitter` npm package.
There is a test file that can be used to see if it workd correctly. 
```bash
cd src
node usfm2usj.js
```
If successful, the output should be 
```
"(File (book (id (bookcode) (description))) (chapter (c (chapterNumber)) (paragraph (p (v (verseNumber)) (verseText (text)) (v (verseNumber))))))"
```
## What Needs To Be Done

In the usfmParser.js the tree-sitter-usfm3.wasm file is being loaded from the root. The tree-sitter-usfm3.wasm file needs be bundled so that this can be released as an npm package. 
