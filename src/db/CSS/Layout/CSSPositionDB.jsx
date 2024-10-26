import Cheatsheet from "../../CheatsheetClass";

export const POSITIONING = [
  new Cheatsheet({
    id: "positioning-positioning",
    topic: "Layout",
    table: "Positioning",
    action: [
      {
        text: "Positioning",
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
        code: `position: relative;
  left: 30px;`,
        code_type: "css",
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
        code_type: "css",
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
        code: `position: fixed;
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
        code: `z-index: -1`,
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
        text: "Width auto",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [],
    visual: [],
  }),
];
