import Cheatsheet from "../../CheatsheetClass";

export const MEASUREMENT_UNIT = [
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
        text: "Pixel",
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
        code: `  width: 100px; 
    height: 100px;`,
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
        text: "Percent",
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
        code: `/* 1-100*/
  width: 50%; 
  height: 50%;
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
        text: "Viewport",
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
        code: `/* 1-100*/
  width: 50vw; 
  height: 50vh;
  `,
        code_type: "css",
      },
    ],
    // attention: [
    //   {
    //     text: `1. Default. Viewport height default is 0. So, display: flex.`,
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
