import { Stack } from "react-bootstrap";
import RichText from "@/app/components/rich-text";

interface IColorsBlockProps {
  colors: Array<Array<{ name: string; hex: string }>>;
  paragraphs: Array<string>;
}

const ColorsBlock = (props: IColorsBlockProps) => {
  const { colors, paragraphs } = props;

  return (
    <div className="project-split project-split--half align-items-center">
      <Stack gap={5}>
        {colors.map((row, index) => (
          <div key={index} className="project-colors__row">
            {row.map((color) => (
              <div key={color.hex} className="project-colors__swatch">
                <span
                  className="project-colors__sample"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="project-colors__name">
                  <span
                    className="project-colors__dot"
                    style={{ backgroundColor: color.hex }}
                  />
                  {color.name}
                </span>
                <span className="project-colors__hex">{color.hex}</span>
              </div>
            ))}
          </div>
        ))}
      </Stack>

      <div className="project-text fs-7 text-gray-300">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>
            <RichText text={paragraph} />
          </p>
        ))}
      </div>
    </div>
  );
};

export default ColorsBlock;
