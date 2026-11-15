import Image from "next/image";
import { IProjectImage } from "@/types";
import classNames from "@/utils/classNames";

interface IProjectImageProps {
  className?: string;
  image: IProjectImage;
  /** Skips the rounded frame and shadow, for images that bleed to the edges. */
  bare?: boolean;
  priority?: boolean;
}

/** A project image, or a muted looping video for the former animated GIFs. */
const ProjectImage = (props: IProjectImageProps) => {
  const { className, image, bare, priority } = props;
  const classes = classNames(
    "project-image",
    bare ? "" : "project-image--framed",
    className
  );

  if (image.src.endsWith(".mp4")) {
    return (
      <video
        className={classes}
        src={image.src}
        width={image.width}
        height={image.height}
        aria-label={image.alt}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    );
  }

  return (
    <Image
      className={classes}
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes="(min-width: 992px) 80vw, 100vw"
      priority={priority}
    />
  );
};

export default ProjectImage;
