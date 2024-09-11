const templateCheatsheet = {
  id: "dasdasdada",
  //
  topic: "git",
  table: "Basic Snapshotting",
  //
  action: "Check file changes",
  explanation: "",
  requirement: [{ text: "", link: "" }],
  //
  visual: [{ text: "", link: "" }],
  gui: "https://images.cheatsheet.cam/images/Screenshot-2024-09-07-at-3.01.22-AM.webp",
  cli: "git ..",
  code: "",
  typeCode: "",
  //
  emoji: "❄️",
  priority: 1,
  //
  contentContributor: [],
  githubContributor: [],
};

export const cheatsheets = [
  {
    id: "html-hyperlink",
    topic: "html",
    table: "element > body childrens element",
    action: "hyperlink",
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
    id: "html-hyperlink",
    topic: "html",
    table: "element > body childrens element",
    action: "Title",
    explanation: "An element with link",
    visual: "https://images.cheatsheet.cam/images/image-1726039801639.webp",
    code: `<title>Chat</title>`,
    typeCode: "html",
    emoji: "❄️",
    priority: 1,
  },
];
