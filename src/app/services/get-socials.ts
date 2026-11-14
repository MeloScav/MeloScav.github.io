import { ISocialLink } from "@/types";

import { socials } from "@/data/socials";

export const getSocials = (): Array<ISocialLink> => [...socials];
