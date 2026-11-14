import { CategoryType, IProject } from "@/types";

import { projects } from "@/data/projects";

export const getProjects = ({
  limit,
  order = "reverse",
  category,
  categoriesToExclude,
  projectsToExclude,
}: {
  limit?: number;
  order?: "reverse" | "random";
  category?: keyof typeof CategoryType;
  categoriesToExclude?: Array<keyof typeof CategoryType>;
  projectsToExclude?: Array<string>;
} = {}): Array<IProject> => {
  let projectsToReturn = [...projects];

  if (category) {
    projectsToReturn = projectsToReturn.filter(
      (project) => project.category === category
    );
  }

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
    projectsToReturn = shuffle(projectsToReturn);
  }

  return limit ? projectsToReturn.slice(0, limit) : projectsToReturn;
};

/**
 * Random projects taken in turn from each category, so a small category still
 * shows up next to a big one instead of being drowned by chance.
 */
export const getMixedProjects = ({
  categories,
  limit,
}: {
  categories: Array<keyof typeof CategoryType>;
  limit: number;
}): Array<IProject> => {
  const pools = categories.map((category) =>
    shuffle(projects.filter((project) => project.category === category))
  );
  const mixed: Array<IProject> = [];

  while (mixed.length < limit && pools.some((pool) => pool.length)) {
    for (const pool of pools) {
      const project = pool.shift();

      if (project && mixed.length < limit) {
        mixed.push(project);
      }
    }
  }

  return mixed;
};

const shuffle = <T>(items: Array<T>): Array<T> => {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

export const getProjectById = (id: string): IProject | undefined =>
  projects.find((project) => project.id === id);
