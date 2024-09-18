import Cheatsheet from "../CheatsheetClass";

const INTRODUCTION = [
  new Cheatsheet({
    id: "passdata-intro-defintion",
    topic: "Pass Data",
    table: "Introduction",
    action: "Definition",
    description: [`Ways to pass data from one component to another.`],
    visual: [],

    emoji: "❄️",
    priority: 1,
    codeType: "js",
  }),
  // new Cheatsheet({
  //   id: "passdata-intro-type",
  //   topic: "Pass Data",
  //   table: "Introduction",
  //   action: "Types",
  //   description: [
  //     `1. chidlrens-parent`,
  //     ` 2. children-children `,
  //     `3. grandchildrens-grandparent `,
  //     `4. grandchildrens-grandchildrens`,
  //   ],
  //   visual: [],

  //   emoji: "❄️",
  //   priority: 1,
  //   codeType: "js",
  // }),
  new Cheatsheet({
    id: "passdata-intro-cp",
    topic: "Pass Data",
    table: "Introduction",
    action: "1. children-parent",
    description: [`1. Props `, `2. Callback`],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726473103935.webp",
      },
    ],

    emoji: "❄️",
    priority: 1,
    codeType: "js",
  }),
  new Cheatsheet({
    id: "passdata-intro-cc",
    topic: "Pass Data",
    table: "Introduction",
    action: "2. children-children",
    description: [`1. lift-up`],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726473265025.webp",
      },
    ],

    emoji: "❄️",
    priority: 1,
    codeType: "js",
  }),
  new Cheatsheet({
    id: "passdata-intro-gcgp",
    topic: "Pass Data",
    table: "Introduction",
    action: "3. grandchildren-grandparent",
    description: [`1. useContext`],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726473815471.webp",
      },
    ],

    emoji: "❄️",
    priority: 1,
    codeType: "js",
  }),
  new Cheatsheet({
    id: "passdata-intro-gcgc",
    topic: "Pass Data",
    table: "Introduction",
    action: "4. grandchildren-grandchildren",
    description: [`1. Redux`],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726473660196.webp",
      },
    ],

    emoji: "❄️",
    priority: 1,
    codeType: "js",
  }),
];

export const PassDataCheatsheet = [...INTRODUCTION];
