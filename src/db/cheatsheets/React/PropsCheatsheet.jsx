import Cheatsheet from "../CheatsheetClass";

const INTRODUCTION = [
  //   new Cheatsheet({
  //     id: "Props-prerequisite",
  //     topic: "Props",
  //     table: "Introduction",
  //     action: "Prerequisite",
  //     description: ["Pass data"],
  //     visual: [],

  //     emoji: "❄️",
  //     priority: 1,
  //     codeType: "js",
  //   }),
  //   new Cheatsheet({
  //     id: "Props-definition",
  //     topic: "Props",
  //     table: "Introduction",
  //     action: "Definition",
  //     description: [`A way to pass data from parent to children`],
  //     visual: [
  //       {
  //         text: "Component memories :",
  //         link: "https://images.cheatsheet.cam/images/image-1726424168846.webp",
  //       },
  //     ],

  //     emoji: "❄️",
  //     priority: 1,
  //     codeType: "js",
  //   }),
  new Cheatsheet({
    id: "Props-bb",
    topic: "Props",
    table: "Introduction",
    action: [
      {
        text: "Building-block",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726651336158.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `// Pass value
export default function Parent() {
 return (
   <Children
     person={'Sam'} // <--- props
     size={100} // <--- props
   />
 );
}


export default function Children({ 
  person,  // <--- props
  size = 20  // <-- props with default value
}) {
  return (
    <div>
      <p>{person}</p>
      <p>{size}</p>
    </div>
  );
}
  `,
        code_type: "javascript",
      },
    ],
    // //Pass children
    //   function Children({ children }) {
    //     return (
    //       <div>
    //         {children}
    //       </div>
    //     );
    //   }
  }),
];

export const PropsCheatsheet = [...INTRODUCTION];
