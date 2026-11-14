import { mainMenu } from "@/data/menus";

/** The main menu without its call to action button. */
export const getFooterMenu = () =>
  mainMenu.filter((item) => !item.className?.includes("btn"));
