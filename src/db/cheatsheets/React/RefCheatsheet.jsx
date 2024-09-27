import Cheatsheet from "../CheatsheetClass";

const INTRODUCTION = [
  new Cheatsheet({
    id: "ref-prerequisite",
    topic: "Reference",
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
      {
        text: "Memory",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
  }),
  new Cheatsheet({
    id: "ref-definition",
    topic: "Reference",
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
        text: "1. Ref can hold data",
        image_link: "",
        code: "",
        code_type: "",
      },
      {
        text: "2. but it can't trigger React to re-render the component.",
        image_link: "",
        code: "",
        code_type: "",
      },
      {
        text: "3. The data is not inside the component but outside, so the value remain across re-renders.",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "Component memories :",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726462745644.webp",
        code: "",
        code_type: "javascript",
      },
    ],
  }),
  new Cheatsheet({
    id: "ref-bb",
    topic: "Reference",
    table: "Introduction",
    action: [
      {
        text: "Building-block",
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
          "https://images.cheatsheet.cam/images/image-1726463732585.webp",
        code: "",
        code_type: "javascript",
      },
    ],

    code: [
      {
        text: "",
        image_link: "",
        code: `const myRef = useRef(initialValue);`,
        code_type: "javascript",
      },
    ],
  }),
];

const MEMORY = [];

const ACCESS = [
  new Cheatsheet({
    id: "ref-access-value",
    topic: "Reference",
    table: "Access",
    action: [
      {
        text: "Value",
        image_link: "",
        code: "",
        code_type: "javascript",
      },
    ],
    description: [],
    visual: [],
    code: [
      {
        text: "",
        image_link: "",
        code: ` // Access value
const countRef = useRef(0);
      
const value = countRef.current
  
  
// Access DOM Element
const inputEl = useRef(null);

const value = inputEl.current.focus();

<input ref={inputEl} type="text" />
  `,
        code_type: "javascript",
      },
    ],
  }),
];
const UPDATE = [
  new Cheatsheet({
    id: "ref-update-value",
    topic: "Reference",
    table: "Update",
    action: [
      {
        text: "Value",
        image_link: "",
        code: "",
        code_type: "javascript",
      },
    ],
    description: [
      {
        text: "string, integer, boolean, null",
        image_link: "",
        code: ``,
        code_type: "javascript",
      },
    ],
    visual: [],
    code: [
      {
        text: "",
        image_link: "",
        code: ` // Storing value
const countRef = useRef(0);
    

countRef.current = count + 1;`,
        code_type: "javascript",
      },
    ],
  }),
];

export const RefCheatsheet = [...INTRODUCTION, ...MEMORY, ...UPDATE, ...ACCESS];
