import Cheatsheet from "../../CheatsheetClass";

export const INTRODUCTION = [
  new Cheatsheet({
    id: "state-prerequisite",
    topic: "State",
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
    id: "state-definition",
    topic: "State",
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
        text: "1. State can hold data",
        image_link: "",
        code: "",
        code_type: "",
      },
      {
        text: "2. and it can trigger React to re-render the component.",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "Component memories :",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726424168846.webp",
        code: "",
        code_type: "",
      },
    ],
  }),
  new Cheatsheet({
    id: "state-bb",
    topic: "State",
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
          "https://images.cheatsheet.cam/images/image-1726459325361.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `const [number,setNumber] = useState(0) // integer/string
  const [isLoading,setIsLoading] = useState(false) // bool
  const [members, setMembers] = useState([]) // array
  const [movies, setMovies] = useState({}) // object
  `,
        code_type: "javascript",
      },
    ],
  }),
];
