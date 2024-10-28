import Cheatsheet from "../../CheatsheetClass";

export const BOX_MODEL = [
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
        code: `border: 5px solid #3435ff; /* width style color */
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
        code: `padding: 10px; /* all side */
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
