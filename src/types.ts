export interface IProject {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  thumbSrc: string;
  tags?: Array<string>;
}
