import { it, expect, describe } from "vitest";
import { topics } from "../topics.jsx";

describe("Topics Data Structure Validation", () => {
  it("should validate that all table names are strings", () => {
    topics.forEach((topic) => {
      topic.tables.forEach((table) => {
        expect(typeof table.table).toBe("string");
      });
    });
  });

  it("should have a valid type for each topic", () => {
    const allowedTypes = ["parent", "children", "grandchildren"];
    topics.forEach((topic) => {
      expect(allowedTypes).toContain(topic.type);
    });
  });
});
