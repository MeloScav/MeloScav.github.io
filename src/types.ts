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

export interface ICategory {
  id: keyof typeof CategoryType;
  name: string;
  description: string;
  thumbSrc: string;
  tags?: Array<string>;
}
