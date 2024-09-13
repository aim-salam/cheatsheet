import Cheatsheet from "../CheatsheetClass";

const Introduction = [
  new Cheatsheet({
    id: "html-definition",
    topic: "HTML",
    table: "Introduction",
    action: "Definition",
    description: "An element with link",
    visual: [
      {
        text: "lol",
        link: "https://images.cheatsheet.cam/images/image-1726073050194.webp",
      },
    ],
    // prerequisite: [],

    emoji: "❄️",
    priority: 1,
  }),
];

const ElementBodyChildren = [
  new Cheatsheet({
    id: "html-hyperlink",
    topic: "HTML",
    table: "element > body childrens element",
    action: "Hyperlink",
    description: "An element with link",
    visual: [
      {
        text: "lol",
        link: "https://images.cheatsheet.cam/images/image-1726039801639.webp",
      },
    ],
    code: `<a href="./about.html">About me</a> //relative url
<a href="https://www.ytube..l" >About me</a> //url
<a href="https://www.ytube..l" target=”_blank”>About me</a> //url new tab
<a href="./lol.jpg">About me</a> //image new tab
<a href="./lol.jpg" download>About me</a> //image aut-download
<a href="#id">About me</a> //jump
<a href="mailto:xxxxx@gmail.com">About me</a> //email`,
    typeCode: "html",
    emoji: "❄️",
    priority: 1,
  }),
  new Cheatsheet({
    id: "html-title",
    topic: "HTML",
    table: "element > body childrens element",
    action: "Title",
    description: "An element with link",
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726055416648.webp",
      },
    ],
    code: `<title>Chat</title>`,
    typeCode: "html",
    emoji: "❄️",
    priority: 2,
  }),
  new Cheatsheet({
    id: "html-p",
    topic: "HTML",
    table: "element > body childrens element",
    action: "Paragraph",
    description: "An element with link",
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726057764130.webp",
      },
    ],
    code: `<p>This is a paragraph of text.</p>`,
    typeCode: "html",
    emoji: "❄️",
    priority: 3,
  }),
];

export const HTMLCheatsheet = [...ElementBodyChildren, ...Introduction];
