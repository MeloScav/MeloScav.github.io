import DecorationIcon from "./decoration-icon";

const AboutDecorations = () => {
  return (
    <div className="decoration-icons-wrapper d-none d-lg-block">
      <DecorationIcon
        iconId={"pill"}
        className="text-primary decoration-icon--responsive"
        width="36px"
        height="84px"
        style={{ top: "-6%", left: "42%", transform: "rotate(48deg)" }}
      />
      <DecorationIcon
        iconId={"circle"}
        className="text-secondary-light"
        width="32px"
        style={{ top: "13%", left: "78%" }}
      />
      <DecorationIcon
        iconId={"emoticon-happy"}
        className="text-gray-300 decoration-icon--responsive"
        width="104px"
        style={{ top: "51%", right: "0" }}
      />
      <DecorationIcon
        iconId={"pill"}
        className="text-secondary decoration-icon--responsive"
        width="45px"
        height="105px"
        style={{ bottom: "40px", left: "4%", transform: "rotate(-48deg)" }}
      />
      <DecorationIcon
        iconId={"circle"}
        className="text-primary-light"
        width="32px"
        style={{ bottom: "96px", left: "37%" }}
      />
      <DecorationIcon
        iconId={"pill"}
        className="text-primary decoration-icon--responsive"
        width="36px"
        height="84px"
        style={{ bottom: "28px", left: "53%", transform: "rotate(48deg)" }}
      />
      <DecorationIcon
        iconId={"hashtag"}
        className="text-secondary-light"
        width="36px"
        style={{ bottom: "40px", left: "75%" }}
      />
    </div>
  );
};

export default AboutDecorations;
