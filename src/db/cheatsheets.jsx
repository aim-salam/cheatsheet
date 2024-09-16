import { HTMLCheatsheet } from "./cheatsheets/HTML/HTMLCheatsheets";
import { LayoutCheatsheets } from "./cheatsheets/CSS/LayoutCheatsheets";
import { ReactCheatsheet } from "./cheatsheets/React/ReactCheatsheet";
import { MemoryCheatsheet } from "./cheatsheets/React/MemoryCheatsheet";
import { PassDataCheatsheet } from "./cheatsheets/React/PassDataCheatsheet";
export const cheatsheets = [
  ...HTMLCheatsheet,
  ...LayoutCheatsheets,
  ...ReactCheatsheet,
  ...MemoryCheatsheet,
  ...PassDataCheatsheet,
];
