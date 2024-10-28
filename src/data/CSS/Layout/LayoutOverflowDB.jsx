import Cheatsheet from "../../CheatsheetClass";

export const OVERFLOW = [
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
  overflow: auto hidden; /* vertical horizontal */`,
        code_type: "css",
      },
    ],
  }),
];
