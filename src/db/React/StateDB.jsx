import Cheatsheet from "../CheatsheetClass";
import { INTRODUCTION } from "./State/StateIntroductionDB";
import { MEMORY } from "./State/StateMemoryDB";
import { UPDATE } from "./State/StateUpdateDB";

export const StateTopic = {
  topic: "State",
  type: "grandchildren",
  imageLink: "https://images.cheatsheet.cam/images/state.webp",
  tables: [
    {
      table: "Introduction",
    },
    {
      table: "Update",
    },
  ],
};

export const StateCheatsheet = [...INTRODUCTION, ...MEMORY, ...UPDATE];
