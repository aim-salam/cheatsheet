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
    action: "Building-block",
    description: [` `],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726651336158.webp",
      },
    ],
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
    // //Pass children
    //   function Children({ children }) {
    //     return (
    //       <div>
    //         {children}
    //       </div>
    //     );
    //   }

    emoji: "❄️",
    priority: 1,
    codeType: "js",
  }),
];

export const PropsCheatsheet = [...INTRODUCTION];
