import Cheatsheet from "../../CheatsheetClass";

export const BODY_SECTION = [
  new Cheatsheet({
    id: "html-body-section",
    topic: "HTML",
    table: "Body Section",
    action: [
      {
        text: `Body Section`,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [],
    visual: [],
    code: [
      {
        text: "",
        image_link: "",
        code: `<!-- Code -->
  <body></body>
  
  <!-- Full code -->
  <!DOCTYPE html>
  <html lang="en">
   <head>
     <meta charset="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <title>Document</title>
   </head>
   <body></body>
  </html>`,
        code_type: "html",
      },
    ],
  }),
  new Cheatsheet({
    id: "html-body-section-list",
    topic: "HTML",
    table: "Body Section",
    action: [
      {
        text: `- text
  - entities
  - hyperlink
  - image
  - video 
  - audio
  - list
  - table`,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [],
    visual: [],
    code: [
      {
        text: "",
        image_link: "",
        code: ``,
        code_type: "html",
      },
    ],
  }),
];
