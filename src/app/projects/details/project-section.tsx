import { Container, Stack } from "react-bootstrap";
import { IProjectSection, ProjectBlock } from "@/types";
import classNames from "@/utils/classNames";
import TitleArrow from "@/app/components/decorations/title-arrow";
import DecorationIcon from "@/app/components/decorations/decoration-icon";
import ProjectImage from "./project-image";
import TextBlock from "./text-block";
import ImagesBlock from "./images-block";
import FontsBlock from "./fonts-block";
import ColorsBlock from "./colors-block";
import GalleryBlock from "./gallery-block";
import ProjectText from "./project-text";

interface IProjectSectionProps {
  section: IProjectSection;
  /** Position of the section on the page, picks its decoration. */
  index: number;
}

/** One icon beside each section, alternating sides like the mockup. */
const decorations = [
  {
    iconId: "circle",
    className: "text-secondary-light",
    width: "32px",
    side: "left",
  },
  {
    iconId: "pill",
    className: "text-secondary",
    width: "36px",
    height: "84px",
    side: "right",
    rotate: "-48deg",
  },
  {
    iconId: "circle",
    className: "text-primary-light",
    width: "32px",
    side: "left",
  },
  {
    iconId: "hashtag",
    className: "text-primary-light",
    width: "36px",
    side: "right",
  },
  {
    iconId: "star",
    className: "text-secondary-light",
    width: "47px",
    side: "left",
  },
  {
    iconId: "triangle",
    className: "text-primary-light",
    width: "44px",
    side: "right",
  },
] as const;

const renderBlock = (block: ProjectBlock) => {
  switch (block.type) {
    case "text":
      return (
        <TextBlock
          paragraphs={block.paragraphs}
          lead={block.lead}
          link={block.link}
        />
      );
    case "images":
      return (
        <ImagesBlock
          images={block.images}
          logo={block.logo}
          phone={block.phone}
        />
      );
    case "fonts":
      return <FontsBlock fonts={block.fonts} />;
    case "colors":
      return (
        <ColorsBlock colors={block.colors} paragraphs={block.paragraphs} />
      );
    case "gallery":
      return (
        <GalleryBlock paragraphs={block.paragraphs} images={block.images} />
      );
  }
};

const ProjectSection = (props: IProjectSectionProps) => {
  const { section, index } = props;
  const { title, layout = "stacked", dark, blocks } = section;
  const decoration = decorations[index % decorations.length];
  const [first, ...rest] = blocks;
  const isSplit = layout === "split" && first?.type === "text";
  const body = isSplit ? rest : blocks;

  const heading = title ? (
    <h2
      className={classNames(
        "position-relative d-inline-block",
        dark ? "text-white" : "text-black"
      )}
    >
      {title}
      <TitleArrow />
    </h2>
  ) : null;

  return (
    <section
      className={classNames(
        "project-section position-relative",
        dark ? "project-section--dark bg-gray-800" : ""
      )}
    >
      <Container className="position-relative">
        <DecorationIcon
          iconId={decoration.iconId}
          className={classNames(decoration.className, "d-none d-lg-block")}
          width={decoration.width}
          height={"height" in decoration ? decoration.height : undefined}
          style={{
            top: "30%",
            ...(decoration.side === "left"
              ? { right: "calc(100% + 48px)" }
              : { left: "calc(100% + 48px)" }),
            ...("rotate" in decoration
              ? { transform: `rotate(${decoration.rotate})` }
              : {}),
          }}
        />

        {isSplit && first.type === "text" ? (
          <div className="project-split project-split--title">
            <div>{heading}</div>
            <ProjectText
              className="fs-7"
              paragraphs={first.paragraphs}
              link={first.link}
            />
          </div>
        ) : (
          heading
        )}
      </Container>

      {body.length ? (
        <Stack
          gap={9}
          className={
            // A split section reads like its own section, the same space
            // comes after it as before.
            isSplit ? "project-section__after-split" : heading ? "mt-9" : ""
          }
        >
          {body.map((block, blockIndex) =>
            block.type === "images" && block.fullBleed ? (
              <ProjectImage key={blockIndex} image={block.images[0]} bare />
            ) : block.type === "gallery" ? (
              <GalleryBlock
                key={blockIndex}
                paragraphs={block.paragraphs}
                images={block.images}
              />
            ) : (
              <Container key={blockIndex}>{renderBlock(block)}</Container>
            )
          )}
        </Stack>
      ) : null}
    </section>
  );
};

export default ProjectSection;
