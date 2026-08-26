import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectById } from "@/app/services/get-projects";

interface IProductPageProps {
  params: {
    category: string;
    projectId: string;
  };
}

export const generateMetadata = ({ params }: IProductPageProps): Metadata => {
  const project = getProjectById(params.projectId);

  return {
    title: project?.name ?? "Projet",
    description: project?.shortDescription ?? project?.description,
  };
};

const ProjectPage = (props: IProductPageProps) => {
  const { params } = props;
  const project = getProjectById(params.projectId);

  if (!project || project.category.toLowerCase() !== params.category) {
    notFound();
  }

  return <h1>Projet : {project.name}</h1>;
};

export default ProjectPage;
