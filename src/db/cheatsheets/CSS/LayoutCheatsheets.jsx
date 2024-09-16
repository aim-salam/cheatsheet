import Cheatsheet from "../CheatsheetClass";

const BOX_MODEL = [
  new Cheatsheet({
    id: "box-mode-box-modell",
    topic: "Layout",
    table: "Box model",
    action: "Box model",
    description: ["Every element/content rendered will be put inside a box"],
    visual: [
      {
        text: "Box Model",
        link: "https://images.cheatsheet.cam/images/image-1726218931438.webp",
      },
      {
        text: "Inspect in Browser",
        link: "https://images.cheatsheet.cam/images/image-1726218884809.webp",
      },
      {
        text: "Example:",
        link: "https://images.cheatsheet.cam/images/image-1726360547706.webp",
      },
    ],
    code: " ",
    attention: [
      {
        text: `1. Padding, border, margin will never affect element/content size`,
      },
    ],
    emoji: "❄️❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "box-mode-border",
    topic: "Layout",
    table: "Box model",
    action: "Border",
    description: [" "],
    visual: [
      {
        text: " ",
        link: "https://images.cheatsheet.cam/images/image-1726359876376.webp",
      },
    ],
    code: `/* current element CSS */
border: 5px solid #3435ff; /* width style color */
border-color:  #3435ff;`,
    attention: [],
    emoji: "❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "box-mode-padding",
    topic: "Layout",
    table: "Box model",
    action: "Padding",
    description: [" "],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726359955413.webp",
      },
    ],
    code: `/* current element CSS */
padding :10px; /* all side */
padding: 10px 20px;  /* vertical horizontal */
padding: 10px 20px 30px 40px; /* top right bottom left */


padding-left: 10px;/* only left */
padding-right: 10px;/* only right */
padding-top: 10px;/* only top */`,
    attention: [],
    emoji: "❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "box-mode-margin",
    topic: "Layout",
    table: "Box model",
    action: "Margin",
    description: [" "],
    visual: [
      {
        text: "Before:",
        link: "https://images.cheatsheet.cam/images/image-1726360018984.webp",
      },
    ],
    code: `/* same like padding */`,
    emoji: "❄️",
    attention: [
      {
        text: "1. Vertical margin will be default at 16px.",
      },
      {
        text: `2. Margin collapsing.
If two elements have margins that meet each other, the margin will collapse.
Example:
Element A: 20px margin.
Element B: 20px margin.
Equal: The space between should be 40px right? Nope, it will collapse into 20px.`,
      },
      {
        text: `3. Margin not increase box model size. It is just to get away.`,
      },
    ],

    priority: 1,
    codeType: "css",
  }),
];

const OVERFLOW = [
  new Cheatsheet({
    id: "overflow-overflow",
    topic: "Layout",
    table: "Overflow",
    action: "Overflow",
    description: [
      "Parent size is fixed, but children are bigger than parents = overflow.",
    ],
    visual: [
      {
        text: "Overflow",
        link: "https://images.cheatsheet.cam/images/image-1726357762233.webp",
      },
    ],
    code: " ",
    attention: ` `,
    emoji: "❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "overflow-hidden",
    topic: "Layout",
    table: "Overflow",
    action: "hidden",
    description: [" "],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726357886442.webp",
      },
    ],
    code: `/* parent element CSS */
overflow: hidden;`,
    attention: ` `,
    emoji: "❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "overflow-scroll",
    topic: "Layout",
    table: "Overflow",
    action: "scroll",
    description: [" "],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726357984071.webp",
      },
    ],
    code: `/* parent element CSS */
overflow: scroll;`,
    attention: ` `,
    emoji: "❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "overflow-auto",
    topic: "Layout",
    table: "Overflow",
    action: "auto",
    description: ["Same like scroll, but only appear when overflow happened"],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726357984071.webp",
      },
    ],
    code: `/* parent element CSS */
overflow: auto;`,
    attention: ` `,
    emoji: "❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "overflow-xy",
    topic: "Layout",
    table: "Overflow",
    action: "overflow-x,overflow-y",
    description: [" "],
    visual: [],
    code: `/* parent element CSS */
/* vertical horizontal */
overflow: auto hidden;`,
    attention: ` `,
    emoji: "❄️",
    priority: 1,
    codeType: "css",
  }),
];

const MEASUREMENT_UNIT = [
  new Cheatsheet({
    id: "measurement-unit-measurement-unit",
    topic: "Layout",
    table: "Measurement Unit",
    action: "Measurement Unit",
    description: [
      `Two categories:
1.Absolute 
2.Relative
`,
    ],
    visual: [
      // {
      //   text: "",
      //   link: "",
      // },
    ],
    code: ` `,
    attention: ` `,
    emoji: "❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "measurement-unit-absolute",
    topic: "Layout",
    table: "Measurement Unit",
    action: "1. Absolute",
    description: [`Fix, never changes`],
    visual: [
      // {
      //   text: "",
      //   link: "",
      // },
    ],
    code: ` `,
    attention: ` `,
    emoji: "❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "measurement-unit-px",
    topic: "Layout",
    table: "Measurement Unit",
    action: "px",
    description: [`Fix`],
    visual: [
      {
        text: "Big browser size:",
        link: "https://images.cheatsheet.cam/images/image-1726361421455.webp",
      },
      {
        text: "Smaller browser size",
        link: "https://images.cheatsheet.cam/images/image-1726361377347.webp",
      },
    ],
    code: `/* current element CSS */
px`,
    attention: ` `,
    emoji: "❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "measurement-unit-relative",
    topic: "Layout",
    table: "Measurement Unit",
    action: "2. Relative",
    description: [`Relate to something.`],
    visual: [
      // {
      //   text: "",
      //   link: "",
      // },
    ],
    code: ` `,
    attention: ` `,
    emoji: "❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "measurement-unit-%",
    topic: "Layout",
    table: "Measurement Unit",
    action: "%",
    description: [`Relate to size of parent element`],
    visual: [
      {
        text: "Big parent size:",
        link: "https://images.cheatsheet.cam/images/image-1726361472454.webp",
      },
      {
        text: "Smaller parent element:",
        link: "https://images.cheatsheet.cam/images/image-1726361517597.webp",
      },
    ],
    code: `/* current element CSS */
/* 1-100*/
50%
`,
    attention: ` `,
    emoji: "❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "measurement-unit-%",
    topic: "Layout",
    table: "Measurement Unit",
    action: "vw,vh",
    description: [`Relate to size of viewport/browser`],
    visual: [
      {
        text: "Big browser size:",
        link: "https://images.cheatsheet.cam/images/image-1726361578865.webp",
      },
      {
        text: "Smaller browser size:",
        link: "https://images.cheatsheet.cam/images/image-1726361619818.webp",
      },
    ],
    code: `/* current element CSS */
/* 1-100*/
50vw
50vh
`,
    attention: [
      {
        text: `1. Default. Viewport height default is 0. So, ...`,
      },
    ],
    emoji: "❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "measurement-unit-em",
    topic: "Layout",
    table: "Measurement Unit",
    action: "em",
    description: [` `],
    visual: [],
    code: ` `,
    emoji: "❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "measurement-unit-rem",
    topic: "Layout",
    table: "Measurement Unit",
    action: "rem",
    description: [` `],
    visual: [],
    code: ` `,
    attention: ` `,
    emoji: "❄️",
    priority: 1,
    codeType: "css",
  }),
];

const POSITIONING = [
  new Cheatsheet({
    id: "positioning-positioning",
    topic: "Layout",
    table: "Positioning",
    action: "1. Positioning",
    description: [" "],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726369974022.webp",
      },
    ],
    code: " ",
    attention: [
      {
        text: `1. Default. All element position default is static`,
      },
    ],
    emoji: "❄️❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "positioning-relative",
    topic: "Layout",
    table: "Positioning",
    action: "relative",
    description: ["Relate to current position."],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726370088051.webp",
      },
    ],
    code: `/* current element CSS */
position: relative;
left: 30px;`,
    attention: [],
    emoji: "❄️❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "positioning-absolute",
    topic: "Layout",
    table: "Positioning",
    action: "absolute",
    description: [
      "Out of current flow,a nd relate to container/ parent element.",
    ],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726370435020.webp",
      },
    ],
    code: `/* parent element */
position:relative

/* current element */
position: absolute;
left: 30px;`,
    attention: [],
    emoji: "❄️❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "positioning-fixed",
    topic: "Layout",
    table: "Positioning",
    action: "fixed",
    description: ["Out of current flow,and relate to viewport."],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726370454417.webp",
      },
    ],
    code: `/* current element CSS */
position: fixed;
top: 0px;`,
    attention: [],
    emoji: "❄️❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "positioning-zindex",
    topic: "Layout",
    table: "Positioning",
    action: "2. z-index",
    description: ["If an element overlap the element, change the z-axis"],
    visual: [
      {
        text: "Overlap:",
        link: "https://images.cheatsheet.cam/images/image-1726370568911.webp",
      },
      {
        text: "z-index:",
        link: "https://images.cheatsheet.cam/images/image-1726370617670.webp",
      },
    ],
    code: `/* current element CSS */
z-index: -1`,
    attention: [],
    emoji: "❄️❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "positioning-widthAuto",
    topic: "Layout",
    table: "Positioning",
    action: "3. Width auto",
    description: [" "],
    visual: [],
    code: ` `,
    attention: [],
    emoji: "❄️❄️",
    priority: 1,
    codeType: "css",
  }),
];

const FLEXBOX = [
  new Cheatsheet({
    id: "positioning-flexbox",
    topic: "Layout",
    table: "Flexbox",
    action: "Flexbox",
    description: ["Laying out children elements in one direction."],
    visual: [],
    code: `/* current element CSS */
display: flex;`,
    attention: [],
    emoji: "❄️❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "positioning-row",
    topic: "Layout",
    table: "Flexbox",
    action: "row",
    description: [" "],
    visual: [
      {
        text: " ",
        link: "https://images.cheatsheet.cam/images/image-1726370953322.webp",
      },
    ],
    code: `/* current element CSS */
display: flex;
flex-direction: row;`,
    attention: [],
    emoji: "❄️❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "positioning-column",
    topic: "Layout",
    table: "Flexbox",
    action: "column",
    description: [" "],
    visual: [
      {
        text: " ",
        link: "https://images.cheatsheet.cam/images/image-1726371076921.webp",
      },
    ],
    code: `/* current element CSS */
display: flex;
flex-direction: column;`,
    attention: [],
    emoji: "❄️❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "positioning-alignment",
    topic: "Layout",
    table: "Flexbox",
    action: "Alignment",
    description: [
      "Two axes:\n 1.Main ( justify-content )\n2.Cross( align-items)",
    ],
    visual: [
      {
        text: " ",
        link: "https://images.cheatsheet.cam/images/image-1726371372535.webp",
      },
      {
        text: " ",
        link: "https://images.cheatsheet.cam/images/image-1726371408729.webp",
      },
    ],
    code: ` `,
    attention: [],
    emoji: "❄️❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "positioning-justifycontent",
    topic: "Layout",
    table: "Flexbox",
    action: "justify-content",
    description: [" "],
    visual: [
      {
        text: "flex-start:",
        link: "https://images.cheatsheet.cam/images/image-1726371722853.webp",
      },
      {
        text: "center:",
        link: "https://images.cheatsheet.cam/images/image-1726371750432.webp",
      },
      {
        text: "flex-end:",
        link: "https://images.cheatsheet.cam/images/image-1726371772530.webp",
      },
      {
        text: "space-evenly:",
        link: "https://images.cheatsheet.cam/images/image-1726371800959.webp",
      },
      {
        text: "space-between:",
        link: "https://images.cheatsheet.cam/images/image-1726371836302.webp",
      },
    ],
    code: `/* current element CSS */
display: flex;
flex-direction: row;

..
justify-content: flex-start


..
justify-content: center


..
justify-content: flex-end


..
justify-content: space-evenly


..
justify-content: space-between`,
    attention: [],
    emoji: "❄️❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "positioning-alignitems",
    topic: "Layout",
    table: "Flexbox",
    action: "align-items",
    description: [" "],
    visual: [
      {
        text: "flex-start:",
        link: "https://images.cheatsheet.cam/images/image-1726371722853.webp",
      },
      {
        text: "center:",
        link: "https://images.cheatsheet.cam/images/image-1726371981653.webp",
      },
      {
        text: "flex-end:",
        link: "https://images.cheatsheet.cam/images/image-1726371991977.webp",
      },
    ],
    code: `/* current element CSS */
display: flex;
flex-direction: row;

..
align-items: flex-start


..
align-items: center


..
align-items: flex-end`,
    attention: [],
    emoji: "❄️❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "positioning-aligncontent",
    topic: "Layout",
    table: "Flexbox",
    action: "align-content",
    description: [" "],
    visual: [],
    code: ``,
    attention: [],
    emoji: "❄️❄️",
    priority: 1,
    codeType: "css",
  }),
  new Cheatsheet({
    id: "positioning-flexwrap",
    topic: "Layout",
    table: "Flexbox",
    action: "flex-wrap",
    description: [" "],
    visual: [],
    code: ``,
    attention: [],
    emoji: "❄️❄️",
    priority: 1,
    codeType: "css",
  }),
];

export const LayoutCheatsheets = [
  ...BOX_MODEL,
  ...OVERFLOW,
  ...MEASUREMENT_UNIT,
  ...POSITIONING,
  ...FLEXBOX,
];
