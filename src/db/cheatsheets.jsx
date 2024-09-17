import { HTMLCheatsheet } from "./cheatsheets/HTML/HTMLCheatsheets";
import { LayoutCheatsheets } from "./cheatsheets/CSS/LayoutCheatsheets";
import { ReactCheatsheet } from "./cheatsheets/React/ReactCheatsheet";
import { MemoryCheatsheet } from "./cheatsheets/React/MemoryCheatsheet";
import { PassDataCheatsheet } from "./cheatsheets/React/PassDataCheatsheet";
import { RefCheatsheet } from "./cheatsheets/React/RefCheatsheet";
import { StateCheatsheet } from "./cheatsheets/React/StateCheatsheet";
export const cheatsheets = [
  ...HTMLCheatsheet,
  ...LayoutCheatsheets,
  ...ReactCheatsheet,
  ...MemoryCheatsheet,
  ...StateCheatsheet,
  ...RefCheatsheet,
  ...PassDataCheatsheet,
];
