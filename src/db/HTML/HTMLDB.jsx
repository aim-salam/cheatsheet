import Cheatsheet from "../CheatsheetClass";

const INTRODUCTION = [
  new Cheatsheet({
    id: "html-definition",
    topic: "HTML",
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
        text: "HTML is a language used to write the markup/structure of a webpage.",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726073050194.webp",
        code: "",
        code_type: "",
      },
    ],
  }),
  new Cheatsheet({
    id: "html-bb",
    topic: "HTML",
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
      // {
      //   text: "Element, Attribute, Tag",
      //   image_link: "",
      //   code: "",
      //   code_type: "",
      // },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726375367455.webp",
        code: "",
        code_type: "",
      },
    ],
  }),
];

const HEAD_SECTION = [
  new Cheatsheet({
    id: "html-head",
    topic: "HTML",
    table: "Head Section",
    action: [
      {
        text: "Head Section",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "Search Engine : tell them about our web page.",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
    code: [
      {
        text: "",
        image_link: "",
        code: `<!-- Code -->
<head></head>

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
    id: "html-title",
    topic: "HTML",
    table: "Head Section",
    action: [
      {
        text: "title",
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
          "https://images.cheatsheet.cam/images/image-1726376355741.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `<!-- Code -->
<title>Intro Page</title>`,
        code_type: "html",
      },
    ],
  }),
  new Cheatsheet({
    id: "html-meta",
    topic: "HTML",
    table: "Head Section",
    action: [
      {
        text: "meta",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: `- keywords
- description
- 
`,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1727869803002.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `<!-- Code -->
<meta name="description" content="Details about webpage" />
<meta name="keywords" content="autotask, ai, cheap" />`,
        code_type: "html",
      },
    ],
  }),
];

//Body Section
const BODY_SECTION = [
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

// TEXT
const TEXT = [
  new Cheatsheet({
    id: "html-text",
    topic: "HTML",
    table: "Text",
    action: [
      {
        text: "text",
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
          "https://images.cheatsheet.cam/images/image-1726377955757.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [],
  }),
  new Cheatsheet({
    id: "html-header",
    topic: "HTML",
    table: "Text",
    action: [
      {
        text: "header",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "The header is used to create hierarchy. Avoid applying styling to it.",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726377755954.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `<h1>Example of HTML Header 1</h1>
<h2>Example of HTML Header 2</h2>
<h3>Example of HTML Header 3</h3>
`,
        code_type: "html",
      },
    ],
  }),
  new Cheatsheet({
    id: "html-paragraph",
    topic: "HTML",
    table: "Text",
    action: [
      {
        text: "paragrahph",
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
          "https://images.cheatsheet.cam/images/image-1726377508775.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `<p>This is the paragraph</p>`,
        code_type: "html",
      },
    ],
  }),
  new Cheatsheet({
    id: "html-deprecated",
    topic: "HTML",
    table: "Text",
    action: [
      {
        text: "emphasize, italic, strong, bold",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "Deprecated, HTML is not meant for styling",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1726377389128.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `<!-- deprecated -->`,
        code_type: "html",
      },
    ],
  }),
];

// entities
const ENTITIES = [
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

//hyperlink
const HYPERLINK = [
  new Cheatsheet({
    id: "hyperlink-intro",
    topic: "HTML",
    table: "Hyperlink",
    action: [
      {
        text: "Hyperlink",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: `Element with link.`,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
    code: [],
  }),
  new Cheatsheet({
    id: "hyperlink-anchor",
    topic: "HTML",
    table: "Hyperlink",
    action: [
      {
        text: "anchor",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [],
    visual: [
      {
        text: ``,
        image_link:
          "https://images.cheatsheet.cam/images/image-1727870980136.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: ``,
        image_link: "",
        code: `<a href="./about.html">About me</a><!-- Link to a local page called about.html -->
<a href="https://www.ytube..l">About me</a><!-- Link to an external website (incorrect URL as placeholder) -->
<a href="https://www.ytube..l" target="_blank">About me</a><!-- Link to an external website (incorrect URL) that opens in a new tab/window -->
<a href="./lol.jpg">About me</a><!-- Link to a local image file called lol.jpg -->
<a href="./lol.jpg" download>About me</a><!-- Link to download a local image file called lol.jpg when clicked -->
<a href="#id">About me</a><!-- Link to a specific section on the same page with id="id" -->
<a href="mailto:xxxxx@gmail.com">About me</a><!-- Link to open an email client with a pre-filled recipient address -->`,
        code_type: "html",
      },
    ],
  }),
];

// image
const IMAGE = [
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

//Video
const VIDEO = [
  new Cheatsheet({
    id: "video-intro",
    topic: "HTML",
    table: "Video",
    action: [
      {
        text: "Video",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: `Element with link.`,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1727877318444.webp",
        code: "",
        code_type: "",
      },
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1727877334701.webp",
        code: "",
        code_type: "",
      },
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1727877348722.webp",
        code: "",
        code_type: "",
      },
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1727877389108.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "Video",
        image_link: "",
        code: `<video src="./sky.mp4"></video>
<video src="./sky.mp4" height="200px"></video>
<video src="./sky.mp4" height="200px" controls></video>
<video src="./sky.mp4" height="200px" controls autoplay></video>`,
        code_type: "html",
      },
    ],
  }),
];

//List
const LIST = [
  new Cheatsheet({
    id: "list-intro",
    topic: "HTML",
    table: "List",
    action: [
      {
        text: "ul",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: `Unordered list/
bullet point.
`,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1727877622054.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `<ul>
  <li>About me</li>
  <li>Product</li>
</ul>`,
        code_type: "html",
      },
    ],
  }),
  new Cheatsheet({
    id: "list-intro",
    topic: "HTML",
    table: "List",
    action: [
      {
        text: "ol",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: `Ordered list.

Auto generated number.
`,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1727877913813.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `<ol>
  <li>Open wrap</li>
  <li>Eat</li>
  <li>Close wrap</li>
</ol>`,
        code_type: "html",
      },
    ],
  }),
  new Cheatsheet({
    id: "list-dl",
    topic: "HTML",
    table: "List",
    action: [
      {
        text: "dl",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: `Description list.`,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1727878054529.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `<dl>
  <dt>HTML</dt>
  <dd>Hyperter Markup Language</dd>
  <dt>CSS</dt>
  <dd>Casecade Style Sheet</dd>
</dl>`,
        code_type: "html",
      },
    ],
  }),
];

//Table
const TABLE = [
  new Cheatsheet({
    id: "table-intro",
    topic: "HTML",
    table: "Table",
    action: [
      {
        text: "Table",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: ``,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: ``,
        image_link:
          "https://images.cheatsheet.cam/images/image-1727878343638.webp",
        code: "",
        code_type: "",
      },
      {
        text: ``,
        image_link:
          "https://images.cheatsheet.cam/images/image-1727878365139.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: ``,
        image_link: "",
        code: `<table>
  <tr>
    <th>Category</th>
    <th>Amount</th>
  </tr>
  <tr>
    <td>Budget</td>
    <td>$100</td>
  </tr>
</table>`,
        code_type: "html",
      },
      {
        text: ``,
        image_link: "",
        code: `<table>
  <tr>
    <th colspan="2">Expenses</th>
  </tr>
  <tr>
    <th>Category</th>
    <th>Amount</th>
  </tr>
  <tr>
    <td>Budget</td>
    <td>$100</td>
  </tr>
</table>`,
        code_type: "html",
      },
    ],
  }),
];

//Container
const CONTAINER = [
  new Cheatsheet({
    id: "container-intro",
    topic: "HTML",
    table: "Container",
    action: [
      {
        text: "Container",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: `Grouping elements`,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
    code: [],
  }),
  new Cheatsheet({
    id: "container-div",
    topic: "HTML",
    table: "Container",
    action: [
      {
        text: "div",
        image_link: "",
        code: ``,
        code_type: "",
      },
    ],
    description: [
      {
        text: ``,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
    code: [
      {
        text: ``,
        image_link: "",
        code: `<div>
  <p>This is a paragraph inside a div.</p>
  <p>Another paragraph inside the same div.</p>
</div>`,
        code_type: "html",
      },
    ],
  }),
  new Cheatsheet({
    id: "container-span",
    topic: "HTML",
    table: "Container",
    action: [
      {
        text: "span",
        image_link: "",
        code: ``,
        code_type: "",
      },
    ],
    description: [
      {
        text: ``,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
    code: [
      {
        text: ``,
        image_link: "",
        code: `<p>
  This is a <span style="color: red">highlighted</span> word in a sentence.
</p>`,
        code_type: "html",
      },
    ],
  }),
];

//Semantic
const SEMANTIC_ELEMENTS = [
  new Cheatsheet({
    id: "semantic-intro",
    topic: "HTML",
    table: "Semantic Elements",
    action: [
      {
        text: "Generic elements",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: `div, span`,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
    code: [],
  }),
  new Cheatsheet({
    id: "semantic-sementic",
    topic: "HTML",
    table: "Semantic Elements",
    action: [
      {
        text: "Sementic elements",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: `SEO friendly
        
Semantic = meaningful`,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
    code: [],
  }),
  new Cheatsheet({
    id: "semantic-article",
    topic: "HTML",
    table: "Semantic Elements",
    action: [
      {
        text: "article",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: ``,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
    code: [],
  }),
  new Cheatsheet({
    id: "semantic-figure",
    topic: "HTML",
    table: "Semantic Elements",
    action: [
      {
        text: "figure",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: ``,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
    code: [],
  }),
  new Cheatsheet({
    id: "semantic-mark",
    topic: "HTML",
    table: "Semantic Elements",
    action: [
      {
        text: "mark",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: ``,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
    code: [],
  }),
  new Cheatsheet({
    id: "semantic-time",
    topic: "HTML",
    table: "Semantic Elements",
    action: [
      {
        text: "time",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: ``,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
    code: [],
  }),
  new Cheatsheet({
    id: "semantic-container",
    topic: "HTML",
    table: "Semantic Elements",
    action: [
      {
        text: "header, main, footer, aside, section, nav",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: ``,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
    code: [],
  }),
];

//structuing
const STRUCTURING = [
  new Cheatsheet({
    id: "structuring-intro",
    topic: "HTML",
    table: "Structuring a web page",
    action: [
      {
        text: "",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: `Use semantic element to structure a web page`,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: ``,
        image_link:
          "https://images.cheatsheet.cam/images/image-1727879823422.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: ``,
        image_link: "",
        code: `   <header>
     <h1>Welcome to My Website</h1>
     <nav>
       <ul>
         <li><a href="#home">Home</a></li>
         <li><a href="#about">About</a></li>
         <li><a href="#services">Services</a></li>
         <li><a href="#contact">Contact</a></li>
       </ul>
     </nav>
   </header>

   <main>
     <section id="home">
       <h2>Home</h2>
       <p>This is the homepage content.</p>
     </section>

     <section id="about">
       <h2>About Us</h2>
       <p>Information about us goes here.</p>
     </section>

     <section id="services">
       <h2>Our Services</h2>
       <article>
         <h3>Service 1</h3>
         <p>Details about service 1.</p>
       </article>
       <article>
         <h3>Service 2</h3>
         <p>Details about service 2.</p>
       </article>
     </section>

     <section id="contact">
       <h2>Contact Us</h2>
       <form>
         <label for="name">Name:</label>
         <input type="text" id="name" name="name" required />
         <label for="email">Email:</label>
         <input type="email" id="email" name="email" required />
         <button type="submit">Submit</button>
       </form>
     </section>
   </main>

   <footer>
     <p>&copy; 2024 My Website. All rights reserved.</p>
   </footer>
`,
        code_type: "html",
      },
    ],
  }),
  new Cheatsheet({
    id: "structuring-header",
    topic: "HTML",
    table: "Structuring a web page",
    action: [
      {
        text: "header",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: ``,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
    code: [],
  }),
  new Cheatsheet({
    id: "structuring-nav",
    topic: "HTML",
    table: "Structuring a web page",
    action: [
      {
        text: "nav",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: ``,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
    code: [],
  }),
  new Cheatsheet({
    id: "structuring-aside",
    topic: "HTML",
    table: "Structuring a web page",
    action: [
      {
        text: "aside",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: ``,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
    code: [],
  }),
  new Cheatsheet({
    id: "structuring-main",
    topic: "HTML",
    table: "Structuring a web page",
    action: [
      {
        text: "main",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: ``,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
    code: [],
  }),
  new Cheatsheet({
    id: "structuring-section",
    topic: "HTML",
    table: "Structuring a web page",
    action: [
      {
        text: "section",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: ``,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
    code: [],
  }),
  new Cheatsheet({
    id: "structuring-footer",
    topic: "HTML",
    table: "Structuring a web page",
    action: [
      {
        text: "footer",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: ``,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [],
    code: [],
  }),
];

//Behavioud
const BEHAVIOUR_ELEMENTS = [
  new Cheatsheet({
    id: "behaviour-intro",
    topic: "HTML",
    table: "Behaviour elements",
    action: [
      {
        text: "Block-level elements",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: `Space takes a full width viewport.

div, p, h1, table`,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1727880391798.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [],
  }),
  new Cheatsheet({
    id: "behaviour-inline",
    topic: "HTML",
    table: "Behaviour elements",
    action: [
      {
        text: "Inline elements",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: `Space takes just nice for the element.

span, a, img, br,`,
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1727880479481.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [],
  }),
];

//Shortcut
const SHORTCUTS = [
  new Cheatsheet({
    id: "hyperlink-shortcuts",
    topic: "HTML",
    table: "Shortcuts",
    action: [
      {
        text: "Template / boilerplate",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [],
    visual: [
      {
        text: ``,
        image_link:
          "https://images.cheatsheet.cam/images/image-1727880828572.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: ``,
        image_link: "",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
</head>
<body>
  
</body>
</html>`,
        code_type: "html",
      },
    ],
  }),
  new Cheatsheet({
    id: "hyperlink-emmit",
    topic: "HTML",
    table: "Shortcuts",
    action: [
      {
        text: "Emmit",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [],
    visual: [],
    code: [],
  }),
];

//Tools
const TOOLS = [
  new Cheatsheet({
    id: "hyperlink-tools",
    topic: "HTML",
    table: "Tools",
    action: [
      {
        text: "Live server",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    description: [
      {
        text: "Local dev server to run web app.",
        image_link: "",
        code: "",
        code_type: "",
      },
    ],
    visual: [
      {
        text: "",
        image_link:
          "https://images.cheatsheet.cam/images/image-1727881142974.webp",
        code: "",
        code_type: "",
      },
    ],
    code: [
      {
        text: "",
        image_link: "",
        code: `VScode > extension > live server

.html file > right click > Open with Live Server
`,
        code_type: "",
      },
    ],
  }),
];

export const HTMLTopic = {
  topic: "HTML",
  type: "parent",
  imageLink: "https://images.cheatsheet.cam/images/html.webp",
  tables: [
    {
      table: "Introduction",
    },
    {
      table: "Head Section",
    },
    {
      table: "Body Section",
    },
    {
      table: "Text",
    },
    {
      table: "Entities",
    },
    {
      table: "Hyperlink",
    },
    {
      table: "Image",
    },
    {
      table: "Video",
    },
    {
      table: "List",
    },
    {
      table: "Table",
    },
    {
      table: "Container",
    },
    {
      table: "Semantic Elements",
    },
    {
      table: "Structuring a web page",
    },
    {
      table: "Behaviour elements",
    },
    {
      table: "Shortcuts",
    },
    {
      table: "Tools",
    },
  ],
};

export const HTMLCheatsheet = [
  ...INTRODUCTION,
  ...HEAD_SECTION,
  ...BODY_SECTION,
  ...TEXT,
  ...ENTITIES,
  ...HYPERLINK,
  ...IMAGE,
  ...VIDEO,
  ...LIST,
  ...TABLE,
  ...CONTAINER,
  ...SEMANTIC_ELEMENTS,
  ...STRUCTURING,
  ...BEHAVIOUR_ELEMENTS,
  ...SHORTCUTS,
  ...TOOLS,
];
