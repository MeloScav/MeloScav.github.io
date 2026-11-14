export enum CategoryType {
  DESIGN = "DESIGN",
  ILLUSTRATION = "ILLUSTRATION",
  DEVELOPMENT = "DEVELOPMENT",
}

export interface IProject {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  thumbSrc: string;
  tags?: Array<string>;
  category: keyof typeof CategoryType;
}

export interface ISocialLink {
  name: string;
  href: string;
  iconId: string;
}

export interface ICategory {
  id: keyof typeof CategoryType;
  name: string;
  description: string;
  /** Text under the title of the category page, falls back to description. */
  intro?: string;
  thumbSrc: string;
  tags?: Array<string>;
}
