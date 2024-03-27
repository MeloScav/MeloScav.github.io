import classNames from "@/utils/classNames";
import React, { PropsWithChildren, ReactNode } from "react";
import SpriteSVG from "./sprite-svg";

interface ITextHighlightedProps extends PropsWithChildren {
  className?: string;
}

const TextHighlighted = (props: ITextHighlightedProps): ReactNode => {
  const { className, children } = props;

  return (
    <span className="highlighted-text">
      <mark className={classNames(className)}>
        {children}
        <SpriteSVG iconId="text-highlight" />
      </mark>
    </span>
  );
};

export default TextHighlighted;
