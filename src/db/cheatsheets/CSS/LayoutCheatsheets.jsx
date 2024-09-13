import Cheatsheet from "../CheatsheetClass";

const BOX_MODEL = [
  new Cheatsheet({
    id: "box-mode-box-modell",
    topic: "Layout",
    table: "Box model",
    action: "Box model",
    description: "Every element/content rendered will be put inside a box",
    visual: [
      {
        text: "Box Model",
        link: "https://images.cheatsheet.cam/images/image-1726218931438.webp",
      },
      {
        text: "Inspect in Browser",
        link: "https://images.cheatsheet.cam/images/image-1726218884809.webp",
      },
    ],
    code: "",
    emoji: "❄️",
    priority: 1,
  }),
];

export const LayoutCheatsheets = [...BOX_MODEL];
