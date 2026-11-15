import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "react-bootstrap";
import {
  getProjectById,
  getProjectDetails,
} from "@/app/services/get-projects";
import { getCategoryById } from "@/app/services/get-categories";
import { IProjectDetails } from "@/types";
import DecorationColumns from "@/app/components/decorations/decoration-columns";
import OtherProjects from "@/app/components/other-projects";
import ContactCta from "@/app/components/contact-cta";
import ProjectHeader from "@/app/projects/details/project-header";
import ProjectImage from "@/app/projects/details/project-image";
import ProjectSection from "@/app/projects/details/project-section";

interface IProjectPageProps {
  params: {
    category: string;
    projectId: string;
  };
}

export const generateMetadata = ({ params }: IProjectPageProps): Metadata => {
  const project = getProjectById(params.projectId);

  return {
    title: project?.name ?? "Projet",
    description: project?.shortDescription ?? project?.description,
  };
};

const ProjectPage = (props: IProjectPageProps) => {
  const { params } = props;
  const project = getProjectById(params.projectId);
  const category = project && getCategoryById(project.category);

  if (!project || !category || category.id.toLowerCase() !== params.category) {
    notFound();
  }

  /** Projects not described yet show their card content as a short page. */
  const details: IProjectDetails = getProjectDetails(project.id) ?? {
    summary: project.shortDescription,
    banner: {
      src: project.thumbSrc,
      alt: project.name,
      width: 1512,
      height: 725,
    },
    sections: [
      {
        title: "Débrif",
        layout: "split",
        blocks: [{ type: "text", paragraphs: [project.description] }],
      },
    ],
  };

  return (
    <>
      <div className="project-details overflow-x-clip position-relative">
        <div className="project-details__columns">
          <Container className="h-100">
            {/* Same content box as the home page, so the lines line up. */}
            <div className="position-relative h-100">
              <DecorationColumns />
            </div>
          </Container>
        </div>

        <Container className="project-details__header">
          <ProjectHeader
            project={project}
            category={category}
            summary={details.summary}
          />
          <ProjectImage className="mt-5" image={details.banner} priority />
        </Container>

        {details.sections.map((section, index) => (
          <ProjectSection key={index} section={section} index={index} />
        ))}
      </div>

      <OtherProjects category={project.category} />
      <ContactCta />
    </>
  );
};

export default ProjectPage;
