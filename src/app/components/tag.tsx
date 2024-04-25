import classNames from "@/utils/classNames";
import React, { PropsWithChildren } from "react";

interface ITagProps extends PropsWithChildren {
  className?: string;
  variant?: string;
  outline?: boolean;
  pill?: boolean;
}

const Tag = (props: ITagProps) => {
  const { children, className, variant, outline, pill } = props;

  return (
    <div
      className={classNames(
        "tag",
        `tag-${variant}`,
        className,
        outline ? "tag-outline" : "",
        pill ? "tag-pill" : ""
      )}
    >
      {children}
    </div>
  );
};

export default Tag;
