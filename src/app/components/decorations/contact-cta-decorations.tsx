import DecorationIcon from "./decoration-icon";

const ContactCtaDecorations = () => {
  return (
    <div className="decoration-icons-wrapper d-none d-lg-block">
      <DecorationIcon
        iconId={"circle"}
        className="text-primary-light"
        width="32px"
        style={{ top: "21%", left: "9%" }}
      />
      <DecorationIcon
        iconId={"pill"}
        className="text-secondary"
        width="45px"
        height="105px"
        style={{ top: "22%", left: "93%", transform: "rotate(-48deg)" }}
      />
      <DecorationIcon
        iconId={"circle"}
        className="text-secondary-light"
        width="32px"
        style={{ top: "64%", left: "82%" }}
      />
      <DecorationIcon
        iconId={"hashtag"}
        className="text-secondary-light"
        width="36px"
        style={{ top: "73%", left: "4%" }}
      />
    </div>
  );
};

export default ContactCtaDecorations;
