import classNames from "@/utils/classNames";
import { Button, Stack } from "react-bootstrap";
import ButtonDecoration from "./decorations/button-decoration";
import { MAIL } from "@/data/constants";

interface IAboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<IAboutSectionProps> = (props) => {
  const { className } = props;

  return (
    <Stack
      gap={4}
      className={classNames(
        "overflow-x-clip full-height-section justify-content-start",
        className
      )}
    >
      <Stack gap={6} className="flex-grow-0">
        <h4 className="h2 text-black">A propos</h4>
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
        <Button variant="outline-primary">Télécharger mon CV</Button>
        <Button href={`mailto:${MAIL}`} variant="primary">
          Me contacter
        </Button>
      </ButtonDecoration>
    </Stack>
  );
};

export default AboutSection;
