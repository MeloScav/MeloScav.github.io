import React, { CSSProperties } from "react";
import SpriteSVG from "../sprite-svg";
import classNames from "@/utils/classNames";

interface IDecorationIconProps {
  iconId: string;
  className?: string;
  style?: CSSProperties;
  width?: string;
  height?: string;
}

const DecorationIcon = (props: IDecorationIconProps) => {
  const { className, iconId, style, width, height } = props;
  const combinedStyle: CSSProperties = {
    ...style,
    ...(Boolean(width) ? { "--decoration-icon-width": width } : {}),
    ...(Boolean(height) ? { "--decoration-icon-height": height } : {}),
  };

  return (
    <SpriteSVG
      className={classNames("decoration-icon", className)}
      iconId={iconId}
      isDecorationIcon={true}
      style={combinedStyle}
    />
  );
};

export default DecorationIcon;
