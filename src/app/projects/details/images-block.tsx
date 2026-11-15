import ProjectImage from "./project-image";
import { IProjectImage } from "@/types";
import classNames from "@/utils/classNames";

interface IImagesBlockProps {
  images: Array<IProjectImage>;
  /** Small, centered and without frame, for logos and icons. */
  logo?: boolean;
  /** Phone screens, centered at about the width of a phone. */
  phone?: boolean;
}

/** One image across the content width, or several side by side. */
const ImagesBlock = (props: IImagesBlockProps) => {
  const { images, logo, phone } = props;

  return (
    <div
      className={classNames(
        "project-images",
        logo ? "project-images--logo" : "",
        phone ? "project-images--phone" : ""
      )}
    >
      {images.map((image) => (
        <ProjectImage key={image.src} image={image} bare={logo} />
      ))}
    </div>
  );
};

export default ImagesBlock;
