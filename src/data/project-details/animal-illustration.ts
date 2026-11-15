import { IProjectDetails } from "@/types";

// First pass converted from the detail page on main, to review.
export const animalIllustration: IProjectDetails = {
  summary: "Création d'une illustration minimaliste et dynamique d'animaux.",
  banner: {
    src: "/images/projects/animal-illustration/bg-banner-animal-illustration.jpg",
    alt: "Tableau numérique animaux",
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
            "J'ai réalisé ce **tableau numérique** dans le cadre d'un **cours de créativité visuelle**.",
            "La consigne était simplement de réaliser un tableau en **HTML, CSS** et, optionnellement, JavaScrip, avec des **animations** pour rendre le tableau dynamique.",
            "Pour cette exercice, j'ai décidé de faire **3 illustrations d'animaux** avec un **style minimaliste**, j'utilise une **simple ligne** pour les dessiner.",
            "Pour l'animation, j'ai fait apparaître chaque illustration l'une après l'autre comme si elles étaient **dessinées sous nos yeux** puis **disparaître en sens inverse** pour laisser place à la suivante.",
          ],
          link: {
            href: "https://meloscav.github.io/animal-illustration/",
            label: "Voir le site",
          },
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/animal-illustration/animal-illustration.jpg",
              alt: "Tableau numérique animaux",
              width: 800,
              height: 404,
            },
          ],
        },
      ],
    },
    {
      title: "Le choix des couleurs",
      dark: true,
      blocks: [
        {
          type: "colors",
          colors: [
            [
              {
                name: "Brown",
                hex: "#552516",
              },
              {
                name: "Purple",
                hex: "#74165F",
              },
              {
                name: "Blue",
                hex: "#334867",
              },
            ],
          ],
          paragraphs: [
            "J'ai utilisé un brun foncé car c'est une couleur qui représente la **nature**. Elle donne également une sensation de quelque chose de **noble, robuste, doux et rassurant**.",
            "Le mauve est utilisé pour son côté **enthousiaste**, sa **délicatesse** et sa **positivité**.",
            "Le bleu est utilisé pour la **sérénité** et la **sagesse** qu'il inspire.",
          ],
        },
      ],
    },
  ],
};
