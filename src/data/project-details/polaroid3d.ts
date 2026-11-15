import { IProjectDetails } from "@/types";

// First pass converted from the detail page on main, to review.
export const polaroid3d: IProjectDetails = {
  summary: "Création d'un polaroid en 3D.",
  banner: {
    src: "/images/projects/polaroid3d/polaroid-banner.jpg",
    alt: "Polaroid 3D",
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
            "Réalisation d'un **polaroid en 3D** ainsi que l'animation d'une **image sortant de celui-ci**.",
          ],
          link: {
            href: "https://my.spline.design/untitled-ad4233227529004f733f7bcefcbf81f0/",
            label: "Voir le site",
          },
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/polaroid3d/polaroid-gif-MeloScav.mp4",
              alt: "Polaroid 3D",
              width: 1600,
              height: 820,
            },
          ],
        },
      ],
    },
  ],
};
