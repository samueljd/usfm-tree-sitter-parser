const id_marker = String.raw`\id MAT some other info of file`;

const ide_marker = String.raw`\id GEN
\ide URF-8`;

const usfm_marker = String.raw`\id GEN
\usfm 3.0
\ide utf-8`;

const usfm_marker_after_ide = String.raw`\id GEN
\ide utf-8
\usfm 3.0`;

const h_marker = String.raw`\id GEN
\ide utf-8
\usfm 3.0
\h Genesis`;

const multiple_h_markers = String.raw`\id GEN
\ide utf-8
\usfm 3.0
\h Genesis
\h2 Part1`;

const toc_markers_under_h = String.raw`\id GEN
\ide utf-8
\usfm 3.0
\h Genesis
\toc1 genesis
\toc2 gen
\toc3 the book of genesis`;

const toc_markers_without_h = String.raw`\id GEN
\ide utf-8
\usfm 3.0
\toc1 genesis
\toc2 gen
\toc3 the book of genesis`;

const toca_markers = String.raw`\id GEN
\ide utf-8
\usfm 3.0
\h Genesis
\toca the book of genesis
\toca2 genesis
\toca3 gen`;

const toca_markers_along_with_toc = String.raw`\id GEN
\ide utf-8
\usfm 3.0
\h Genesis
\toc the book of genesis
\toc2 genesis
\toc3 gen
\toca the book of genesis
\toca2 genesis
\toca3 gen`;

module.exports = { id_marker, ide_marker, usfm_marker, usfm_marker_after_ide, h_marker, multiple_h_markers, toc_markers_under_h, toc_markers_without_h, toca_markers, toca_markers_along_with_toc };