import Cheatsheet from "../CheatsheetClass";

const INTRODUCTION = [
  new Cheatsheet({
    id: "memory-prerequisite",
    topic: "Memory",
    table: "Introduction",
    action: "Definition",
    description: `Memory is a component building-block to hold data.`,
    visual: [],

    emoji: "❄️",
    priority: 1,
    codeType: "js",
  }),
  new Cheatsheet({
    id: "memory-type",
    topic: "Memory",
    table: "Introduction",
    action: "Types",
    description: `variable, state, reference`,
    visual: [
      {
        text: "Component memories :",
        link: "https://images.cheatsheet.cam/images/image-1726470941134.webp",
      },
    ],

    emoji: "❄️",
    priority: 1,
    codeType: "js",
  }),
  new Cheatsheet({
    id: "memory-variable",
    topic: "Memory",
    table: "Introduction",
    action: "Variable",
    description: `Variable can hold data, but it can't trigger React to re-render the component.`,
    visual: [
      {
        text: "Component memories :",
        link: "https://images.cheatsheet.cam/images/image-1726424143343.webp",
      },
    ],

    emoji: "❄️",
    priority: 1,
    codeType: "js",
  }),
];

const STATE = [
  new Cheatsheet({
    id: "memory-intro-state",
    topic: "Memory",
    table: "State",
    action: "Definition",
    description: `State can hold data and it can trigger React to re-render the component.`,
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
    id: "state-hooks",
    topic: "Memory",
    table: "State",
    action: "Building-block",
    description: ` `,
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
  new Cheatsheet({
    id: "state-update-var",
    topic: "Memory",
    table: "State",
    action: "Update a primitive values",
    description: `string, integer, boolean, null`,
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
    id: "memory-update-array",
    topic: "Memory",
    table: "State",
    action: "Update an array value.",
    description: ` `,
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
    id: "memory-update-object",
    topic: "Memory",
    table: "State",
    action: "Update an object value.",
    description: ` `,
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
    id: "state-bactching",
    topic: "State",
    table: "Update",
    action: "Batch",
    description: `One event will have many series of state updates before next render`,
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

const REFERENCE = [
  new Cheatsheet({
    id: "ref-intro-ref",
    topic: "Memory",
    table: "Reference",
    action: "Definition",
    description: `1. Ref can hold data 2. but it can't trigger React to re-render the component.
        3. The data is not inside the component but outside, so the value remain across re-renders`,
    visual: [
      {
        text: "Component memories :",
        link: "https://images.cheatsheet.cam/images/image-1726462745644.webp",
      },
    ],

    emoji: "❄️",
    priority: 1,
    codeType: "js",
  }),

  new Cheatsheet({
    id: "ref-Building-block",
    topic: "Memory",
    table: "Reference",
    action: "Building-block",
    description: ` `,
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726463732585.webp",
      },
    ],
    code: `const myRef = useRef(initialValue);`,

    emoji: "❄️",
    priority: 1,
    codeType: "js",
  }),

  new Cheatsheet({
    id: "ref-access-value",
    topic: "Memory",
    table: "Reference",
    action: "Access the value",
    description: ` `,
    visual: [],
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
    codeType: "js",
  }),
  new Cheatsheet({
    id: "ref-access-value",
    topic: "Memory",
    table: "Reference",
    action: "Update the value",
    description: `string, integer, boolean, null`,
    visual: [],
    code: ` // Storing value
const countRef = useRef(0);
    

countRef.current = count + 1;`,

    emoji: "🔥",
    priority: 1,
    codeType: "js",
  }),
];

export const MemoryCheatsheet = [...INTRODUCTION, ...STATE, ...REFERENCE];
