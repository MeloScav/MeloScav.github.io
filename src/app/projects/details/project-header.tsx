import Link from "next/link";
import PageHeader from "@/app/components/page-header";
import ProjectBadges from "../project-badges";
import { ICategory, IProject } from "@/types";

interface IProjectHeaderProps {
  project: IProject;
  category: ICategory;
  summary: string;
}

const ProjectHeader = (props: IProjectHeaderProps) => {
  const { project, category, summary } = props;

  return (
    <PageHeader
      title={project.name}
      eyebrow={
        <Link
          href={`/projects/${category.id.toLowerCase()}`}
          className="d-inline-block fs-7 text-primary text-decoration-none mb-2"
        >
          {category.name}
        </Link>
      }
    >
      <div className="project-split project-split--header mt-7">
        <div>
          <p className="project-header__label text-gray-400 mb-2">
            Description du projet
          </p>
          <p className="fs-5 text-gray-400 m-0">{summary}</p>
        </div>
        <ProjectBadges
          className="align-self-end justify-content-lg-end"
          project={project}
        />
      </div>
    </PageHeader>
  );
};

export default ProjectHeader;
