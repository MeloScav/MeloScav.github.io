import DecorationIcon from "./decoration-icon";

/** The curly arrow hanging on the left of a page or section title. */
const TitleArrow = () => {
  return (
    <DecorationIcon
      iconId={"decoration-arrow"}
      className="text-gray-300 d-none d-lg-block"
      width="34px"
      height="113px"
      style={{ top: "calc(100% - 32px)", right: "calc(100% + 47px)" }}
    />
  );
};

export default TitleArrow;
