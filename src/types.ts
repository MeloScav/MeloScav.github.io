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

/** Fonts the detail pages can write their specimen with. */
export type SpecimenFamily =
  | "Almarai"
  | "Arial"
  | "Baloo Da 2"
  | "Comfortaa"
  | "EB Garamond"
  | "Josefin Sans"
  | "Lato"
  | "Lobster"
  | "Oswald"
  | "Quicksand"
  | "Roboto"
  | "Ruda"
  | "Source Sans 3"
  | "Ubuntu";

export interface IProjectFont {
  title: string;
  /** Specimen written with the font itself. */
  family?: SpecimenFamily;
  /** Exported specimen, for fonts that cannot be loaded here. */
  specimen?: IProjectImage;
  paragraphs: Array<string>;
}

export interface IProjectLink {
  href: string;
  label: string;
}

export interface IProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * Texts are plain strings where **double asterisks** mark the bold parts,
 * since data files hold no JSX.
 */
export type ProjectBlock =
  | {
      type: "text";
      paragraphs: Array<string>;
      lead?: boolean;
      /** Button under the text, to the live project. */
      link?: IProjectLink;
    }
  | {
      type: "images";
      images: Array<IProjectImage>;
      fullBleed?: boolean;
      /** Small, centered and without frame, for logos and icons. */
      logo?: boolean;
      /** Phone screens, centered at about the width of a phone. */
      phone?: boolean;
    }
  /** Text alone on screen, then the images gather around it on scroll. */
  | { type: "gallery"; paragraphs: Array<string>; images: Array<IProjectImage> }
  | {
      type: "fonts";
      fonts: Array<IProjectFont>;
    }
  | {
      type: "colors";
      /** One array per row of swatches. */
      colors: Array<Array<{ name: string; hex: string }>>;
      paragraphs: Array<string>;
    };

export interface IProjectSection {
  title?: string;
  /** "split" puts the title beside the first text instead of above it. */
  layout?: "stacked" | "split";
  dark?: boolean;
  blocks: Array<ProjectBlock>;
}

export interface IProjectDetails {
  summary: string;
  banner: IProjectImage;
  sections: Array<IProjectSection>;
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
