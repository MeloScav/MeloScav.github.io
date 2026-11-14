import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Ratio,
  Stack,
} from "react-bootstrap";

import Tag from "../components/tag";
import Image from "next/image";
import { IProject } from "@/types";
import classNames from "@/utils/classNames";
import { getCategoryById } from "../services/get-categories";

interface ICardProjectProps {
  className?: string;
  project: IProject;
}

const CardProject = (props: ICardProjectProps) => {
  const { className, project } = props;
  const category = getCategoryById(project.category);
  const badges = [...(project.tags ?? []), category?.name].filter(
    (badge): badge is string => Boolean(badge)
  );

  return (
    <Card className={classNames("card-project", className)}>
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
        <CardTitle>{project.name}</CardTitle>
        <CardText className="fs-7 mb-3">{project.shortDescription}</CardText>

        <Stack direction="horizontal" gap={2} className="flex-wrap">
          {badges.map((badge) => (
            <Tag
              key={badge}
              variant="gray-400"
              className="text-gray-300"
              outline
              pill
            >
              {badge}
            </Tag>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CardProject;
