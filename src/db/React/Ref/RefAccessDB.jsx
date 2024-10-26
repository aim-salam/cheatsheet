import Cheatsheet from "../../CheatsheetClass";

export const ACCESS = [
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
