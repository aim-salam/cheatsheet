import Cheatsheet from "../CheatsheetClass";

const INTRODUCTION = [
  new Cheatsheet({
    id: "Callback-bb",
    topic: "Callback",
    table: "Introduction",
    action: "Building-block",
    description: [` `],
    visual: [
      {
        text: "",
        link: "https://images.cheatsheet.cam/images/image-1726661256402.webp",
      },
    ],
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

    emoji: "❄️",
    priority: 1,
    codeType: "js",
  }),
];

export const CallbackCheatsheet = [...INTRODUCTION];
