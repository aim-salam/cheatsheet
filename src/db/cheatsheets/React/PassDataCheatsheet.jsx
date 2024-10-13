import Cheatsheet from "../CheatsheetClass";

const INTRODUCTION = [
  new Cheatsheet({
    id: "passdata-intro-defintion",
    topic: "Pass Data",
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
        text: "Ways to pass data from one component to another.",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
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
    action: [
      {
        text: "1. children-parent",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "1. Props ",
        image_link: "",
        code: "",
        code_type: "",
      },
      {
        text: "2. Callback",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726473103935.webp",
        code: "",
        code_type: "",
      },
    ],
  }),
  new Cheatsheet({
    id: "passdata-intro-cc",
    topic: "Pass Data",
    table: "Introduction",
    action: [
      [
        {
          text: "2. children-children",
          image_link: "",
          code: "",
          code_type: "",
        },
      ],
    ],
    description: [
      {
        text: "1. lift-up",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726473265025.webp",
        code: "",
        code_type: "",
      },
    ],
  }),
  new Cheatsheet({
    id: "passdata-intro-gcgp",
    topic: "Pass Data",
    table: "Introduction",
    action: [
      {
        text: "3. grandchildren-grandparent",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "1. useContext",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726473815471.webp",
        code: "",
        code_type: "",
      },
    ],
  }),
  new Cheatsheet({
    id: "passdata-intro-gcgc",
    topic: "Pass Data",
    table: "Introduction",
    action: [
      {
        text: "4. grandchildren-grandchildren",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "Redux",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726473660196.webp",
        code: "",
        code_type: "",
      },
    ],
  }),
];

export const PassDataCheatsheet = [...INTRODUCTION];
