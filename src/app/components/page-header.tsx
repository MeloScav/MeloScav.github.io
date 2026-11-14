import { PropsWithChildren } from "react";
import DecorationIcon from "./decorations/decoration-icon";
import PageHeaderDecorations from "./decorations/page-header-decorations";

interface IPageHeaderProps extends PropsWithChildren {
  title: string;
}

/** Title of an inner page with its intro text, the children. */
const PageHeader = (props: IPageHeaderProps) => {
  const { title, children } = props;

  return (
    <header className="position-relative">
      <PageHeaderDecorations />

      <h1 className="text-black position-relative d-inline-block">
        {title}
        <DecorationIcon
          iconId={"decoration-arrow"}
          className="text-gray-300 d-none d-lg-block"
          width="34px"
          height="113px"
          style={{ top: "calc(100% - 32px)", right: "calc(100% + 47px)" }}
        />
      </h1>
      <p className="fs-6 text-gray-400 mw-1000 m-0">{children}</p>
    </header>
  );
};

export default PageHeader;
