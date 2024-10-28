import Cheatsheet from "../../CheatsheetClass";

export const TABLE = [
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
