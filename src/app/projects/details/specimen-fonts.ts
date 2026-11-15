import {
  Baloo_Da_2,
  Comfortaa,
  EB_Garamond,
  Josefin_Sans,
  Lato,
  Lobster,
  Oswald,
  Quicksand,
  Roboto,
  Ruda,
  Source_Sans_3,
  Ubuntu,
} from "next/font/google";
import { SpecimenFamily } from "@/types";

/*
 * Only the project detail route imports this file, so the home page never
 * sees these fonts. Without preload, the browser only downloads the files of
 * the fonts the open page actually writes with.
 */
const balooDa2 = Baloo_Da_2({ subsets: ["latin"], preload: false });
const comfortaa = Comfortaa({ subsets: ["latin"], preload: false });
const ebGaramond = EB_Garamond({ subsets: ["latin"], preload: false });
const josefinSans = Josefin_Sans({ subsets: ["latin"], preload: false });
const lato = Lato({ weight: ["400", "700"], subsets: ["latin"], preload: false });
const lobster = Lobster({ weight: "400", subsets: ["latin"], preload: false });
const oswald = Oswald({ subsets: ["latin"], preload: false });
const quicksand = Quicksand({ subsets: ["latin"], preload: false });
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"], preload: false });
const ruda = Ruda({ subsets: ["latin"], preload: false });
const sourceSans3 = Source_Sans_3({ subsets: ["latin"], preload: false });
const ubuntu = Ubuntu({ weight: ["400", "700"], subsets: ["latin"], preload: false });

/** CSS font-family of each specimen font. */
export const specimenFonts: Record<SpecimenFamily, string> = {
  // Already loaded by the layout as the body font.
  Almarai: "var(--font-family-base)",
  Arial: "Arial, Helvetica, sans-serif",
  "Baloo Da 2": balooDa2.style.fontFamily,
  Comfortaa: comfortaa.style.fontFamily,
  "EB Garamond": ebGaramond.style.fontFamily,
  "Josefin Sans": josefinSans.style.fontFamily,
  Lato: lato.style.fontFamily,
  Lobster: lobster.style.fontFamily,
  Oswald: oswald.style.fontFamily,
  Quicksand: quicksand.style.fontFamily,
  Roboto: roboto.style.fontFamily,
  Ruda: ruda.style.fontFamily,
  "Source Sans 3": sourceSans3.style.fontFamily,
  Ubuntu: ubuntu.style.fontFamily,
};
