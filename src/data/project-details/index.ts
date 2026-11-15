import { IProjectDetails } from "@/types";
import { animalIllustration } from "./animal-illustration";
import { aquariumMuseumLogo } from "./aquarium-museum-logo";
import { auditUx } from "./audit-ux";
import { beerLovers } from "./beer-lovers";
import { blockedex } from "./blockedex";
import { blocknest } from "./blocknest";
import { car3d } from "./car3d";
import { covidIllustration } from "./covid-illustration";
import { crocro } from "./crocro";
import { duchesneOptic } from "./duchesne-optic";
import { earth3d } from "./earth3d";
import { familyColorfulIcons } from "./family-colorful-icons";
import { familyIcons } from "./family-icons";
import { ifapme } from "./ifapme";
import { illuCar } from "./illu-car";
import { illustration3d } from "./illustration3d";
import { keyboard3d } from "./keyboard3d";
import { pacifism } from "./pacifism";
import { pictograms } from "./pictograms";
import { piscine } from "./piscine";
import { polaroid3d } from "./polaroid3d";
import { pomodoro } from "./pomodoro";
import { rassala } from "./rassala";
import { ristoranteComeACasa } from "./ristorante-come-a-casa";
import { sun3d } from "./sun3d";
import { switchToggle } from "./switch-toggle";
import { taukn } from "./taukn";

/** Detail page content, keyed by project id. */
export const projectDetails: Record<string, IProjectDetails> = {
  "animal-illustration": animalIllustration,
  "aquarium-museum-logo": aquariumMuseumLogo,
  "audit-ux": auditUx,
  "beer-lovers": beerLovers,
  blockedex,
  blocknest,
  car3d,
  "covid-illustration": covidIllustration,
  crocro,
  "duchesne-optic": duchesneOptic,
  earth3d,
  "family-colorful-icons": familyColorfulIcons,
  "family-icons": familyIcons,
  ifapme,
  "illu-car": illuCar,
  illustration3d,
  keyboard3d,
  pacifism,
  pictograms,
  piscine,
  polaroid3d,
  pomodoro,
  rassala,
  "ristorante-come-a-casa": ristoranteComeACasa,
  sun3d,
  "switch-toggle": switchToggle,
  taukn,
};
