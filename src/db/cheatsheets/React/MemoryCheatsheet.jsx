import Cheatsheet from "../CheatsheetClass";

const INTRODUCTION = [
  new Cheatsheet({
    id: "memory-prerequisite",
    topic: "Memory",
    table: "Introduction",
    action: "Definition",
    description: [`Memory is a component building-block to hold data.`],
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
  new Cheatsheet({
    id: "memory-variable",
    topic: "Memory",
    table: "Introduction",
    action: "Variable",
    description: [
      `1. Variable can hold data.`,
      ` `,
      ` `,
      `2. but it can't trigger React to re-render the component.`,
    ],
    visual: [
      {
        text: "Component memories :",
        link: "https://images.cheatsheet.cam/images/image-1726424143343.webp",
      },
    ],

    emoji: "❄️",
    priority: 1,
    codeType: "js",
  }),
];

export const MemoryCheatsheet = [...INTRODUCTION];
