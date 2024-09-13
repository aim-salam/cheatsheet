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
    code: " ",
    emoji: "❄️",
    priority: 1,
  }),
  new Cheatsheet({
    id: "box-mode-border",
    topic: "Layout",
    table: "Box model",
    action: "Border",
    description: " ",
    visual: [
      {
        text: "Before:",
        link: "https://images.cheatsheet.cam/images/image-1726219780955.webp",
      },
      {
        text: "After:",
        link: "https://images.cheatsheet.cam/images/image-1726219793700.webp",
      },
    ],
    code: `border: 5px solid #3435ff; /* width style color */
border-color:  #3435ff;`,
    emoji: "❄️",
    priority: 1,
  }),
  new Cheatsheet({
    id: "box-mode-padding",
    topic: "Layout",
    table: "Box model",
    action: "Padding",
    description: " ",
    visual: [
      {
        text: "Before:",
        link: "https://images.cheatsheet.cam/images/image-1726219793700.webp",
      },
      {
        text: "After:",
        link: "https://images.cheatsheet.cam/images/image-1726219983411.webp",
      },
    ],
    code: `padding :10px; /* all side */
padding: 10px 20px;  /* vertical horizontal */
padding: 10px 20px 30px 40px; /* top right bottom left */


padding-left: 10px;/* only left */
padding-right: 10px;/* only right */
padding-top: 10px;/* only top */`,
    emoji: "❄️",
    priority: 1,
  }),
  new Cheatsheet({
    id: "box-mode-margin",
    topic: "Layout",
    table: "Box model",
    action: "Margin",
    description: " ",
    visual: [
      {
        text: "Before:",
        link: "https://images.cheatsheet.cam/images/image-1726220205859.webp",
      },
      {
        text: "After:",
        link: "https://images.cheatsheet.cam/images/image-1726220218776.webp",
      },
    ],
    code: `/* same like padding */`,
    emoji: "❄️",
    priority: 1,
  }),
];

export const LayoutCheatsheets = [...BOX_MODEL];
