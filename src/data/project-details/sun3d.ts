import { IProjectDetails } from "@/types";

// First pass converted from the detail page on main, to review.
export const sun3d: IProjectDetails = {
  summary: "Création d'un soleil entouré de boules.",
  banner: {
    src: "/images/projects/sun3d/sun3d-banner.jpg",
    alt: "Soleil 3D",
    width: 1920,
    height: 1279,
  },
  sections: [
    {
      title: "Débrif",
      layout: "split",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Réalisation d'un **soleil en 3D** entouré de boules, réagissant au **hover de la souris**.",
          ],
          link: {
            href: "https://my.spline.design/untitled-1bebce3464f7f019092b297722e45dea/",
            label: "Voir le site",
          },
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/sun3d/sun-gif-MeloScav.mp4",
              alt: "Soleil 3D",
              width: 1600,
              height: 820,
            },
          ],
        },
      ],
    },
  ],
};
