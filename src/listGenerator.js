class ListGenerator {
  constructor() {
    this.book = "";
    this.currentChapter = "";
    this.currentVerse = "";
    this.list = [["Book", "Chapter", "Verse", "Text", "Type", "Marker"]];
  }

  usjToListId(obj) {
    this.book = obj.code;
  }

  usjToListC(obj) {
    this.currentChapter = obj.number;
  }

  usjToListV(obj) {
    this.currentVerse = obj.number;
  }

  usjToList(obj) {
    if (obj.type === "book") {
      this.usjToListId(obj);
    } else if (obj.type === "chapter") {
      this.usjToListC(obj);
    } else if (obj.type === "verse") {
      this.usjToListV(obj);
    }

    const markerType = obj.type;
    const markerName = obj.marker || '';

    if (markerType === "USJ") {
      // This would occur if the JSON got flattened after removing paragraph markers
      markerType = "";
    }

    if (obj.content) {
      for (const item of obj.content) {
        if (typeof item === 'string') {
          this.list.push([
            this.book, this.currentChapter, this.currentVerse,
            item, markerType, markerName
          ]);
        } else {
          this.usjToList(item);
        }
      }
    }
  }
}

module.exports = ListGenerator;