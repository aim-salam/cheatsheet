import Cheatsheet from "../CheatsheetClass";
import { INTRODUCTION } from "./HTML/HTMLIntroductionDB";
import { HEAD_SECTION } from "./HTML/HTMLHeadSectionDB";
import { BODY_SECTION } from "./HTML/HTMLBodySectionDB";
import { TEXT } from "./HTML/HTMLTextDB";
import { ENTITIES } from "./HTML/HTMLEntitiesDB";
import { HYPERLINK } from "./HTML/HTMLHyperlinkDB";
import { IMAGE } from "./HTML/HTMLImageDB";
import { VIDEO } from "./HTML/HTMLVideoDB";
import { LIST } from "./HTML/HTMLListDB";
import { TABLE } from "./HTML/HTMLTableDB";
import { CONTAINER } from "./HTML/HTMLContainerDB";
import { SEMANTIC_ELEMENTS } from "./HTML/HTMLSemanticElementsDB";
import { STRUCTURING } from "./HTML/HTMLStructuringDB";
import { BEHAVIOUR_ELEMENTS } from "./HTML/HTMLBehaviourElementsDB";
import { SHORTCUTS } from "./HTML/HTMLShortcutDB";
import { TOOLS } from "./HTML/HTMLToolsDB";

export const HTMLTopic = {
  topic: "HTML",
  type: "parent",
  imageLink: "https://images.cheatsheet.cam/images/html.webp",
  tables: [
    {
      table: "Introduction",
    },
    {
      table: "Head Section",
    },
    {
      table: "Body Section",
    },
    {
      table: "Text",
    },
    {
      table: "Entities",
    },
    {
      table: "Hyperlink",
    },
    {
      table: "Image",
    },
    {
      table: "Video",
    },
    {
      table: "List",
    },
    {
      table: "Table",
    },
    {
      table: "Container",
    },
    {
      table: "Semantic Elements",
    },
    {
      table: "Structuring a web page",
    },
    {
      table: "Behaviour elements",
    },
    {
      table: "Shortcuts",
    },
    {
      table: "Tools",
    },
  ],
};

export const HTMLCheatsheet = [
  ...INTRODUCTION,
  ...HEAD_SECTION,
  ...BODY_SECTION,
  ...TEXT,
  ...ENTITIES,
  ...HYPERLINK,
  ...IMAGE,
  ...VIDEO,
  ...LIST,
  ...TABLE,
  ...CONTAINER,
  ...SEMANTIC_ELEMENTS,
  ...STRUCTURING,
  ...BEHAVIOUR_ELEMENTS,
  ...SHORTCUTS,
  ...TOOLS,
];
