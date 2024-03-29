import React from "react";
import DecorationIcon from "./decoration-icon";

const MainBannerDecorations = () => {
  return (
    <div className="main-banner__decorations">
      <DecorationIcon
        iconId={"circle"}
        className="text-primary-light"
        width="32px"
        style={{ top: "35%", right: "122%" }}
      />
      <DecorationIcon
        iconId={"pill"}
        className="text-secondary decoration-icon--responsive"
        width="36px"
        height="84px"
        style={{
          bottom: "calc(100% + 40px)",
          left: "4.7%",
          transform: "rotate(48deg)",
        }}
      />
      <DecorationIcon
        iconId={"emoticon-happy"}
        className="text-gray-300 decoration-icon--responsive"
        width="126px"
        style={{
          bottom: "calc(100% + 44px)",
          left: "35.4%",
          transform: "rotate(-22deg)",
        }}
      />
      <DecorationIcon
        iconId={"circle"}
        className="text-primary-light"
        width="32px"
        style={{ bottom: "calc(100% + 58px)", right: "30.6%" }}
      />
      <DecorationIcon
        iconId={"figma-logo"}
        className="text-secondary"
        width="51px"
        height="74px"
        style={{
          bottom: "calc(100% + 23px)",
          left: "105.9%",
          transform: "rotate(26deg)",
        }}
      />
      <DecorationIcon
        iconId={"triangle"}
        className="text-primary"
        width="39px"
        height="33px"
        style={{
          bottom: "0",
          right: "118.9%",
        }}
      />
      <DecorationIcon
        iconId={"circle"}
        className="text-secondary-light"
        width="32px"
        style={{ top: "calc(100% + 120px)", left: "8.1%" }}
      />
      <DecorationIcon
        iconId={"pill"}
        className="text-primary decoration-icon--responsive"
        width="45px"
        height="105px"
        style={{
          top: "calc(100% + 50px)",
          right: "6%",
          transform: "rotate(-48deg)",
        }}
      />
      <DecorationIcon
        iconId={"star"}
        className="text-secondary-light"
        width="47px"
        style={{
          bottom: "150px",
          left: "119.2%",
        }}
      />
      <DecorationIcon
        iconId={"circle"}
        className="text-secondary-light"
        width="32px"
        style={{
          top: "calc(100% + 208px)",
          left: "119.2%",
        }}
      />
    </div>
  );
};

export default MainBannerDecorations;
