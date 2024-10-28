import { it, expect, describe } from "vitest";
import { cheatsheets } from "../cheatsheets.jsx";

describe("Cheatsheet Data Structure Validation", () => {
  it("should validate that all row object values are strings", () => {
    cheatsheets.forEach((cheatsheet) => {
      cheatsheet.action.forEach((element) => {
        expect(typeof element.text).toBe("string");
        expect(typeof element.image_link).toBe("string");
        expect(typeof element.code).toBe("string");
        expect(typeof element.code_type).toBe("string");
      });

      cheatsheet.description.forEach((element) => {
        expect(typeof element.text).toBe("string");
        expect(typeof element.image_link).toBe("string");
        expect(typeof element.code).toBe("string");
        expect(typeof element.code_type).toBe("string");
      });

      cheatsheet.visual.forEach((element) => {
        expect(typeof element.text).toBe("string");
        expect(typeof element.image_link).toBe("string");
        expect(typeof element.code).toBe("string");
        expect(typeof element.code_type).toBe("string");
      });

      cheatsheet.code.forEach((element) => {
        expect(typeof element.text).toBe("string");
        expect(typeof element.image_link).toBe("string");
        expect(typeof element.code).toBe("string");
        expect(typeof element.code_type).toBe("string");
      });
    });
  });
});
