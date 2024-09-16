import { HTMLCheatsheet } from "./cheatsheets/HTML/HTMLCheatsheets";
import { LayoutCheatsheets } from "./cheatsheets/CSS/LayoutCheatsheets";
import { ReactCheatsheet } from "./cheatsheets/React/ReactCheatsheet";
import { StateCheatsheet } from "./cheatsheets/React/StateCheatsheet";
import { RefCheatsheet } from "./cheatsheets/React/RefCheatsheet";
export const cheatsheets = [
  ...HTMLCheatsheet,
  ...LayoutCheatsheets,
  ...ReactCheatsheet,
  ...StateCheatsheet,
  ...RefCheatsheet,
];
