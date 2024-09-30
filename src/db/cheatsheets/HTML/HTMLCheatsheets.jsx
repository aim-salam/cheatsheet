import Cheatsheet from "../CheatsheetClass";

const INTRODUCTION = [
  new Cheatsheet({
    id: "html-prerequisite",
    topic: "HTML",
    table: "Introduction",
    action: [
      {
        text: "Prerequisite",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
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
      {
        text: "Element, Attribute, Tag",
        image_link: "",
        code: "",
        code_type: "",
      },
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

const HEAD = [
  new Cheatsheet({
    id: "html-head",
    topic: "HTML",
    table: "Head",
    action: [
      {
        text: "head",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "Tell Browser and Search Engine about this page",
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
        code: `<head>

</head>  `,
        code_type: "html",
      },
    ],
  }),
  new Cheatsheet({
    id: "html-meta",
    topic: "HTML",
    table: "Head",
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
        text: "Information about this page.",
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
        code: `<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="keyword" content="HTML, CSS, cheatsheet" />
<meta name="description" content="A website with full of cheatsheets" />
</head>`,
        code_type: "html",
      },
    ],
  }),
  new Cheatsheet({
    id: "html-title",
    topic: "HTML",
    table: "Head",
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
        text: "Name on browser tab",
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
        code: `<head>
<title>Title</title>
</head>`,
        code_type: "html",
      },
    ],
  }),
];

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
        text: "header: h1, h2, h3",
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
        code: `<body>
<h1>Example of HTML Header 1</h1>
<h2>Example of HTML Header 2</h2>
<h3>Example of HTML Header 3</h3>
</body>`,
        code_type: "",
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
        code: `<body>
<p>This is the paragraph</p>
</body>`,
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
        code: `<body>
<!-- Not working -->
<p>This is the entities. <HTML></p>

<!-- Working -->
<p>This is the entities. &lt;HTML&gt;</p>
</body>`,
        code_type: "html",
      },
    ],
  }),
];

export const HTMLCheatsheet = [...INTRODUCTION, ...HEAD, ...TEXT, ...ENTITIES];
