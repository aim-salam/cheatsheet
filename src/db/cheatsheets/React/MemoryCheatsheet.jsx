import Cheatsheet from "../CheatsheetClass";

const INTRODUCTION = [
  new Cheatsheet({
    id: "memory-prerequisite",
    topic: "Memory",
    table: "Introduction",
    action: ["Prerequisite"],
    description: [`React building-block`],
    visual: [],

    emoji: "❄️",
    priority: 1,
    codeType: "js",
  }),
  new Cheatsheet({
    id: "memory-def",
    topic: "Memory",
    table: "Introduction",
    action: "Definition",
    description: [`Memory is a feature to hold data.`],
    visual: [],

    emoji: "❄️",
    priority: 1,
    codeType: "js",
  }),
  new Cheatsheet({
    id: "memory-type",
    topic: "Memory",
    table: "Introduction",
    action: "Types",
    description: [`variable, state, reference`],
    visual: [
      {
        text: "Component memories :",
        link: "https://images.cheatsheet.cam/images/image-1726470941134.webp",
      },
    ],

    emoji: "❄️",
    priority: 1,
    codeType: "js",
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

export const MemoryCheatsheet = [
  // ...INTRODUCTION,
  ...VARIABLE,
];
