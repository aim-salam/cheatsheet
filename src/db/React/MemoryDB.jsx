import Cheatsheet from "../CheatsheetClass";
import { INTRODUCTION } from "./Memory/MemoryIntroductionDB";
import { VARIABLE } from "./Memory/MemoryVariablesDB";

export const MemoryTopic = {
  topic: "Memory",
  type: "children",
  imageLink: "https://images.cheatsheet.cam/images/image-1726470454377.webp",
  tables: [
    {
      table: "Introduction",
    },
    {
      table: "Variable",
    },
  ],
};

export const MemoryCheatsheet = [...INTRODUCTION, ...VARIABLE];
