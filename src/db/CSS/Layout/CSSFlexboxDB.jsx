import Cheatsheet from "../../CheatsheetClass";

export const FLEXBOX = [
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
        code: `display: flex;`,
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
        code: `display: flex
  flex-direction: row;`,
        code_type: "css",
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
        code: `display: flex
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
        code: `display: flex
  flex-direction: row
  justify-content: flex-start
  
  display: flex
  flex-direction: row
  justify-content: center
  
  display: flex
  flex-direction: row
  justify-content: flex-end
  
  display: flex
  flex-direction: row
  justify-content: space-evenly
  
  display: flex
  flex-direction: row
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
        code: `display: flex
  flex-direction: row
  align-items: flex-start
  
  display: flex
  flex-direction: row
  align-items: center
  
  display: flex
  flex-direction: row
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
