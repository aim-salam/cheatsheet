import Cheatsheet from "../../CheatsheetClass";

export const ENTITIES = [
  new Cheatsheet({
    id: "html-entities",
    topic: "HTML",
    table: "Entities",
    action: [
      {
        text: "entities",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "Some characters are reserved by HTML. To display them, we need to use special notation",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726379077381.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `<!-- Not working -->
  <p>This is the entities. <HTML></p>
  
  <!-- Working -->
  <p>This is the entities. &lt;HTML&gt;</p>`,
        code_type: "html",
      },
    ],
  }),
];
