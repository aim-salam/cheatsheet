import Cheatsheet from "../CheatsheetClass";

const INTRODUCTION = [
  new Cheatsheet({
    id: "ref-prerequisite",
    topic: "Reference",
    table: "Introduction",
    action: "Prerequisite",
    description: [`Memory`],
    visual: [],

    emoji: "❄️",
    codeType: "js",
  }),
  new Cheatsheet({
    id: "ref-definition",
    topic: "Reference",
    table: "Introduction",
    action: "Definition",
    description: [
      `1. Ref can hold data`,
      `2. but it can't trigger React to re-render the component.`,
      `3. The data is not inside the component but outside, so the value remain across re-renders.`,
    ],
    visual: [
      {
        text: "Component memories :",
        link: "https://images.cheatsheet.cam/images/image-1726462745644.webp",
      },
    ],

    emoji: "❄️",
    priority: 1,
    codeType: "javascript",
    codeType: "js",
  }),
  new Cheatsheet({
    id: "ref-bb",
    topic: "Reference",
    table: "Introduction",
    action: "Building-block",
    description: [` `],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726463732585.webp",
      },
    ],
    code: `const myRef = useRef(initialValue);`,

    emoji: "❄️",
    priority: 1,
    codeType: "javascript",
  }),
];

const MEMORY = [];

const ACCESS = [
  new Cheatsheet({
    id: "ref-access-value",
    topic: "Reference",
    table: "Access",
    action: "Value",
    description: [` `],
    visual: [
      {
        text: "",
        link: "",
      },
    ],
    code: ` // Access value
const countRef = useRef(0);
      
const value = countRef.current
  
  
// Access DOM Element
const inputEl = useRef(null);

const value = inputEl.current.focus();

<input ref={inputEl} type="text" />
  `,

    emoji: "🔥",
    priority: 1,
    codeType: "javascript",
  }),
];
const UPDATE = [
  new Cheatsheet({
    id: "ref-update-value",
    topic: "Reference",
    table: "Update",
    action: "Value",
    description: [`string, integer, boolean, null`],
    visual: [
      {
        text: "",
        link: "",
      },
    ],
    code: ` // Storing value
const countRef = useRef(0);
    

countRef.current = count + 1;`,

    emoji: "🔥",
    priority: 1,
    codeType: "javascript",
  }),
];

export const RefCheatsheet = [...INTRODUCTION, ...MEMORY, ...UPDATE, ...ACCESS];
