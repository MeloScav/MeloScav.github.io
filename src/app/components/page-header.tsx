import { PropsWithChildren, ReactNode } from "react";
import TitleArrow from "./decorations/title-arrow";
import PageHeaderDecorations from "./decorations/page-header-decorations";

interface IPageHeaderProps extends PropsWithChildren {
  title: string;
  /** Small line above the title, like the category of a project. */
  eyebrow?: ReactNode;
}

/** Title of an inner page, followed by its intro (the children). */
const PageHeader = (props: IPageHeaderProps) => {
  const { title, eyebrow, children } = props;

  return (
    <header className="position-relative">
      <PageHeaderDecorations />

      {eyebrow ? <div>{eyebrow}</div> : null}
      <h1 className="text-black position-relative d-inline-block">
        {title}
        <TitleArrow />
      </h1>
      {children}
    </header>
  );
};

export default PageHeader;
