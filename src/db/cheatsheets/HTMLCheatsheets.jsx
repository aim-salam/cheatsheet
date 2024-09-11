const ElementBodyChildren = [
  {
    id: "html-hyperlink",
    topic: "HTML",
    table: "element > body childrens element",
    action: "Hyperlink",
    explanation: "An element with link",
    visual: "https://images.cheatsheet.cam/images/image-1726039801639.webp",
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
  },
  {
    id: "html-title",
    topic: "HTML",
    table: "element > body childrens element",
    action: "Title",
    explanation: "An element with link",
    visual: "https://images.cheatsheet.cam/images/image-1726055416648.webp",
    code: `<title>Chat</title>`,
    typeCode: "html",
    emoji: "❄️",
    priority: 2,
  },
  {
    id: "html-p",
    topic: "HTML",
    table: "element > body childrens element",
    action: "Paragraph",
    explanation: "An element with link",
    visual: "https://images.cheatsheet.cam/images/image-1726057764130.webp",
    code: `<p>This is a paragraph of text.</p>`,
    typeCode: "html",
    emoji: "❄️",
    priority: 3,
  },
];

export const HTMLCheatsheet = [...ElementBodyChildren];
