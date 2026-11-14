import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { getCategoryBySlug } from "@/app/services/get-categories";
import { getProjects } from "@/app/services/get-projects";
import PageHeader from "@/app/components/page-header";
import CardProject from "@/app/projects/card-project";
import DecorationColumns from "@/app/components/decorations/decoration-columns";
import ProjectGridDecorations from "@/app/components/decorations/project-grid-decorations";
import OtherProjects from "@/app/components/other-projects";
import ContactCta from "@/app/components/contact-cta";

interface ICategoryPageProps {
  params: {
    category: string;
  };
}

export const generateMetadata = ({ params }: ICategoryPageProps): Metadata => {
  const category = getCategoryBySlug(params.category);

  return {
    title: category?.name ?? "Projets",
    description:
      category?.description ??
      "Ensemble de mes réalisations de design, développement et illustration.",
  };
};

const CategoryPage = (props: ICategoryPageProps) => {
  const { params } = props;
  const category = getCategoryBySlug(params.category);

  if (!category) {
    notFound();
  }

  const projects = getProjects({ category: category.id });

  return (
    <>
      <div className="overflow-x-clip">
        <Container>
          <Stack className="py-section gap-7 position-relative">
            <DecorationColumns />

            <PageHeader title={category.name}>
              {category.intro ?? category.description}
            </PageHeader>

            <Row className="g-5 position-relative">
              <ProjectGridDecorations />
              {projects.map((project) => (
                <Col key={project.id} xs={12} md={6}>
                  <CardProject project={project} variant="light" />
                </Col>
              ))}
            </Row>
          </Stack>
        </Container>
      </div>

      <OtherProjects category={category.id} />
      <ContactCta />
    </>
  );
};

export default CategoryPage;
