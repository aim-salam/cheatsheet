import Cheatsheet from "../CheatsheetClass";

const INTRODUCTION = [
  new Cheatsheet({
    id: "html-prerequisite",
    topic: "HTML",
    table: "Introduction",
    action: "Prerequisite",
    description: [
      `The building blocks of a website are structure, style, and logic.`,
    ],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726415526322.webp",
      },
    ],
    // prerequisite: [],

    emoji: "❄️",
    priority: 1,
    codeType: "html",
  }),
  new Cheatsheet({
    id: "html-definition",
    topic: "HTML",
    table: "Introduction",
    action: "Definition",
    description: [
      `HTML is a language used to write the markup/structure of a webpage.`,
    ],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726073050194.webp",
      },
    ],
    // prerequisite: [],

    emoji: "❄️",
    priority: 1,
    codeType: "html",
  }),
  new Cheatsheet({
    id: "html-bb",
    topic: "HTML",
    table: "Introduction",
    action: "Building-block",
    description: ["Element, Attribute, Tag"],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726375367455.webp",
      },
    ],
    // prerequisite: [],

    emoji: "❄️",
    priority: 1,
    codeType: "html",
  }),
];

const HEAD = [
  new Cheatsheet({
    id: "html-head",
    topic: "HTML",
    table: "Head",
    action: "head",
    description: ["Tell Browser and Search Engine about this page"],
    visual: [],
    code: `<head>

</head>  `,
    typeCode: "html",
    emoji: "❄️",
    priority: 2,
  }),
  new Cheatsheet({
    id: "html-meta",
    topic: "HTML",
    table: "Head",
    action: "meta",
    description: ["Information about this page."],
    visual: [],
    code: `<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="keyword" content="HTML, CSS, cheatsheet" />
<meta name="description" content="A website with full of cheatsheets" />
</head>`,
    typeCode: "html",
    emoji: "❄️",
    priority: 2,
  }),
  new Cheatsheet({
    id: "html-title",
    topic: "HTML",
    table: "Head",
    action: "title",
    description: ["Name on browser tab"],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726376355741.webp",
      },
    ],
    code: `<head>
<title>Title</title>
</head>`,
    typeCode: "html",
    emoji: "❄️",
    priority: 2,
  }),
];

const TEXT = [
  new Cheatsheet({
    id: "html-text",
    topic: "HTML",
    table: "Text",
    action: "text",
    description: [" "],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726377955757.webp",
      },
    ],
    code: ` `,
    typeCode: "html",
    emoji: "❄️",
    priority: 2,
  }),
  new Cheatsheet({
    id: "html-header",
    topic: "HTML",
    table: "Text",
    action: "header: h1, h2, h3",
    description: [
      "The header is used to create hierarchy. Avoid applying styling to it.",
    ],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726377755954.webp",
      },
    ],
    code: `<body>
<h1>Example of HTML Header 1</h1>
<h2>Example of HTML Header 2</h2>
<h3>Example of HTML Header 3</h3>
</body>`,
    typeCode: "html",
    emoji: "❄️",
    priority: 2,
  }),
  new Cheatsheet({
    id: "html-paragraph",
    topic: "HTML",
    table: "Text",
    action: "paragrahph",
    description: [" "],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726377508775.webp",
      },
    ],
    code: `<body>
<p>This is the paragraph</p>
</body>`,
    typeCode: "html",
    emoji: "❄️",
    priority: 2,
  }),
  new Cheatsheet({
    id: "html-deprecated",
    topic: "HTML",
    table: "Text",
    action: "emphasize, italic, strong, bold",
    description: ["Deprecated, HTML is not meant for styling"],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726377389128.webp",
      },
    ],
    code: `<!-- deprecated -->`,
    typeCode: "html",
    emoji: "❄️",
    priority: 2,
  }),
];

const ENTITIES = [
  new Cheatsheet({
    id: "html-entities",
    topic: "HTML",
    table: "Entities",
    action: "entities",
    description: [
      "Some characters are reserved by HTML. To display them, we need to use special notation",
    ],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726379077381.webp",
      },
    ],
    code: `<body>
<!-- Not working -->
<p>This is the entities. <HTML></p> 

<!-- Working -->
<p>This is the entities. &lt;HTML&gt;</p>
</body>`,
    typeCode: "html",
    emoji: "❄️",
    priority: 2,
  }),
];

export const HTMLCheatsheet = [...INTRODUCTION, ...HEAD, ...TEXT, ...ENTITIES];
