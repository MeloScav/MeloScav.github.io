import { CategoryType } from "@/types";
import ProjectsSlider from "./projects-slider";
import { getMixedProjects } from "../services/get-projects";

interface IOtherProjectsProps {
  /** The category of the current page, its projects are left out. */
  category: keyof typeof CategoryType;
}

const OtherProjects = (props: IOtherProjectsProps) => {
  const { category } = props;
  const otherCategories = (
    Object.keys(CategoryType) as Array<keyof typeof CategoryType>
  ).filter((other) => other !== category);

  return (
    <ProjectsSlider
      title="N’hésitez pas à consulter mes autres projets"
      intro="Retrouvez ici une sélection aléatoire de mes autres projets. N’hésitez pas à consulter également l’ensemble de mes réalisations."
      projects={getMixedProjects({ categories: otherCategories, limit: 6 })}
      excludeCategory={category}
      reveal={false}
    />
  );
};

export default OtherProjects;
