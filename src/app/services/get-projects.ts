import { CategoryType, IProject } from "@/types";

import { projects } from "@/data/projects";

export const getProjects = ({
  limit,
  order = "reverse",
  categoriesToExclude,
  projectsToExclude,
}: {
  limit?: number;
  order?: "reverse" | "random";
  categoriesToExclude?: Array<keyof typeof CategoryType>;
  projectsToExclude?: Array<string>;
} = {}): Array<IProject> => {
  let projectsToReturn = [...projects];

  if (categoriesToExclude) {
    projectsToReturn = projectsToReturn.filter(
      (project) => !categoriesToExclude.includes(project.category)
    );
  }

  if (projectsToExclude) {
    projectsToReturn = projectsToReturn.filter(
      (project) => !projectsToExclude.includes(project.id)
    );
  }

  if (order === "reverse") {
    projectsToReturn.reverse();
  }

  if (order === "random") {
    projectsToReturn.sort(() => Math.random() - 0.5);
  }

  return limit ? projectsToReturn.slice(0, limit) : projectsToReturn;
};
