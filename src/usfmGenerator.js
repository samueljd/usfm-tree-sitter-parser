class USFMGenerator {
  constructor() {
    this.usfmString = '';
  }

  usjToUsfm(usjObj, nested = false) {
    const noUsfmUsjTypes = ['USJ', 'table'];
    const closingUsjTypes = ['char', 'note', 'figure'];
    const nonAttribUsjKeys = ['type', 'marker', 'content', 'number', 'sid',
      'code', 'caller', 'align', 'version', 'altnumber',
      'pubnumber', 'category'];
    const noNewlineUsjTypes = ['char', 'note', 'verse', 'table:cell'];

    if (!noUsfmUsjTypes.includes(usjObj.type)) {
      this.usfmString += "\\";
      if (nested && usjObj.type === 'char') {
        this.usfmString += "+";
      }
      this.usfmString += `${usjObj.marker} `;
    }
    ['code', 'number', 'caller'].forEach(key => {
      if (usjObj[key]) {
        this.usfmString += `${usjObj[key]} `;
      }
    });
    if (usjObj.category) {
      this.usfmString += `\\cat ${usjObj.category}\\cat*\n`;
    }
    if (Array.isArray(usjObj.content)) {
      usjObj.content.forEach(item => {
        if (typeof item === 'string') {
          this.usfmString += item;
        } else {
          this.usjToUsfm(item, usjObj.type === 'char');
        }
      });
    }

    let attributes = [];
    Object.keys(usjObj).forEach(key => {
      if (!nonAttribUsjKeys.includes(key)) {
        attributes.push(`${key}="${usjObj[key]}"`);
      }
    });

    if (attributes.length > 0) {
      this.usfmString += `|${attributes.join(' ')}`;
    }

    if (closingUsjTypes.includes(usjObj.type)) {
      this.usfmString += `\\`;
      if (nested && usjObj.type === 'char') {
        this.usfmString += "+";
      }
      this.usfmString += `${usjObj.marker}* `;
    }
    if (!noNewlineUsjTypes.includes(usjObj.type) && this.usfmString[this.usfmString.length - 1] !== '\n') {
      this.usfmString += '\n';
    }
  }

  // Additional methods for XML conversion should be implemented similar to usjToUsfm.
  // For XML parsing, use DOMParser to parse strings and document methods to traverse.
}

// Example of using the USFMGenerator
const gen = new USFMGenerator();
const usjObj = {
  type: 'char',
  marker: 'ft',
  content: ['This is an example footnote.'],
  code: 'f'
};

gen.usjToUsfm(usjObj);
console.log(gen.usfmString);


module.exports = USFMGenerator;