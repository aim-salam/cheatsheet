import Cheatsheet from "../CheatsheetClass";

const INTRODUCTION = [
  new Cheatsheet({
    id: "html-definition",
    topic: "HTML",
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
        text: "HTML is a language used to write the markup/structure of a webpage.",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726073050194.webp",
        code: "",
        code_type: "",
      },
    ],
  }),
  new Cheatsheet({
    id: "html-bb",
    topic: "HTML",
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
      // {
      //   text: "Element, Attribute, Tag",
      //   image_link: "",
      //   code: "",
      //   code_type: "",
      // },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726375367455.webp",
        code: "",
        code_type: "",
      },
    ],
  }),
];

const HEAD_SECTION = [
  new Cheatsheet({
    id: "html-head",
    topic: "HTML",
    table: "Head Section",
    action: [
      {
        text: "Head Section",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "Search Engine : tell them about our web page.",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
    code: [
      {
        text: "",
        image_link: "",
        code: `<!-- Code -->
<head></head>

<!-- Full code -->
<!DOCTYPE html>
<html lang="en">
 <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Document</title>
 </head>
 <body></body>
</html>`,
        code_type: "html",
      },
    ],
  }),
  new Cheatsheet({
    id: "html-title",
    topic: "HTML",
    table: "Head Section",
    action: [
      {
        text: "title",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726376355741.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `<!-- Code -->
<title>Intro Page</title>`,
        code_type: "html",
      },
    ],
  }),
  new Cheatsheet({
    id: "html-meta",
    topic: "HTML",
    table: "Head Section",
    action: [
      {
        text: "meta",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: `- keywords
- description
- 
`,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1727869803002.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `<!-- Code -->
<meta name="description" content="Details about webpage" />
<meta name="keywords" content="autotask, ai, cheap" />`,
        code_type: "html",
      },
    ],
  }),
];

//Body Section
const BODY_SECTION = [
  new Cheatsheet({
    id: "html-body-section",
    topic: "HTML",
    table: "Body Section",
    action: [
      {
        text: `Body Section`,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [],
    visual: [],
    code: [
      {
        text: "",
        image_link: "",
        code: `<!-- Code -->
<body></body>

<!-- Full code -->
<!DOCTYPE html>
<html lang="en">
 <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Document</title>
 </head>
 <body></body>
</html>`,
        code_type: "html",
      },
    ],
  }),
  new Cheatsheet({
    id: "html-body-section-list",
    topic: "HTML",
    table: "Body Section",
    action: [
      {
        text: `- text
- entities
- hyperlink
- image
- video 
- audio
- list
- table`,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [],
    visual: [],
    code: [
      {
        text: "",
        image_link: "",
        code: ``,
        code_type: "html",
      },
    ],
  }),
];

// TEXT
const TEXT = [
  new Cheatsheet({
    id: "html-text",
    topic: "HTML",
    table: "Text",
    action: [
      {
        text: "text",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726377955757.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [],
  }),
  new Cheatsheet({
    id: "html-header",
    topic: "HTML",
    table: "Text",
    action: [
      {
        text: "header",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "The header is used to create hierarchy. Avoid applying styling to it.",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726377755954.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `<h1>Example of HTML Header 1</h1>
<h2>Example of HTML Header 2</h2>
<h3>Example of HTML Header 3</h3>
`,
        code_type: "html",
      },
    ],
  }),
  new Cheatsheet({
    id: "html-paragraph",
    topic: "HTML",
    table: "Text",
    action: [
      {
        text: "paragrahph",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726377508775.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `<p>This is the paragraph</p>`,
        code_type: "html",
      },
    ],
  }),
  new Cheatsheet({
    id: "html-deprecated",
    topic: "HTML",
    table: "Text",
    action: [
      {
        text: "emphasize, italic, strong, bold",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "Deprecated, HTML is not meant for styling",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726377389128.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `<!-- deprecated -->`,
        code_type: "html",
      },
    ],
  }),
];

// entities
const ENTITIES = [
  new Cheatsheet({
    id: "html-entities",
    topic: "HTML",
    table: "Entities",
    action: [
      {
        text: "entities",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "Some characters are reserved by HTML. To display them, we need to use special notation",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726379077381.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `<!-- Not working -->
<p>This is the entities. <HTML></p>

<!-- Working -->
<p>This is the entities. &lt;HTML&gt;</p>`,
        code_type: "html",
      },
    ],
  }),
];

//hyperlink
const HYPERLINK = [
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

// image
const IMAGE = [
  new Cheatsheet({
    id: "html-image",
    topic: "HTML",
    table: "Image",
    action: [
      {
        text: "img",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1727871717851.webp",
        code: "",
        code_type: "",
      },
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1727871808237.webp",
        code: "",
        code_type: "",
      },
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1727871973687.webp",
        code: "",
        code_type: "",
      },
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1727872139964.webp",
        code: "",
        code_type: "",
      },
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1727872152213.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `<img src="./mario.jpg" /><!-- Displays the image 'mario.jpg' with no specific height, width, or alt text -->
<img src="./mariio.jpg" alt="Mario and Luigi." /><!-- Displays the image 'mariio.jpg' (note the typo in the filename) with alt text 'Mario and Luigi' -->
<img src="./mario.jpg" height="200px" /><!-- Displays the image 'mario.jpg' with a height of 200px, width is not specified so it adjusts automatically -->
<img src="./mario.jpg" height="200px" width="200px" /><!-- Displays the image 'mario.jpg' with both height and width set to 200px -->
<img src="./mario.jpg" height="200px" width="200px" style="object-fit: cover;" /><!-- Displays the image 'mario.jpg' with height and width set to 200px, using object-fit: cover to maintain aspect ratio while filling the box -->`,
        code_type: "html",
      },
    ],
  }),
];

export const HTMLCheatsheet = [
  ...INTRODUCTION,
  ...HEAD_SECTION,
  ...BODY_SECTION,
  ...TEXT,
  ...ENTITIES,
  ...HYPERLINK,
  ...IMAGE,
];
