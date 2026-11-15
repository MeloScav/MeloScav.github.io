import { IProjectDetails } from "@/types";

// First pass converted from the detail page on main, to review.
export const keyboard3d: IProjectDetails = {
  summary: "Création d'un clavier 3d intéractif.",
  banner: {
    src: "/images/projects/keyboard3d/keyboard-banner-MeloScav.jpg",
    alt: "Clavier 3D",
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
            "Réalisation d'un design 3d d'un **clavier intéractif** réagissant au **touche du clavier de l'ordinateur**.",
          ],
          link: {
            href: "https://my.spline.design/untitled-9dde30eacfcb39d33efff142ad865b0a/",
            label: "Voir le site",
          },
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/keyboard3d/keyboard-gif-MeloScav.mp4",
              alt: "Clavier 3D",
              width: 1600,
              height: 820,
            },
          ],
        },
      ],
    },
  ],
};
