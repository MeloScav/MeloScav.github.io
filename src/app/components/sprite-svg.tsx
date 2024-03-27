import classNames from "@/utils/classNames";

interface SpriteSVGProps {
  iconId: string;
  className?: string;
  isRotating?: boolean;
}

const SpriteSVG = (props: SpriteSVGProps) => {
  const { iconId, className, isRotating, ...propsRest } = props;
  return (
    <svg
      className={classNames("icon", isRotating ? "spin" : "", className ?? "")}
      {...propsRest}
    >
      <use href={`/images/sprite.svg#${iconId}`} />
    </svg>
  );
};

export default SpriteSVG;
