import Cheatsheet from "../../CheatsheetClass";

export const CONTAINER = [
  new Cheatsheet({
    id: "container-intro",
    topic: "HTML",
    table: "Container",
    action: [
      {
        text: "Container",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: `Grouping elements`,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
    code: [],
  }),
  new Cheatsheet({
    id: "container-div",
    topic: "HTML",
    table: "Container",
    action: [
      {
        text: "div",
        image_link: "",
        code: ``,
        code_type: "",
      },
    ],
    description: [
      {
        text: ``,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
    code: [
      {
        text: ``,
        image_link: "",
        code: `<div>
    <p>This is a paragraph inside a div.</p>
    <p>Another paragraph inside the same div.</p>
  </div>`,
        code_type: "html",
      },
    ],
  }),
  new Cheatsheet({
    id: "container-span",
    topic: "HTML",
    table: "Container",
    action: [
      {
        text: "span",
        image_link: "",
        code: ``,
        code_type: "",
      },
    ],
    description: [
      {
        text: ``,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
    code: [
      {
        text: ``,
        image_link: "",
        code: `<p>
    This is a <span style="color: red">highlighted</span> word in a sentence.
  </p>`,
        code_type: "html",
      },
    ],
  }),
];
