import React from "react";

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

interface ICardProjectProps {
  className?: string;
  project: IProject;
}

const CardProject = (props: ICardProjectProps) => {
  const { className, project } = props;

  return (
    <Card className={className}>
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
        <CardText
          className="fs-7 mb-3"
          dangerouslySetInnerHTML={{ __html: project.shortDescription }}
        />

        <Stack direction="horizontal" gap={2}>
          {project.tags?.map((tag, index) => (
            <Tag key={index} variant="primary" outline pill>
              {tag}
            </Tag>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CardProject;
