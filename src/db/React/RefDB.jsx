import Cheatsheet from "../CheatsheetClass";
import { INTRODUCTION } from "./Ref/RefIntroductionDB";
import { MEMORY } from "./Ref/RefMemoryDB";
import { UPDATE } from "./Ref/RefUpdateDB";
import { ACCESS } from "./Ref/RefAccessDB";

export const RefTopic = {
  topic: "Reference",
  type: "grandchildren",
  imageLink: "https://images.cheatsheet.cam/images/image-1726462300507.webp",
  tables: [
    {
      table: "Introduction",
    },
    {
      table: "Access",
    },
    {
      table: "Update",
    },
  ],
};

export const RefCheatsheet = [...INTRODUCTION, ...MEMORY, ...UPDATE, ...ACCESS];
