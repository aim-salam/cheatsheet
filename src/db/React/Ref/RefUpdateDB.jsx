import Cheatsheet from "../../CheatsheetClass";

export const UPDATE = [
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
