import { HTMLCheatsheet } from "./HTML/HTMLDB";
import { LayoutCheatsheets } from "./CSS/LayoutDB";
import { ReactCheatsheet } from "./React/ReactDB";
import { MemoryCheatsheet } from "./React/MemoryDB";
import { PassDataCheatsheet } from "./React/PassDataDB";
import { RefCheatsheet } from "./React/RefDB";
import { StateCheatsheet } from "./React/StateDB";
import { PropsCheatsheet } from "./React/PropsDB";
import { CallbackCheatsheet } from "./React/CallbackDB";
export const cheatsheets = [
  ...HTMLCheatsheet,
  ...LayoutCheatsheets,
  ...ReactCheatsheet,
  ...MemoryCheatsheet,
  ...StateCheatsheet,
  ...RefCheatsheet,
  ...PassDataCheatsheet,
  ...PropsCheatsheet,
  ...CallbackCheatsheet,
];
