import { IProjectDetails } from "@/types";

// First pass converted from the detail page on main, to review.
export const car3d: IProjectDetails = {
  summary: "Création d'une voiture 3D roulant sur une route ainsi que l'animation de celle-ci.",
  banner: {
    src: "/images/projects/car3d/car3d-banner.jpg",
    alt: "Voiture 3D",
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
            "Réalisation d'une **voiture en 3d** sur **Spline** ainsi qu'une animation de celle-ci roulant sur une route et **renversant des cubes**.",
          ],
          link: {
            href: "https://my.spline.design/route-e822e87a482549be0885b20a97edbd1b/",
            label: "Voir le site",
          },
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/car3d/road-gif-MeloScav.mp4",
              alt: "Voiture 3D",
              width: 1600,
              height: 820,
            },
          ],
        },
      ],
    },
  ],
};
