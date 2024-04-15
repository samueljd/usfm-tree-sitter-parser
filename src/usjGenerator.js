//Logics for syntax-tree to dict(USJ) conversions

class USJGenerator {
  static PARA_STYLE_MARKERS = ["ide", "usfm", "h", "toc", "toca", //identification
    "imt", "is", "ip", "ipi", "im", "imi", "ipq", "imq", "ipr", "iq", "ib",
    "ili", "iot", "io", "iex", "imte", "ie", // intro
    "mt", "mte", "cl", "cd", "ms", "mr", "s", "sr", "r", "d", "sp", "sd", //titles
    "q", "qr", "qc", "qa", "qm", "qd", //poetry
    "lh", "li", "lf", "lim", "litl", //lists
    "sts", "rem", "lit", "restore", //comments
  ];
  static NOTE_MARKERS = ["f", "fe", "ef", "efe", "x", "ex"];
  static CHAR_STYLE_MARKERS = ["add", "bk", "dc", "ior", "iqt", "k", "litl", "nd", "ord", "pn",
    "png", "qac", "qs", "qt", "rq", "sig", "sls", "tl", "wj", // Special - text
    "em", "bd", "bdit", "it", "no", "sc", "sup", // character styling
    "rb", "pro", "w", "wh", "wa", "wg", //special - features
    "lik", "liv", //structred list entries
    "jmp",
    "fr", "ft", "fk", "fq", "fqa", "fl", "fw", "fp", "fv", "fdc", //footnote - content
    "xo", "xop", "xt", "xta", "xk", "xq", "xot", "xnt", "xdc" //crossref - content
  ];
  static NESTED_CHAR_STYLE_MARKERS = this.CHAR_STYLE_MARKERS.map(item => item + "Nested");;
  static DEFAULT_ATTRIB_MAP = {
    "w": "lemma", "rb": "gloss", "xt": "link-href", "fig": "alt",
    "xt_standalone": "link-href"
  };
  static TABLE_CELL_MARKERS = ["tc", "th", "tcr", "thr"];
  static MISC_MARKERS = ["fig", "cat", "esb", "b", "ph", "pi"];

  constructor(treeSitterLanguageObj, usfmString, usjRootObj = null) {
    this.usfmLanguage = treeSitterLanguageObj;
    this.usfm = usfmString;
    this.jsonRootObj = usjRootObj || {
      type: "USJ",
      version: "0.3.0",
      content: []
    };
  }

  findLastFromJson(jsonObj, typeValue) {
    let output = null;
    if (typeValue === jsonObj.type || (jsonObj.marker && typeValue === jsonObj.marker)) {
      output = jsonObj;
    }
    if (jsonObj.content) {
      jsonObj.content.forEach(child => {
        if (typeof child === "string") {
          return;
        }
        const childOutput = this.findLastFromJson(child, typeValue);
        if (childOutput !== null) {
          output = childOutput;
        }
      });
    }
    return output;
  }

  nodeToUSJId(node, parentJsonObj) {
    const idCaptures = this.usfmLanguage.query("(id (bookcode) @book-code (description)? @desc)").captures(node);
    let code = null;
    let desc = null;
    idCaptures.forEach(tuple => {
      if (tuple[1] === "book-code") {
        code = this.usfm.slice(tuple[0].startByte, tuple[0].endByte);
      } else if (tuple[1] === "desc") {
        desc = this.usfm.slice(tuple[0].startByte, tuple[0].endByte);
      }
    });
    const bookJsonObj = {
      type: "book",
      marker: "id",
      code: code,
      content: []
    };
    if (desc && desc.trim() !== "") {
      bookJsonObj.content.push(desc.trim());
    }
    parentJsonObj.content.push(bookJsonObj);
  }

  // Similar conversion methods for other node types
  nodeToUSJC(node, parentJsonObj) {
    // Build c, the chapter milestone node in usj
    const chapCap = this.usfmLanguage.query(`(c (chapterNumber) @chap-num
                                             (ca (chapterNumber) @alt-num)?
                                             (cp (text) @pub-num)?)`).captures(node);
    const chapNum = this.usfm.substring(chapCap[0][0].startByte, chapCap[0][0].endByte);
    let chapRef = null;
    this.jsonRootObj.content.forEach(child => {
      if (child.type === "book") {
        chapRef = `${child.code} ${chapNum}`;
        return;
      }
    });

    const chapJsonObj = {
      type: "chapter",
      marker: "c",
      number: chapNum,
      sid: chapRef
    };

    chapCap.forEach(tuple => {
      if (tuple[1] === "alt-num") {
        chapJsonObj.altnumber = this.usfm.substring(tuple[0].startByte, tuple[0].endByte).trim();
      }
      if (tuple[1] === "pub-num") {
        chapJsonObj.pubnumber = this.usfm.substring(tuple[0].startByte, tuple[0].endByte).trim();
      }
    });

    parentJsonObj.content.push(chapJsonObj);

    node.children.forEach(child => {
      if (["cl", "cd"].includes(child.type)) {
        this.nodeToUSJ(child, parentJsonObj);
      }
    });
  }

  nodeToUSJChapter(node, parentJsonObj) {
    // Build chapter node in USJ
    node.children.forEach(child => {
      if (child.type === "c") {
        this.nodeToUSJC(child, parentJsonObj);
      } else {
        this.nodeToUSJ(child, parentJsonObj);
      }
    });
  }

  nodeToUSJVerse(node, parentJsonObj) {
    // Build verse node in USJ
    const verseNumCap = this.usfmLanguage.query(`
      (v
          (verseNumber) @vnum
          (va (verseNumber) @alt)?
          (vp (text) @vp)?
      )`).captures(node);

    const verseNum = this.usfm.substring(verseNumCap[0][0].startByte, verseNumCap[0][0].endByte);

    const vJsonObj = {
      type: "verse",
      marker: "v",
      number: verseNum.trim()
    };

    verseNumCap.forEach(tuple => {
      if (tuple[1] === 'alt') {
        const altNum = this.usfm.substring(tuple[0].startByte, tuple[0].endByte);
        vJsonObj.altnumber = altNum;
      } else if (tuple[1] === 'vp') {
        const vpText = this.usfm.substring(tuple[0].startByte, tuple[0].endByte).trim();
        vJsonObj.pubnumber = vpText;
      }
    });

    const ref = `${this.findLastFromJson(this.jsonRootObj, "chapter").sid}:${verseNum}`;
    vJsonObj.sid = ref.trim();

    parentJsonObj.content.push(vJsonObj);
  }

  nodeToUSJCaVa(node, parentJsonObj) {
    // Build elements for independent ca and va away from c and v
    const style = node.type;
    const charJsonObj = {
      type: "char",
      marker: style
    };

    const altNumMatch = this.usfmLanguage.query(`([
        (chapterNumber)
        (verseNumber)
    ] @alt-num)`).captures(node)[0];

    const altNum = this.usfm.substring(altNumMatch[0].startByte, altNumMatch[0].endByte).trim();

    charJsonObj.altnumber = altNum;
    parentJsonObj.content.push(charJsonObj);
  }

  nodeToUSJPara(node, parentJsonObj) {
    // Build paragraph nodes in USJ
    if (node.children[0].type.endsWith('Block')) {
      node.children[0].children.forEach(child => {
        this.nodeToUSJPara(child, parentJsonObj);
      });
    } else if (node.type === 'paragraph') {
      const paraTagCap = this.usfmLanguage.query("(paragraph (_) @para-marker)").captures(node)[0];
      const paraMarker = paraTagCap[0].type;
      if (paraMarker === "b") {
        this.nodeToUSJSpecial(paraTagCap[0], parentJsonObj);
      } else if (!paraMarker.endsWith("Block")) {
        const paraJsonObj = { type: "para", marker: paraMarker, content: [] };
        paraTagCap[0].children.slice(1).forEach(child => {
          this.nodeToUSJ(child, paraJsonObj);
        });
        parentJsonObj.content.push(paraJsonObj);
      }
    } else if (['pi', "ph"].includes(node.type)) {
      const paraMarker = this.usfm.substring(node.children[0].startByte, node.children[0].endByte).replace("\\", "").trim();
      const paraJsonObj = { type: "para", marker: paraMarker, content: [] };
      node.children.slice(1).forEach(child => {
        this.nodeToUSJ(child, paraJsonObj);
      });
      parentJsonObj.content.push(paraJsonObj);
    }
  }

  nodeToUSJNotes(node, parentJsonObj) {
    // Build USJ nodes for footnotes and cross-references
    const tagNode = node.children[0];
    const callerNode = node.children[1];
    const style = this.usfm.substring(tagNode.startByte, tagNode.endByte).replace("\\", "").trim();
    const noteJsonObj = {
      type: "note",
      marker: style,
      content: []
    };

    noteJsonObj.caller = this.usfm.substring(callerNode.startByte, callerNode.endByte).trim();

    for (let i = 2; i < node.children.length - 1; i++) {
      this.nodeToUSJ(node.children[i], noteJsonObj);
    }

    parentJsonObj.content.push(noteJsonObj);
  }

  nodeToUSJChar(node, parentJsonObj) {
    // Build USJ nodes for character markups, both regular and nested
    const tagNode = node.children[0];
    let childrenRange = node.children.length;
    if (node.children[node.children.length - 1].type.startsWith('\\')) {
      childrenRange -= 1; // Exclude the last node if it starts with '\', treating it as a closing node
    }
    const style = this.usfm.substring(tagNode.startByte, tagNode.endByte)
      .replace("\\", "").replace("+", "").trim();
    const charJsonObj = {
      type: "char",
      marker: style,
      content: []
    };

    // Assume a flag for closed markup, toggle this if your conditions and data structure require
    // charJsonObj.closed = node.children[node.children.length - 1].type.startsWith('\\');

    for (let i = 1; i < childrenRange; i++) {
      this.nodeToUSJ(node.children[i], charJsonObj);
    }

    parentJsonObj.content.push(charJsonObj);
  }

  nodeToUSJTable(node, parentJsonObj) {
    // Handle table related components and convert to USJ
    if (node.type === "table") {
      const tableJsonObj = { type: "table", content: [] };
      node.children.forEach(child => {
        this.nodeToUSJ(child, tableJsonObj);
      });
      parentJsonObj.content.push(tableJsonObj);
    } else if (node.type === "tr") {
      const rowJsonObj = { type: "table:row", marker: "tr", content: [] };
      node.children.slice(1).forEach(child => {
        this.nodeToUSJ(child, rowJsonObj);
      });
      parentJsonObj.content.push(rowJsonObj);
    } else if (this.TABLE_CELL_MARKERS.includes(node.type)) {
      const tagNode = node.children[0];
      const style = this.usfm.substring(tagNode.startByte, tagNode.endByte).replace("\\", "").trim();
      const cellJsonObj = { type: "table:cell", marker: style, content: [], align: style.includes("r") ? "end" : "start" };
      node.children.slice(1).forEach(child => {
        this.nodeToUSJ(child, cellJsonObj);
      });
      parentJsonObj.content.push(cellJsonObj);
    }
  }

  nodeToUSJAttrib(node, parentJsonObj) {
    // Add attribute values to USJ elements
    const attribNameNode = node.children[0];
    let attribName = this.usfm.substring(attribNameNode.startByte, attribNameNode.endByte).trim();

    // Handling special cases for attribute names
    if (attribName === "|") {
      attribName = this.DEFAULT_ATTRIB_MAP[node.parent.type];
    }
    if (attribName === "src") { // for \fig
      attribName = "file";
    }

    const attribValCap = this.usfmLanguage.query("((attributeValue) @attrib-val)").captures(node);
    let attribValue = "";
    if (attribValCap.length > 0) {
      attribValue = this.usfm.substring(attribValCap[0][0].startByte, attribValCap[0][0].endByte).trim();
    }

    parentJsonObj[attribName] = attribValue;
  }

  nodeToUSJMilestone(node, parentJsonObj) {
    // Create ms node in USJ
    const msNameCap = this.usfmLanguage.query(`(
        [(milestoneTag)
         (milestoneStartTag)
         (milestoneEndTag)
         (zSpaceTag)
         ] @ms-name)`).captures(node)[0];
    const style = this.usfm.substring(msNameCap[0].startByte, msNameCap[0].endByte)
      .replace("\\", "").trim();
    const msJsonObj = { type: "ms", marker: style, content: [] };

    node.children.forEach(child => {
      if (child.type.endsWith("Attribute")) {
        this.nodeToUSJ(child, msJsonObj);
      }
    });

    // Though normally milestones don't have contents, custom z-namespaces could have them
    if (!msJsonObj.content.length) {
      delete msJsonObj.content;  // Remove empty content array if not used
    }

    parentJsonObj.content.push(msJsonObj);
  }

  nodeToUSJSpecial(node, parentJsonObj) {
    // Build nodes for esb, cat, fig, optbreak in USJ
    if (node.type === "esb") {
      const sidebarJsonObj = { type: "sidebar", marker: "esb", content: [] };
      node.children.slice(1, -1).forEach(child => {
        this.nodeToUSJ(child, sidebarJsonObj);
      });
      parentJsonObj.content.push(sidebarJsonObj);
    } else if (node.type === "cat") {
      const catCap = this.usfmLanguage.query('((category) @category)').captures(node)[0];
      const category = this.usfm.substring(catCap[0].startByte, catCap[0].endByte).trim();
      parentJsonObj.category = category;
    } else if (node.type === 'fig') {
      const figJsonObj = { type: "figure", marker: "fig", content: [] };
      node.children.slice(1, -1).forEach(child => {
        this.nodeToUSJ(child, figJsonObj);
      });
      parentJsonObj.content.push(figJsonObj);
    } else if (node.type === 'b') {
      const bJsonObj = { type: "optbreak", marker: "b" };
      parentJsonObj.content.push(bJsonObj);
    } else if (node.type === "usfm") {
      const verJsonObj = { type: "para", marker: "usfm", content: [] };
      const version = this.usfm.substring(node.startByte, node.endByte).replace("\\usfm", "").trim();
      verJsonObj.content.push(version);
      parentJsonObj.content.push(verJsonObj);
    }
  }
  nodeToUSJGeneric(node, parentJsonObj) {
    // Build nodes for para style markers in USJ
    const tagNode = node.children[0];
    let style = this.usfm.substring(tagNode.startByte, tagNode.endByte);
    if (style.startsWith('\\')) {
      style = style.replace('\\', '').trim();
    } else {
      style = node.type;
    }
    let childrenRangeStart = 1;
    if (node.children.length > 1 && node.children[1].type.startsWith("numbered")) {
      const numNode = node.children[1];
      const num = this.usfm.substring(numNode.startByte, numNode.endByte);
      style += num;
      childrenRangeStart = 2;
    }
    const paraJsonObj = { type: "para", marker: style, content: [] };
    parentJsonObj.content.push(paraJsonObj);

    for (let i = childrenRangeStart; i < node.children.length; i++) {
      const child = node.children[i];
      if (this.CHAR_STYLE_MARKERS.includes(child.type) ||
        this.NESTED_CHAR_STYLE_MARKERS.includes(child.type) ||
        ["text", "footnote", "crossref", "verseText", "v", "b", "milestone", "zNameSpace"].includes(child.type)) {
        // Only nest these types inside the upper para style node
        this.nodeToUSJ(child, paraJsonObj);
      } else {
        this.nodeToUSJ(child, parentJsonObj);
      }
    }
  }

  nodeToUSJ(node, parentJsonObj) {
    // Check each node and based on the type convert to corresponding XML element
    switch (node.type) {
      case "id":
        this.nodeToUSJId(node, parentJsonObj);
        break;
      case "chapter":
        this.nodeToUSJChapter(node, parentJsonObj);
        break;
      case "cl":
      case "cp":
      case "cd":
      case "vp":
        this.nodeToUSJGeneric(node, parentJsonObj);
        break;
      case "ca":
      case "va":
        this.nodeToUSJCaVa(node, parentJsonObj);
        break;
      case "v":
        this.nodeToUSJVerse(node, parentJsonObj);
        break;
      case "verseText":
        node.children.forEach(child => this.nodeToUSJ(child, parentJsonObj));
        break;
      case "paragraph":
      case "pi":
      case "ph":
        this.nodeToUSJPara(node, parentJsonObj);
        break;
      case "text":
        const textVal = this.usfm.substring(node.startByte, node.endByte).trim();
        if (textVal !== "") {
          parentJsonObj.content.push(textVal);
        }
        break;
      case "table":
      case "tr":
        this.nodeToUSJTable(node, parentJsonObj);
        break;
      case "milestone":
      case "zNameSpace":
        this.nodeToUSJMilestone(node, parentJsonObj);
        break;
      case "esb":
      case "cat":
      case "fig":
      case "usfm":
        this.nodeToUSJSpecial(node, parentJsonObj);
        break;
      default:
        if (this.CHAR_STYLE_MARKERS.includes(node.type) || this.NESTED_CHAR_STYLE_MARKERS.includes(node.type) || ["xt_standalone"].includes(node.type)) {
          this.nodeToUSJChar(node, parentJsonObj);
        } else if (node.type.endsWith("Attribute")) {
          this.nodeToUSJAttrib(node, parentJsonObj);
        } else if (this.PARA_STYLE_MARKERS.includes(node.type) || this.PARA_STYLE_MARKERS.includes(node.type.replace("\\", "").trim())) {
          this.nodeToUSJGeneric(node, parentJsonObj);
        } else if (["", "|"].includes(node.type.trim())) {
          // Skip white space nodes
          break;
        } else if (node.children.length > 0) {
          node.children.forEach(child => this.nodeToUSJ(child, parentJsonObj));
        } else {
          console.error("Encountered unknown element ", node.type);
        }
        break;
    }
  }
}

