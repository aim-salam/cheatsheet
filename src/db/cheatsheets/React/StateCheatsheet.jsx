import Cheatsheet from "../CheatsheetClass";

const INTRODUCTION = [
  new Cheatsheet({
    id: "state-prerequisite",
    topic: "State",
    table: "Introduction",
    action: "Prerequisite",
    description: `In JavaScript, a 'variable' holds data. But it can’t trigger React to re-render.`,
    visual: [
      {
        text: "Component memories :",
        link: "https://images.cheatsheet.cam/images/image-1726424143343.webp",
      },
    ],

    emoji: "❄️",
    priority: 1,
  }),
  new Cheatsheet({
    id: "state-definition",
    topic: "State",
    table: "Introduction",
    action: "Definition",
    description: `Similar to a 'variable', state can hold data and can also trigger React to re-render.`,
    visual: [
      {
        text: "Component memories :",
        link: "https://images.cheatsheet.cam/images/image-1726424168846.webp",
      },
    ],

    emoji: "❄️",
    priority: 1,
  }),
];

export const StateCheatsheet = [...INTRODUCTION];
