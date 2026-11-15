import { IProjectDetails } from "@/types";

// First pass converted from the detail page on main, to review.
export const pacifism: IProjectDetails = {
  summary: "Réalisation d'une affiche sur un mouvement idéologique, le pacifisme.",
  banner: {
    src: "/images/projects/pacifism/bg-banner-pacifism.jpg",
    alt: "Ne faites pas vomir votre Terre",
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
            "Dans le cadre d’un **cours de créativité visuelle**, j'ai dû réaliser une **affiche** sur un **mouvement politique ou idéologique**.",
            "Après quelques rapides recherches sur ces sujets, j'ai décidé d'effectuer mon travail sur le **pacifisme**.",
            "Avant de m'y mettre, j'ai d'abord réalisé un **moodboard** ainsi que des recherches pour décrypter les **pricipaux codes** relatifs à cette idéologie. Ensuite, je me suis mise au travail !",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/pacifism/affiche-pacifisme.jpg",
              alt: "Ne faites pas vomir votre Terre",
              width: 596,
              height: 842,
            },
          ],
        },
      ],
    },
  ],
};
