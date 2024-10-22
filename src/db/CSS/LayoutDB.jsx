import Cheatsheet from "../CheatsheetClass";
const BOX_MODEL = [
  new Cheatsheet({
    id: "box-mode-box-modell",
    topic: "Layout",
    table: "Box model",
    action: [
      {
        text: "Box model",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "Every element/content rendered will be put inside a box",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "Box Model",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726218931438.webp",
        code: "",
        code_type: "",
      },
      {
        text: "Inspect in Browser",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726218884809.webp",
        code: "",
        code_type: "",
      },
      {
        text: "Example:",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726360547706.webp",
        code: "",
        code_type: "",
      },
    ],

    // attention: [
    //   {
    //     text: `1. Padding, border, margin will never affect element/content size`,
    //   },
    // ],
  }),
  new Cheatsheet({
    id: "box-mode-border",
    topic: "Layout",
    table: "Box model",
    action: [
      {
        text: "Border",
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
          "https://images.cheatsheet.cam/images/image-1726359876376.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `/* current element CSS */
  border: 5px solid #3435ff; /* width style color */
  border-color:  #3435ff;`,
        code_type: "css",
      },
    ],
  }),
  new Cheatsheet({
    id: "box-mode-padding",
    topic: "Layout",
    table: "Box model",
    action: [
      {
        text: "Padding",
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
          "https://images.cheatsheet.cam/images/image-1726359955413.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `/* current element CSS */
  padding :10px; /* all side */
  padding: 10px 20px;  /* vertical horizontal */
  padding: 10px 20px 30px 40px; /* top right bottom left */

  padding-left: 10px;/* only left */
  padding-right: 10px;/* only right */
  padding-top: 10px;/* only top */`,
        code_type: "css",
      },
    ],
  }),
  new Cheatsheet({
    id: "box-mode-margin",
    topic: "Layout",
    table: "Box model",
    action: [
      {
        text: "Margin",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [],
    visual: [
      {
        text: "Before:",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726360018984.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `/* same like padding */`,
        code_type: "css",
      },
    ],

    //   attention: [
    //     {
    //       text: "1. Vertical margin will be default at 16px.",
    //     },
    //     {
    //       text: `2. Margin collapsing.
    // If two elements have margins that meet each other, the margin will collapse.
    // Example:
    // Element A: 20px margin.
    // Element B: 20px margin.
    // Equal: The space between should be 40px right? Nope, it will collapse into 20px.`,
    //     },
    //     {
    //       text: `3. Margin not increase box model size. It is just to get away.`,
    //     },
    //   ],
  }),
];

const OVERFLOW = [
  new Cheatsheet({
    id: "overflow-overflow",
    topic: "Layout",
    table: "Overflow",
    action: [
      {
        text: "Overflow",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "Parent size is fixed, but children are bigger than parents = overflow.",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "Overflow",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726357762233.webp",
        code: "",
        code_type: "",
      },
    ],
  }),
  new Cheatsheet({
    id: "overflow-hidden",
    topic: "Layout",
    table: "Overflow",
    action: [
      {
        text: "hidden",
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
          "https://images.cheatsheet.cam/images/image-1726357886442.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `/* parent element CSS */
overflow: hidden;`,
        code_type: "css",
      },
    ],
  }),
  new Cheatsheet({
    id: "overflow-scroll",
    topic: "Layout",
    table: "Overflow",
    action: [
      {
        text: "scroll",
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
          "https://images.cheatsheet.cam/images/image-1726357984071.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `/* parent element CSS */
overflow: scroll;`,
        code_type: "css",
      },
    ],
  }),
  new Cheatsheet({
    id: "overflow-auto",
    topic: "Layout",
    table: "Overflow",
    action: [
      {
        text: "auto",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "Same like scroll, but only appear when overflow happened",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726357984071.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `/* parent element CSS */
overflow: auto;`,
        code_type: "css",
      },
    ],
  }),
  new Cheatsheet({
    id: "overflow-xy",
    topic: "Layout",
    table: "Overflow",
    action: [
      {
        text: "overflow-x,overflow-y",
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
        code: `/* parent element CSS */
/* vertical horizontal */
overflow: auto hidden;`,
        code_type: "css",
      },
    ],
  }),
];

const MEASUREMENT_UNIT = [
  new Cheatsheet({
    id: "measurement-unit-measurement-unit",
    topic: "Layout",
    table: "Measurement Unit",
    action: [
      {
        text: "Measurement Unit",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: `Two categories:
1.Absolute
2.Relative
`,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
  }),
  new Cheatsheet({
    id: "measurement-unit-absolute",
    topic: "Layout",
    table: "Measurement Unit",
    action: [
      {
        text: "1. Absolute",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "Fix, never changes",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      // {
      //   text: "",
      //   link: "",
      // },
    ],
  }),
  new Cheatsheet({
    id: "measurement-unit-px",
    topic: "Layout",
    table: "Measurement Unit",
    action: [
      {
        text: "px",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "Fix",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "Big browser size:",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726361421455.webp",
        code: "",
        code_type: "",
      },
      {
        text: "Smaller browser size",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726361377347.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `/* current element CSS */
px`,
        code_type: "css",
      },
    ],
  }),
  new Cheatsheet({
    id: "measurement-unit-relative",
    topic: "Layout",
    table: "Measurement Unit",
    action: [
      {
        text: "2. Relative",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "Relate to something.",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      // {
      //   text: "",
      //   link: "",
      // },
    ],
  }),
  new Cheatsheet({
    id: "measurement-unit-%",
    topic: "Layout",
    table: "Measurement Unit",
    action: [
      {
        text: "%",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "Relate to size of parent element",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "Big parent size:",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726361472454.webp",
        code: "",
        code_type: "",
      },
      {
        text: "Smaller parent element:",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726361517597.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `/* current element CSS */
/* 1-100*/
50%
`,
        code_type: "css",
      },
    ],
  }),
  new Cheatsheet({
    id: "measurement-unit-%",
    topic: "Layout",
    table: "Measurement Unit",
    action: [
      {
        text: "vw,vh",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "Relate to size of viewport/browser",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "Big browser size:",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726361578865.webp",
        code: "",
        code_type: "",
      },
      {
        text: "Smaller browser size:",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726361619818.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `/* current element CSS */
/* 1-100*/
50vw
50vh
`,
        code_type: "css",
      },
    ],
    // attention: [
    //   {
    //     text: `1. Default. Viewport height default is 0. So, ...`,
    //   },
    // ],
  }),
  new Cheatsheet({
    id: "measurement-unit-em",
    topic: "Layout",
    table: "Measurement Unit",
    action: [
      {
        text: "em",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [],
    visual: [],
  }),
  new Cheatsheet({
    id: "measurement-unit-rem",
    topic: "Layout",
    table: "Measurement Unit",
    action: [
      {
        text: "rem",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [],
    visual: [],
  }),
];

const POSITIONING = [
  new Cheatsheet({
    id: "positioning-positioning",
    topic: "Layout",
    table: "Positioning",
    action: [
      {
        text: "1. Positioning",
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
          "https://images.cheatsheet.cam/images/image-1726369974022.webp",
        code: "",
        code_type: "",
      },
    ],

    // attention: [
    //   {
    //     text: `1. Default. All element position default is static`,
    //   },
    // ],
  }),
  new Cheatsheet({
    id: "positioning-relative",
    topic: "Layout",
    table: "Positioning",
    action: [
      {
        text: "relative",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "Relate to current position.",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726370088051.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `/* current element CSS */
position: relative;
left: 30px;`,
        code_type: "",
      },
    ],
  }),
  new Cheatsheet({
    id: "positioning-absolute",
    topic: "Layout",
    table: "Positioning",
    action: [
      {
        text: "absolute",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "Out of current flow,a nd relate to container/ parent element.",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726370435020.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `/* parent element */
position:relative

/* current element */
position: absolute;
left: 30px;`,
        code_type: "",
      },
    ],
  }),
  new Cheatsheet({
    id: "positioning-fixed",
    topic: "Layout",
    table: "Positioning",
    action: [
      {
        text: "fixed",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "Out of current flow,and relate to viewport.",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726370454417.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `/* current element CSS */
position: fixed;
top: 0px;`,
        code_type: "css",
      },
    ],
  }),
  new Cheatsheet({
    id: "positioning-zindex",
    topic: "Layout",
    table: "Positioning",
    action: [
      {
        text: "2. z-index",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "If an element overlap the element, change the z-axis",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "Overlap:",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726370568911.webp",
        code: "",
        code_type: "",
      },
      {
        text: "z-index:",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726370617670.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `/* current element CSS */
z-index: -1`,
        code_type: "css",
      },
    ],
  }),
  new Cheatsheet({
    id: "positioning-widthAuto",
    topic: "Layout",
    table: "Positioning",
    action: [
      {
        text: "3. Width auto",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [],
    visual: [],
  }),
];

const FLEXBOX = [
  new Cheatsheet({
    id: "positioning-flexbox",
    topic: "Layout",
    table: "Flexbox",
    action: [
      {
        text: "Flexbox",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "Laying out children elements in one direction.",
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
        code: `/* current element CSS */
display: flex;`,
        code_type: "css",
      },
    ],
  }),
  new Cheatsheet({
    id: "positioning-row",
    topic: "Layout",
    table: "Flexbox",
    action: [
      {
        text: "row",
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
          "https://images.cheatsheet.cam/images/image-1726370953322.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `/* current element CSS */
display: flex;
flex-direction: row;`,
        code_type: "",
      },
    ],
  }),
  new Cheatsheet({
    id: "positioning-column",
    topic: "Layout",
    table: "Flexbox",
    action: [
      {
        text: "column",
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
          "https://images.cheatsheet.cam/images/image-1726371076921.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `/* current element CSS */
display: flex;
flex-direction: column;`,
        code_type: "css",
      },
    ],
  }),
  new Cheatsheet({
    id: "positioning-alignment",
    topic: "Layout",
    table: "Flexbox",
    action: [
      {
        text: "Alignment",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "Two axes:\n 1.Main ( justify-content )\n2.Cross( align-items)",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726371372535.webp",
        code: "",
        code_type: "",
      },
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726371408729.webp",
        code: "",
        code_type: "",
      },
    ],
  }),
  new Cheatsheet({
    id: "positioning-justifycontent",
    topic: "Layout",
    table: "Flexbox",
    action: [
      {
        text: "justify-content",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [],
    visual: [
      {
        text: "flex-start:",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726371722853.webp",
        code: "",
        code_type: "",
      },
      {
        text: "center:",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726371750432.webp",
        code: "",
        code_type: "",
      },
      {
        text: "flex-end:",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726371772530.webp",
        code: "",
        code_type: "",
      },
      {
        text: "space-evenly:",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726371800959.webp",
        code: "",
        code_type: "",
      },
      {
        text: "space-between:",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726371836302.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
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
        code_type: "css",
      },
    ],
  }),
  new Cheatsheet({
    id: "positioning-alignitems",
    topic: "Layout",
    table: "Flexbox",
    action: [
      {
        text: "align-items",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [],
    visual: [
      {
        text: "flex-start:",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726371722853.webp",
        code: "",
        code_type: "",
      },
      {
        text: "center:",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726371981653.webp",
        code: "",
        code_type: "",
      },
      {
        text: "flex-end:",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726371991977.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `/* current element CSS */
display: flex;
flex-direction: row;

..
align-items: flex-start

..
align-items: center

..
align-items: flex-end`,
        code_type: "css",
      },
    ],
  }),
  new Cheatsheet({
    id: "positioning-aligncontent",
    topic: "Layout",
    table: "Flexbox",
    action: [
      {
        text: "align-content",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
  }),
  new Cheatsheet({
    id: "positioning-flexwrap",
    topic: "Layout",
    table: "Flexbox",
    action: [
      {
        text: "flex-wrap",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
  }),
];

export const LayoutCheatsheets = [
  ...BOX_MODEL,
  ...OVERFLOW,
  ...MEASUREMENT_UNIT,
  ...POSITIONING,
  ...FLEXBOX,
];

export const LayoutTopic = {
  topic: "Layout",
  type: "children",
  imageLink: "https://images.cheatsheet.cam/images/image-1726097807593.webp",
  tables: [
    {
      table: "Box model",
    },
    {
      table: "Overflow",
    },
    {
      table: "Measurement Unit",
    },
    {
      table: "Positioning",
    },
    {
      table: "Flexbox",
    },
  ],
};
