import { SpecimenFamily } from "@/types";
import { specimenFonts } from "./specimen-fonts";

interface IFontSpecimenProps {
  family: SpecimenFamily;
}

/** "Aa", the alphabet and the digits, written with the font itself. */
const FontSpecimen = (props: IFontSpecimenProps) => {
  const { family } = props;

  return (
    <div
      className="font-specimen"
      style={{ fontFamily: specimenFonts[family] }}
      aria-label={`Aperçu de la police ${family}`}
      role="img"
    >
      <span className="font-specimen__glyphs">Aa</span>
      <span className="font-specimen__alphabet">
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
        <br />
        abcdefghijklmnopqrstuvwxyz
        <br />
        0123456789
      </span>
      <span className="font-specimen__name">{family}</span>
    </div>
  );
};

export default FontSpecimen;
