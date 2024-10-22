import Cheatsheet from "../CheatsheetClass";
const INTRODUCTION = [
  new Cheatsheet({
    id: "react-prerequisite",
    topic: "React",
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
        text: "Video and video editor",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    code: [],
    visual: [
      {
        text: "Video editor :",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726417562619.webp",
        code: "",
        code_type: "",
      },
    ],
    emoji: [
      {
        text: "🔥",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
  }),
  new Cheatsheet({
    id: "react-definition",
    topic: "React",
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
        text: "React is a library/framework used to build webpages.",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    code: [],
    visual: [
      {
        text: "React: ",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726417831933.webp",
        code: "",
        code_type: "",
      },
    ],
    emoji: [
      {
        text: "🔥",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
  }),
  new Cheatsheet({
    id: "react-bb",
    topic: "React",
    table: "Introduction",
    action: [
      {
        text: "Building-block",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "Components, JSX, Props, State, Hooks, Handling events, Virtual DOM, Router",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    code: [],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726418761530.webp",
        code: "",
        code_type: "",
      },
    ],
    emoji: [
      {
        text: "🔥",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
  }),
];

export const ReactTopic = {
  topic: "React",
  type: "parent",
  imageLink: "https://images.cheatsheet.cam/images/react.webp",
  tables: [
    {
      table: "Introduction",
    },
  ],
};

export const ReactCheatsheet = [...INTRODUCTION];
