import { IProjectDetails } from "@/types";

// First pass converted from the detail page on main, to review.
export const switchToggle: IProjectDetails = {
  summary: "Création d'un bouton toggle intéractif changeant de couleur.",
  banner: {
    src: "/images/projects/switch-toggle/switch-toggle-banner.jpg",
    alt: "Switch toggle 3D",
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
            "Réalisation d'un **bouton toggle intéractif** permettant de changer la **couleur d'ambiance**.",
          ],
          link: {
            href: "https://my.spline.design/untitled-8c78d75bf82111f406c402dfb67150fb/",
            label: "Voir le site",
          },
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/switch-toggle/switch-toggle-gif-MeloScav.mp4",
              alt: "Switch toggle 3D",
              width: 1600,
              height: 820,
            },
          ],
        },
      ],
    },
  ],
};
