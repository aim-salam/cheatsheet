import Cheatsheet from "../CheatsheetClass";

const INTRODUCTION = [
  new Cheatsheet({
    id: "react-prerequisite",
    topic: "React",
    table: "Introduction",
    action: "Prerequisite",
    description: `How do you edit videos? By using video editors like CapCut.`,
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726417562619.webp",
      },
    ],

    emoji: "❄️",
    priority: 1,
  }),
  new Cheatsheet({
    id: "react-definition",
    topic: "React",
    table: "Introduction",
    action: "Definition",
    description: `
React is like a video editor, but for websites.

A framework is a platform that provides an environment, tools, features, templates, etc.`,
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726417831933.webp",
      },
    ],

    emoji: "❄️",
    priority: 1,
  }),
  new Cheatsheet({
    id: "react-bb",
    topic: "React",
    table: "Introduction",
    action: "Building-block",
    description:
      "Components, JSX, Props, State, Hooks, Handling events, Virtual DOM, Router",
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726418761530.webp",
      },
    ],

    emoji: "❄️",
    priority: 1,
  }),
];

export const ReactCheatsheet = [...INTRODUCTION];
