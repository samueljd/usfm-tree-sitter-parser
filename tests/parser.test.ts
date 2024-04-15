// test/parser.test.ts

import { USFMParser } from "../src/parser";

describe("USFMParser Tests", () => {
  test("should parse data correctly", () => {
    const parser = new USFMParser("Sample USFM data");
    expect(() => parser.parse()).not.toThrow();
  });
});
