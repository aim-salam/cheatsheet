import Cheatsheet from "../CheatsheetClass";

const INTRODUCTION = [
  new Cheatsheet({
    id: "react-prerequisite",
    topic: "React",
    table: "Introduction",
    action: "Prerequisite",
    description: `A video editor is a framework used to create videos.`,
    visual: [
      {
        text: "Video editor :",
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
    description: `React is a library/framework used to build user interfaces for webpages.`,
    visual: [
      {
        text: "React: ",
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
