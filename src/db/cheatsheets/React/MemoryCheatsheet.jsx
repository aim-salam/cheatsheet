import Cheatsheet from "../CheatsheetClass";

const INTRODUCTION = [
  new Cheatsheet({
    id: "memory-prerequisite",
    topic: "Memory",
    table: "Introduction",
    action: [
      {
        text: "Prerequisite",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "React building-block",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
  }),
  new Cheatsheet({
    id: "memory-def",
    topic: "Memory",
    table: "Introduction",
    action: [
      {
        text: "Definition",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "Memory is a feature to hold data.",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
  }),
  new Cheatsheet({
    id: "memory-type",
    topic: "Memory",
    table: "Introduction",
    action: [
      {
        text: "Types",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],

    description: [
      {
        text: "variable, state, reference",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "Variable",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726470941134.webp",
        code: "",
        code_type: "",
      },
    ],
  }),
];

const VARIABLE = [
  new Cheatsheet({
    id: "memory-variable",
    topic: "Memory",
    table: "Variable",
    action: [
      {
        text: "Variable",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "1. Variable can hold data.",
        image_link: "",
        code: "",
        code_type: "",
      },
      {
        text: "2. but it can't trigger React to re-render the component.",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "Component memories :",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726424143343.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: "let name = 'Sam'",
        code_type: "javascript",
      },
    ],
  }),
];

export const MemoryCheatsheet = [...INTRODUCTION, ...VARIABLE];
