import { Container } from "react-bootstrap";
import TitleDecorated from "./decorations/title-decorated";
import TextHighlighted from "./decorations/text-highlighted";
import MainBannerDecorations from "./decorations/main-banner-decorations";
import ScrollDownBtn from "./scroll-down-btn";
import DecorationColumns from "./decorations/decoration-columns";

const MainBanner = () => {
  return (
    <Container className="main-banner-wrapper">
      <div className="main-banner">
        <DecorationColumns />

        <div className="main-banner__content mw-1000 mx-auto">
          <MainBannerDecorations />

          <TitleDecorated className="text-center text-black">
            Méloé Scavezzoni
          </TitleDecorated>
          <p className="fs-5 mt-6">
            <strong>
              <span className="text-secondary">UX</span> /{" "}
              <span className="text-primary">UI</span> designeuse
            </strong>{" "}
            et développeuse web frontend, mon objectif est de créer des designs
            au <strong>pixel perfect</strong> qui reflètent parfaitement la
            vision du client tout en maintenant une{" "}
            <TextHighlighted className="fw-bold">
              expérience utilisateur
            </TextHighlighted>{" "}
            optimale.
          </p>
        </div>

        <ScrollDownBtn />
      </div>
    </Container>
  );
};

export default MainBanner;
