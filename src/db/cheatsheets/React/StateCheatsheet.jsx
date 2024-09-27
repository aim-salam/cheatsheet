import Cheatsheet from "../CheatsheetClass";

const INTRODUCTION = [
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

const MEMORY = [];

const UPDATE = [
  new Cheatsheet({
    id: "state-primitive",
    topic: "State",
    table: "Update",
    action: [
      {
        text: "Primitive values",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "string, integer, boolean, null",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726460443383.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: ` const [name, setName] = useState('');
    
 setName('Sam');
;`,
        code_type: "javascript",
      },
    ],
  }),

  new Cheatsheet({
    id: "array-hooks",
    topic: "State",
    table: "Update",
    action: [
      {
        text: "Array",
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
          "https://images.cheatsheet.cam/images/image-1726459542742.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: ` const [members, setMembers] = useState([]);


 //Create new object ✅
 setMembers([ ...members, 'Sam' ]);


 //Array methods that return new array ✅
setMembers(members.filter(member => member !== 'Aiman'))




 //Mutate ❌
 members.push('Sam');`,
        code_type: "javascript",
      },
    ],
  }),
  new Cheatsheet({
    id: "object-hooks",
    topic: "State",
    table: "Update",
    action: [
      {
        text: "Object",
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
          "https://images.cheatsheet.cam/images/image-1726459668006.webp",
        code: "",
        code_type: "javascript",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `const [movie, setMovie] = useState({});
 


//Create new object ✅
 setMovie({ ...movie, rate: 4.5 });


 //Mutate ❌
 movie.rate = 4.5;`,
        code_type: "javascript",
      },
    ],
  }),

  new Cheatsheet({
    id: "state-var",
    topic: "State",
    table: "Update",
    action: [
      {
        text: "Batch",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "One event will have many series of state updates before next render",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726459887861.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: ` const [score, setScore] = useState(0);


 function handleClick1() {
   setScore(score + 5); // state = 5
   setScore(score + 5); // state = 5
   //final score will be rendered as 5
 }


 function handleClick2() {
   setScore(score + 5); // state = 5
   setScore((sc) => sc + 1); // state = 6
   setScore((sc) => sc + 1); // state = 7
   //score will be 7
 }
`,
        code_type: "javascript",
      },
    ],
  }),
];

export const StateCheatsheet = [...INTRODUCTION, ...MEMORY, ...UPDATE];
