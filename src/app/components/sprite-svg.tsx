import classNames from "@/utils/classNames";
import { CSSProperties } from "react";

interface SpriteSVGProps {
  iconId: string;
  className?: string;
  isRotating?: boolean;
  isDecorationIcon?: boolean;
  style?: CSSProperties;
}

const SpriteSVG = (props: SpriteSVGProps) => {
  const {
    iconId,
    className,
    isRotating,
    isDecorationIcon,
    style,
    ...propsRest
  } = props;
  return (
    <svg
      className={classNames(
        !isDecorationIcon ? "icon" : "",
        isRotating ? "spin" : "",
        className ?? ""
      )}
      style={style}
      {...propsRest}
    >
      <use href={`/images/sprite.svg#${iconId}`} />
    </svg>
  );
};

export default SpriteSVG;
