import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Ratio,
} from "react-bootstrap";

import Image from "next/image";
import Link from "next/link";
import { IProject } from "@/types";
import classNames from "@/utils/classNames";
import ProjectBadges from "./project-badges";

interface ICardProjectProps {
  className?: string;
  project: IProject;
  /** "light" for cards on a white background, "dark" (default) on gray-800. */
  variant?: "dark" | "light";
}

const CardProject = (props: ICardProjectProps) => {
  const { className, project, variant = "dark" } = props;

  return (
    <Card
      className={classNames(
        "card-project",
        variant === "light" ? "card-project--light" : "",
        className
      )}
    >
      <Ratio aspectRatio="4x3">
        <CardImg
          as={Image}
          className="object-fit-cover"
          variant="top"
          src={project.thumbSrc}
          width={742}
          height={556}
          alt={project.name}
        />
      </Ratio>
      <CardBody>
        <CardTitle>
          <Link
            href={`/projects/${project.category.toLowerCase()}/${project.id}`}
            className="stretched-link text-reset text-decoration-none"
          >
            {project.name}
          </Link>
        </CardTitle>
        <CardText className="fs-7 mb-3">{project.shortDescription}</CardText>

        <ProjectBadges project={project} />
      </CardBody>
    </Card>
  );
};

export default CardProject;
