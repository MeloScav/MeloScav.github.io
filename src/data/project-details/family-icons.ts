import { IProjectDetails } from "@/types";

// First pass converted from the detail page on main, to review.
export const familyIcons: IProjectDetails = {
  summary: "Création de 4 icônes de transport.",
  banner: {
    src: "/images/projects/family-icons/bg-banner-family-icons.jpg",
    alt: "Ensemble d’icônes",
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
            "Dans le cadre d’un cours d'introduction à la **création d'icônes sur Figma**, dans lequel on devait réaliser un ensemble d'icônes, j'ai décidé de prendre **les transports** comme sujet.",
            "J'ai donc réalisé un ensemble d'icônes représentant divers moyens de transport : **la voiture, le bus, le train ainsi que la trottinnette**.",
            "Pour cet exercice, j'ai décidé de rester sur un design assez **simple et neutre**.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/family-icons/icons-family.jpg",
              alt: "Ensemble d’icônes",
              width: 2400,
              height: 1580,
            },
          ],
        },
      ],
    },
    {
      title: "Les icônes",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Les 4 icônes représentent des **moyens de transports courant** : la voiture, le bus, le train et la trottinette.",
            "Elles sont toutes composées de **formes géométriques** avec un style simple.",
          ],
        },
        {
          type: "images",
          logo: true,
          images: [
            {
              src: "/images/projects/family-icons/family-icons-set.svg",
              alt: "Ensemble d'icones représentant des moyens de transport",
              width: 211,
              height: 232,
            },
          ],
        },
      ],
    },
  ],
};
