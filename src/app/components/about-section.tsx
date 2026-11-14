import classNames from "@/utils/classNames";
import { Stack } from "react-bootstrap";
import ButtonDecoration from "./decorations/button-decoration";
import AboutDecorations from "./decorations/about-decorations";
import DecorationIcon from "./decorations/decoration-icon";
import { CV_PATH, MAIL } from "@/data/constants";

interface IAboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<IAboutSectionProps> = (props) => {
  const { className } = props;

  return (
    <Stack
      gap={4}
      className={classNames(
        "about-section position-relative full-height-section justify-content-start",
        className
      )}
    >
      <AboutDecorations />

      <Stack gap={6} className="flex-grow-0">
        <h4 className="h2 text-black position-relative align-self-start">
          A propos
          <DecorationIcon
            iconId={"decoration-arrow"}
            className="text-gray-300 d-none d-lg-block"
            width="34px"
            height="113px"
            style={{
              top: "calc(100% - 32px)",
              right: "calc(100% + 47px)",
            }}
          />
        </h4>
        <div className="fs-6 mw-1000">
          <p className="m-0">
            <strong>UX / UI designeuse</strong> et développeuse web frontend, je
            suis passionnée par tout ce qui est visuel. Mon objectif est de
            créer une <strong>expérience utilisateur optimale</strong>,
            simplifier et combiner différents univers pour les rendre
            compréhensible et accessible à tous les utilisateurs finaux, tout en
            reflétant l’univers du client.
          </p>
          <p className="m-0">
            <strong>Autodidacte</strong>, <strong>curieuse</strong> et{" "}
            <strong>motivée</strong>, j’ai envie d’apprendre des nouvelles
            choses et de perfectionner mes connaissances.
          </p>
        </div>
      </Stack>
      <ButtonDecoration className="flex-grow-0">
        <a href={CV_PATH} className="btn btn-outline-primary" download>
          Télécharger mon CV
        </a>
        <a href={`mailto:${MAIL}`} className="btn btn-primary">
          Me contacter
        </a>
      </ButtonDecoration>
    </Stack>
  );
};

export default AboutSection;
