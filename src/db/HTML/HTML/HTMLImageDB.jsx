import Cheatsheet from "../../CheatsheetClass";

export const IMAGE = [
  new Cheatsheet({
    id: "html-image",
    topic: "HTML",
    table: "Image",
    action: [
      {
        text: "img",
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
          "https://images.cheatsheet.cam/images/image-1727871717851.webp",
        code: "",
        code_type: "",
      },
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1727871808237.webp",
        code: "",
        code_type: "",
      },
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1727871973687.webp",
        code: "",
        code_type: "",
      },
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1727872139964.webp",
        code: "",
        code_type: "",
      },
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1727872152213.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `<img src="./mario.jpg" /><!-- Displays the image 'mario.jpg' with no specific height, width, or alt text -->
  <img src="./mariio.jpg" alt="Mario and Luigi." /><!-- Displays the image 'mariio.jpg' (note the typo in the filename) with alt text 'Mario and Luigi' -->
  <img src="./mario.jpg" height="200px" /><!-- Displays the image 'mario.jpg' with a height of 200px, width is not specified so it adjusts automatically -->
  <img src="./mario.jpg" height="200px" width="200px" /><!-- Displays the image 'mario.jpg' with both height and width set to 200px -->
  <img src="./mario.jpg" height="200px" width="200px" style="object-fit: cover;" /><!-- Displays the image 'mario.jpg' with height and width set to 200px, using object-fit: cover to maintain aspect ratio while filling the box -->`,
        code_type: "html",
      },
    ],
  }),
];
