import classNames from "@/utils/classNames";
import React, { PropsWithChildren, ReactNode } from "react";

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
    </h1>
  );
};

export default TitleDecorated;
