import classNames from "@/utils/classNames";
import React, { PropsWithChildren, ReactNode } from "react";
import DecorationIcon from "./decoration-icon";

interface ITitleDecoratedProps extends PropsWithChildren {
  className?: string;
}

const TitleDecorated = (props: ITitleDecoratedProps): ReactNode => {
  const { className, children } = props;

  return (
    <h1 className={classNames("title-decorated", className)}>
      <span className="title-decorated__square"></span>
      <span className="title-decorated__square"></span>
      <span className="title-decorated__square"></span>
      <span className="title-decorated__square"></span>
      <span className="title-decorated__inner">{children}</span>

      <DecorationIcon
        iconId={"decoration-arrow"}
        className="text-gray-300 decoration-icon--responsive"
        width="34px"
        height="113px"
        style={{
          top: "calc(100% - 32px)",
          right: "calc(100% + 47px)",
        }}
      />
    </h1>
  );
};

export default TitleDecorated;
