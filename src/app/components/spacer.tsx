import classNames from "@/utils/classNames";
import React, { PropsWithChildren } from "react";

interface ISpacerProps extends PropsWithChildren {
  className?: string;
}

const Spacer = (props: ISpacerProps) => {
  const { children, className } = props;

  return <div className={classNames("spacer", className)}>{children}</div>;
};

export default Spacer;
