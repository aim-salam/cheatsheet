import { describe, it, expect } from "vitest";
import { max } from "./junk";
describe("max", () => {
  it("should return the first argument if it is greater", () => {
    //AAA
    expect(max(2, 1)).toBe(2);
  });

  it("should return the second argument if it is greater", () => {
    //AAA
    expect(max(1, 2)).toBe(2);
  });

  it("should return the first argument if arguments are equal", () => {
    //AAA
    expect(max(1, 1)).toBe(1);
  });
});
