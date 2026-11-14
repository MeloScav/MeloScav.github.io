import DecorationIcon from "./decoration-icon";

const PageHeaderDecorations = () => {
  return (
    <div className="decoration-icons-wrapper d-none d-lg-block">
      <DecorationIcon
        iconId={"pill"}
        className="text-primary"
        width="36px"
        height="84px"
        style={{
          bottom: "calc(100% + 16px)",
          left: "45%",
          transform: "rotate(48deg)",
        }}
      />
      <DecorationIcon
        iconId={"star"}
        className="text-secondary-light"
        width="47px"
        style={{ top: "8%", left: "85%" }}
      />
      <DecorationIcon
        iconId={"hashtag"}
        className="text-primary-light"
        width="36px"
        style={{ top: "calc(100% + 240px)", right: "calc(100% + 64px)" }}
      />
    </div>
  );
};

export default PageHeaderDecorations;
