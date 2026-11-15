import ProjectText from "./project-text";
import { IProjectLink } from "@/types";
import classNames from "@/utils/classNames";

interface ITextBlockProps {
  paragraphs: Array<string>;
  /** Bigger text on a wider column, used between two images. */
  lead?: boolean;
  link?: IProjectLink;
}

const TextBlock = (props: ITextBlockProps) => {
  const { paragraphs, lead, link } = props;

  return (
    <ProjectText
      // py-3 on top of the 64px section gap leaves 80px around the text.
      className={classNames(
        "mx-auto py-3",
        lead ? "mw-920 fs-6 text-gray-600" : "mw-700 fs-7"
      )}
      paragraphs={paragraphs}
      link={link}
    />
  );
};

export default TextBlock;
