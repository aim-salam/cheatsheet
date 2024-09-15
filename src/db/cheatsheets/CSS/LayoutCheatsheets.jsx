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
      {
        text: "Example:",
        link: "https://images.cheatsheet.cam/images/image-1726360547706.webp",
      },
    ],
    code: " ",
    attention: `1. Padding, border, margin will never affect element/content size`,
    emoji: "❄️❄️",
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
        text: " ",
        link: "https://images.cheatsheet.cam/images/image-1726359876376.webp",
      },
    ],
    code: `border: 5px solid #3435ff; /* width style color */
border-color:  #3435ff;`,
    attention: ` `,
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
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726359955413.webp",
      },
    ],
    code: `padding :10px; /* all side */
padding: 10px 20px;  /* vertical horizontal */
padding: 10px 20px 30px 40px; /* top right bottom left */


padding-left: 10px;/* only left */
padding-right: 10px;/* only right */
padding-top: 10px;/* only top */`,
    attention: ` `,
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
        link: "https://images.cheatsheet.cam/images/image-1726360018984.webp",
      },
    ],
    code: `/* same like padding */`,
    emoji: "❄️",
    attention: `1. Default vertical margin.
Vertical margin will be default at 16px


2. Margin collapsing.
If two elements have margins that meet each other, the margin will collapse.
Element A : 20px margin
Element B : 20px margin
Equal : The space between should be 40px right? Nope, it will collapse into 20px

3. Margin not increase box model size. It is just to get away.
 `,
    priority: 1,
  }),
];

const OVERFLOW = [
  new Cheatsheet({
    id: "overflow-overflow",
    topic: "Layout",
    table: "Overflow",
    action: "Overflow",
    description:
      "Parent size is fixed, but children are bigger than parents = overflow.",
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
  }),
  new Cheatsheet({
    id: "overflow-hidden",
    topic: "Layout",
    table: "Overflow",
    action: "hidden",
    description: " ",
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
  }),
  new Cheatsheet({
    id: "overflow-scroll",
    topic: "Layout",
    table: "Overflow",
    action: "scroll",
    description: " ",
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
  }),
  new Cheatsheet({
    id: "overflow-auto",
    topic: "Layout",
    table: "Overflow",
    action: "auto",
    description: "Same like scroll, but only appear when overflow happened",
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
  }),
  new Cheatsheet({
    id: "overflow-xy",
    topic: "Layout",
    table: "Overflow",
    action: "overflow-x,overflow-y",
    description: " ",
    visual: [],
    code: `/* parent element CSS */
/* vertical horizontal */
overflow: auto hidden;`,
    attention: ` `,
    emoji: "❄️",
    priority: 1,
  }),
];

const MEASUREMENT_UNIT = [
  new Cheatsheet({
    id: "measurement-unit-measurement-unit",
    topic: "Layout",
    table: "Measurement Unit",
    action: "Measurement Unit",
    description: `Two categories:
1.Absolute 
2.Relative
`,
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
  }),
  new Cheatsheet({
    id: "measurement-unit-absolute",
    topic: "Layout",
    table: "Measurement Unit",
    action: "1. Absolute",
    description: `Fix, never changes`,
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
  }),
  new Cheatsheet({
    id: "measurement-unit-px",
    topic: "Layout",
    table: "Measurement Unit",
    action: "px",
    description: `Fix`,
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
    code: `px`,
    attention: ` `,
    emoji: "❄️",
    priority: 1,
  }),
  new Cheatsheet({
    id: "measurement-unit-relative",
    topic: "Layout",
    table: "Measurement Unit",
    action: "2. Relative",
    description: `Relate to something.`,
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
  }),
  new Cheatsheet({
    id: "measurement-unit-%",
    topic: "Layout",
    table: "Measurement Unit",
    action: "%",
    description: `Relate to size of parent element`,
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
  }),
  new Cheatsheet({
    id: "measurement-unit-%",
    topic: "Layout",
    table: "Measurement Unit",
    action: "vw,vh",
    description: `Relate to size of viewport/browser`,
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
    code: `/* 1-100*/
50vw
50vh
`,
    attention: ` `,
    emoji: "❄️",
    priority: 1,
  }),
  new Cheatsheet({
    id: "measurement-unit-em",
    topic: "Layout",
    table: "Measurement Unit",
    action: "em",
    description: ` `,
    visual: [],
    code: ` `,
    emoji: "❄️",
    priority: 1,
  }),
  new Cheatsheet({
    id: "measurement-unit-rem",
    topic: "Layout",
    table: "Measurement Unit",
    action: "rem",
    description: ` `,
    visual: [],
    code: ` `,
    attention: ` `,
    emoji: "❄️",
    priority: 1,
  }),
];

export const LayoutCheatsheets = [
  ...BOX_MODEL,
  ...OVERFLOW,
  ...MEASUREMENT_UNIT,
];
