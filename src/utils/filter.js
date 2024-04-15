// src/Filter.js

const Filter = {
  BOOK_HEADERS: ["ide", "usfm", "h", "toc", "toca", "imt", "is", "ip", "ipi", "im", "imi", "ipq", "imq", "ipr", "iq", "ib", "ili", "iot", "io", "iex", "imte", "ie"],
  TITLES: ["mt", "mte", "cl", "cd", "ms", "mr", "s", "sr", "r", "d", "sp", "sd"],
  COMMENTS: ["sts", "rem", "lit", "restore"],
  PARAGRAPHS: ["p", "m", "po", "pr", "cls", "pmo", "pm", "pmc", "pmr", "pi", "mi", "nb", "pc", "ph", "q", "qr", "qc", "qa", "qm", "qd", "lh", "li", "lf", "lim", "litl", "tr", "tc", "th", "tcr", "thr", "table", "b"],
  CHARACTERS: ["add", "bk", "dc", "ior", "iqt", "k", "litl", "nd", "ord", "pn", "png", "qac", "qs", "qt", "rq", "sig", "sls", "tl", "wj", "em", "bd", "bdit", "it", "no", "sc", "sup", "rb", "pro", "w", "wh", "wa", "wg", "lik", "liv", "jmp"],
  NOTES: ["f", "fe", "ef", "efe", "x", "ex", "fr", "ft", "fk", "fq", "fqa", "fl", "fw", "fp", "fv", "fdc", "xo", "xop", "xt", "xta", "xk", "xq", "xot", "xnt", "xdc"],
  STUDY_BIBLE: ["esb", "cat"],
  BCV: ["id", "c", "v"],
  TEXT: ["text-in-excluded-parent"],
  // INNER_CONTENT: ["content-in-excluded-parent"]
};

module.exports = Filter;
