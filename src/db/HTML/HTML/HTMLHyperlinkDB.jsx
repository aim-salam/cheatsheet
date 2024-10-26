import Cheatsheet from "../../CheatsheetClass";

export const HYPERLINK = [
  new Cheatsheet({
    id: "hyperlink-intro",
    topic: "HTML",
    table: "Hyperlink",
    action: [
      {
        text: "Hyperlink",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: `Element with link.`,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
    code: [],
  }),
  new Cheatsheet({
    id: "hyperlink-anchor",
    topic: "HTML",
    table: "Hyperlink",
    action: [
      {
        text: "anchor",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [],
    visual: [
      {
        text: ``,
        image_link:
          "https://images.cheatsheet.cam/images/image-1727870980136.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: ``,
        image_link: "",
        code: `<a href="./about.html">About me</a><!-- Link to a local page called about.html -->
  <a href="https://www.ytube..l">About me</a><!-- Link to an external website (incorrect URL as placeholder) -->
  <a href="https://www.ytube..l" target="_blank">About me</a><!-- Link to an external website (incorrect URL) that opens in a new tab/window -->
  <a href="./lol.jpg">About me</a><!-- Link to a local image file called lol.jpg -->
  <a href="./lol.jpg" download>About me</a><!-- Link to download a local image file called lol.jpg when clicked -->
  <a href="#id">About me</a><!-- Link to a specific section on the same page with id="id" -->
  <a href="mailto:xxxxx@gmail.com">About me</a><!-- Link to open an email client with a pre-filled recipient address -->`,
        code_type: "html",
      },
    ],
  }),
];
