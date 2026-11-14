import ProjectsSlider from "./projects-slider";
import { getProjects } from "../services/get-projects";

const RecentProjects = () => {
  return (
    <ProjectsSlider
      title="Projets récents"
      intro="Retrouvez ici une sélection de mes derniers projets. N’hésitez pas à consulter également l’ensemble de mes réalisations."
      projects={getProjects({ limit: 6 })}
    />
  );
};

export default RecentProjects;
