import RichText from "@/app/components/rich-text";
import { IProjectLink } from "@/types";
import classNames from "@/utils/classNames";

interface IProjectTextProps {
  className?: string;
  paragraphs: Array<string>;
  link?: IProjectLink;
}

/** Paragraphs of a project page, with an optional button to the live project. */
const ProjectText = (props: IProjectTextProps) => {
  const { className, paragraphs, link } = props;

  return (
    <div className={classNames("project-text", className)}>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>
          <RichText text={paragraph} />
        </p>
      ))}

      {link ? (
        <a
          href={link.href}
          className="btn btn-primary mt-4"
          target="_blank"
          rel="noreferrer noopener"
        >
          {link.label}
        </a>
      ) : null}
    </div>
  );
};

export default ProjectText;
