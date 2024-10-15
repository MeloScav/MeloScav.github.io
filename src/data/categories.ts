import { CategoryType, ICategory } from "@/types";

export const categories: ICategory[] = [
  {
    id: CategoryType.DESIGN,
    description:
      "Ensemble de mes réalisations de design, analyse UX / UI, page web, web application, application mobile, etc.",
    name: "Design",
    thumbSrc: "/images/categories/design/thumb.png",
    tags: ["UX / UI", "Design", "Figma"],
  },
  {
    id: CategoryType.DEVELOPMENT,
    description: "Ensemble de mes réalisations de développement.",
    name: "Development",
    thumbSrc: "/images/categories/development/thumb.svg",
  },
  {
    id: CategoryType.ILLUSTRATION,
    description:
      "Ensemble de mes illustrations, créations de logo, icônes, modèles 3D, etc.",
    name: "Illustration",
    thumbSrc: "/images/categories/illustration/thumb.svg",
  },
];
