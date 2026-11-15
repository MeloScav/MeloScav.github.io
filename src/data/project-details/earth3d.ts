import { IProjectDetails } from "@/types";

// First pass converted from the detail page on main, to review.
export const earth3d: IProjectDetails = {
  summary: "Création de la Terre en 3D.",
  banner: {
    src: "/images/projects/earth3d/earth-banner.jpg",
    alt: "Terre 3D",
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
            "Réalisation de **la Terre en 3D** ainsi que son **animation**.",
          ],
          link: {
            href: "https://my.spline.design/earth-bc1fe82f2b1563564c3c6970f3983078/",
            label: "Voir le site",
          },
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/earth3d/earth-gif-MeloScav.mp4",
              alt: "Terre 3D",
              width: 1600,
              height: 820,
            },
          ],
        },
      ],
    },
  ],
};
