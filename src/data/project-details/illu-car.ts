import { IProjectDetails } from "@/types";

// First pass converted from the detail page on main, to review.
export const illuCar: IProjectDetails = {
  summary: "Création d’une voiture dans un paysage d’été.",
  banner: {
    src: "/images/projects/illu-car/bg-banner-illu-car.jpg",
    alt: "Illustration vectorielle",
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
            "Dans le cadre d’un **cours sur Illustrator**, j'ai dû créer une illustration avec comme contrainte **une voiture et sa remorque**.",
            "Comme à ce moment, on était dans la période des **fêtes de fin d'année**, j'ai décide de faire une voiture avec sa remorque **remplie de cadeaux**, le tout dans un paysage **paisible et ensoleillé**.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/illu-car/illu-car.jpg",
              alt: "Illustration vectorielle",
              width: 793,
              height: 613,
            },
          ],
        },
      ],
    },
  ],
};
