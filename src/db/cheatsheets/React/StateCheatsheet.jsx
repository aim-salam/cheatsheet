import Cheatsheet from "../CheatsheetClass";

const INTRODUCTION = [
  new Cheatsheet({
    id: "state-prerequisite",
    topic: "State",
    table: "Introduction",
    action: "Prerequisite",
    description: ["Memory"],
    visual: [],

    emoji: "❄️",
    priority: 1,
    codeType: "js",
  }),
  new Cheatsheet({
    id: "state-definition",
    topic: "State",
    table: "Introduction",
    action: "Definition",
    description: [
      `1. State can hold data`,
      `2. and it can trigger React to re-render the component.`,
    ],
    visual: [
      {
        text: "Component memories :",
        link: "https://images.cheatsheet.cam/images/image-1726424168846.webp",
      },
    ],

    emoji: "❄️",
    priority: 1,
    codeType: "js",
  }),
  new Cheatsheet({
    id: "state-bb",
    topic: "State",
    table: "Introduction",
    action: "Building-block",
    description: [` `],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726459325361.webp",
      },
    ],
    code: `const [number,setNumber] = useState(0) // integer/string
const [isLoading,setIsLoading] = useState(false) // bool
const [members, setMembers] = useState([]) // array
const [movies, setMovies] = useState({}) // object
`,

    emoji: "❄️",
    priority: 1,
    codeType: "js",
  }),
];

const MEMORY = [];

const UPDATE = [
  new Cheatsheet({
    id: "state-primitive",
    topic: "State",
    table: "Update",
    action: "Primitive values",
    description: [`string, integer, boolean, null`],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726460443383.webp",
      },
    ],
    code: ` const [name, setName] = useState('');
    
 setName('Sam');
;`,

    emoji: "🔥",
    priority: 1,
    codeType: "js",
  }),

  new Cheatsheet({
    id: "array-hooks",
    topic: "State",
    table: "Update",
    action: "Array",
    description: [` `],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726459542742.webp",
      },
    ],
    code: ` const [members, setMembers] = useState([]);


 //Create new object ✅
 setMembers([ ...members, 'Sam' ]);


 //Array methods that return new array ✅
setMembers(members.filter(member => member !== 'Aiman'))




 //Mutate ❌
 members.push('Sam');`,

    emoji: "🔥",
    priority: 1,
    codeType: "js",
  }),
  new Cheatsheet({
    id: "object-hooks",
    topic: "State",
    table: "Update",
    action: "Object",
    description: [` `],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726459668006.webp",
      },
    ],
    code: `const [movie, setMovie] = useState({});
 


//Create new object ✅
 setMovie({ ...movie, rate: 4.5 });


 //Mutate ❌
 movie.rate = 4.5;`,

    emoji: "🔥",
    priority: 1,
    codeType: "js",
  }),

  new Cheatsheet({
    id: "state-var",
    topic: "State",
    table: "Update",
    action: "Batch",
    description: [
      `One event will have many series of state updates before next render`,
    ],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726459887861.webp",
      },
    ],
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

    emoji: "🔥",
    priority: 1,
    codeType: "js",
  }),
];

export const StateCheatsheet = [...INTRODUCTION, ...MEMORY, ...UPDATE];
