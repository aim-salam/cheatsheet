import Cheatsheet from "../CheatsheetClass";
import { BOX_MODEL } from "./Layout/LayoutBoxModelDB";
import { OVERFLOW } from "./Layout/LayoutOverflowDB";
import { MEASUREMENT_UNIT } from "./Layout/LayoutMeasurementUnitDB";
import { POSITIONING } from "./Layout/LayoutPositionDB";
import { FLEXBOX } from "./Layout/LayoutFlexboxDB";

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
