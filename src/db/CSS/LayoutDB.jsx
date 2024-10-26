import Cheatsheet from "../CheatsheetClass";
import { BOX_MODEL } from "./Layout/CSSLayoutDB";
import { OVERFLOW } from "./Layout/CSSOverflowDB";
import { MEASUREMENT_UNIT } from "./Layout/CSSMeasurementUnitDB";
import { POSITIONING } from "./Layout/CSSPositionDB";
import { FLEXBOX } from "./Layout/CSSFlexboxDB";

export const LayoutCheatsheets = [
  ...BOX_MODEL,
  ...OVERFLOW,
  ...MEASUREMENT_UNIT,
  ...POSITIONING,
  ...FLEXBOX,
];

export const LayoutTopic = {
  topic: "Layout",
  type: "children",
  imageLink: "https://images.cheatsheet.cam/images/image-1726097807593.webp",
  tables: [
    {
      table: "Box model",
    },
    {
      table: "Overflow",
    },
    {
      table: "Measurement Unit",
    },
    {
      table: "Positioning",
    },
    {
      table: "Flexbox",
    },
  ],
};
