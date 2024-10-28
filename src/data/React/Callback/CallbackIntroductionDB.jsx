import Cheatsheet from "../../CheatsheetClass";

export const INTRODUCTION = [
  new Cheatsheet({
    id: "Callback-bb",
    topic: "Callback",
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
          "https://images.cheatsheet.cam/images/image-1726661256402.webp",
        code: "",
        code_type: "",
      },
    ],

    code: [
      {
        text: "Variable",
        image_link: "",
        code: `export default function Parent() {
  
    const handleMoney = (childrenMoney) => {
      console.log(childrenMoney)
    };
  
    return (
                  // Pass reference to children props
        <Children receiveMoney={handleMoney} 
        />
    );
  }
  
  
  export default function Children({ receiveMoney }) {
    const handleClick = () => {
      // call the callback function
      receiveMoney("1000 USD"); 
    };
  
    return (
      <div>
        <button onClick={handleClick}>Send Money to Parent</button>
      </div>
    );
  }
  
  `,
        code_type: "javascript",
      },
    ],
  }),
];
