import classNames from "@/utils/classNames";
import React, { PropsWithChildren, ReactNode } from "react";
import { Stack } from "react-bootstrap";
import SpriteSVG from "../sprite-svg";

interface IDecorationButtonProps extends PropsWithChildren {
  className?: string;
}

const ButtonDecoration = (props: IDecorationButtonProps): ReactNode => {
  const { className, children } = props;

  return (
    <Stack gap={2}>
      <div className="text-figma">
        <SpriteSVG className="me-2" iconId={"icon-btn"} />
        <span>Buttons</span>
      </div>
      <div className="d-flex">
        <Stack
          direction="horizontal"
          gap={5}
          className={classNames("button-decoration flex-wrap", className)}
        >
          {children}
        </Stack>
      </div>
    </Stack>
  );
};

export default ButtonDecoration;
