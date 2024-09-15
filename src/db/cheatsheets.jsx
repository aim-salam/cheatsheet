import { HTMLCheatsheet } from "./cheatsheets/HTML/HTMLCheatsheets";
import { LayoutCheatsheets } from "./cheatsheets/CSS/LayoutCheatsheets";
import { ReactCheatsheet } from "./cheatsheets/React/ReactCheatsheet";
import { StateCheatsheet } from "./cheatsheets/React/StateCheatsheet";
export const cheatsheets = [
  ...HTMLCheatsheet,
  ...LayoutCheatsheets,
  ...ReactCheatsheet,
  ...StateCheatsheet,
];
