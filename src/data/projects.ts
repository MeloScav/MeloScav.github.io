import { CategoryType, IProject } from "@/types";

// Replace ’ with &apos;

export const projects = (
  limit?: number,
  order: "asc" | "des" | "random" = "des",
  categoriesToExclude?: Array<keyof typeof CategoryType>
): Array<IProject> => {
  const projectsList = [
    {
      id: "audit-ux",
      name: "Audit UX",
      category: CategoryType.DESIGN,
      description:
        "Audit UX d&apos;une landing page d&apos;e-shop pour un magasin de thé avec une contre proposition designé",
      shortDescription: "Audit UX d&apos;une landing page d&apos;e-shop.",
      thumbSrc: "/images/projects/audit-ux/thumb.jpg",
      tags: ["Audit UX", "UX", "UI", "Design"],
    },
    {
      id: "audit-ux1",
      name: "Audit UX",
      category: CategoryType.DESIGN,
      description:
        "Audit UX d&apos;une landing page d&apos;e-shop pour un magasin de thé avec une contre proposition designé",
      shortDescription: "Audit UX d&apos;une landing page d&apos;e-shop.",
      thumbSrc: "/images/projects/audit-ux/thumb.jpg",
      tags: ["Audit UX", "UX", "UI", "Design"],
    },
    {
      id: "audit-ux2",
      name: "Audit UX",
      category: CategoryType.DESIGN,
      description:
        "Audit UX d&apos;une landing page d&apos;e-shop pour un magasin de thé avec une contre proposition designé",
      shortDescription: "Audit UX d&apos;une landing page d&apos;e-shop.",
      thumbSrc: "/images/projects/audit-ux/thumb.jpg",
      tags: ["Audit UX", "UX", "UI", "Design"],
    },
  ];

  return projectsList;
};

// Replace ’ with &apos;
