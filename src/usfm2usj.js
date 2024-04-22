const USFMParser = require('./parser-wip');


const parseUSFMString = async () => {
  await USFMParser.init();
  const usfmParser = new USFMParser('\\id GEN\n\\c 1\n\\p\n\\v 1 In the begining..\\v 2');
  console.log(JSON.stringify(usfmParser.parseUSFM()))
};
//expected Output : "(File (book (id (bookcode) (description))) (chapter (c (chapterNumber)) (paragraph (p (v (verseNumber)) (verseText (text)) (v (verseNumber))))))"
parseUSFMString();
