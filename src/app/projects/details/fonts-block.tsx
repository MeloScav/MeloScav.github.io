import { Stack } from "react-bootstrap";
import RichText from "@/app/components/rich-text";
import ProjectImage from "./project-image";
import FontSpecimen from "./font-specimen";
import { IProjectFont } from "@/types";

interface IFontsBlockProps {
  fonts: Array<IProjectFont>;
}

const FontsBlock = (props: IFontsBlockProps) => {
  const { fonts } = props;

  return (
    <Stack gap={9}>
      {fonts.map((font) => (
        <div key={font.title} className="project-split">
          {font.family ? (
            <FontSpecimen family={font.family} />
          ) : font.specimen ? (
            <ProjectImage
              className="project-font-specimen"
              image={font.specimen}
              bare
            />
          ) : (
            <div />
          )}
          <div className="mw-700">
            <h3 className="h4 text-black mb-5">{font.title}</h3>
            <div className="project-text fs-7">
              {font.paragraphs.map((paragraph, index) => (
                <p key={index}>
                  <RichText text={paragraph} />
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Stack>
  );
};

export default FontsBlock;
