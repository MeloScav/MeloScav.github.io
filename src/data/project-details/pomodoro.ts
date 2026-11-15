import { IProjectDetails } from "@/types";

// First pass converted from the detail page on main, to review.
export const pomodoro: IProjectDetails = {
  summary: "Réalisation d'un pomodoro en REACT permettant de gérer son temps de travail et de pause.",
  banner: {
    src: "/images/projects/pomodoro/bg-banner-pomodoro.jpg",
    alt: "Pomodoro",
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
            "Dans le cardre de ma formation en tant que **Frontend Web Developer** chez **Becode**, j'ai réalisé un Pomodoro avec pour principal objectif d'en apprendre plus sur **REACT et ses hooks**.",
            "Grâce à ce Pomodoro, vous pouvez enfin gérer facilement vos **temps de travail et de pause**. Il suffit juste d'y entrer la **durée de travail** désirée puis, quand vous y serez invité, la **durée de la pause** souhaitée.",
          ],
          link: {
            href: "https://pomodoro-ms.netlify.app/",
            label: "Voir le site",
          },
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/pomodoro/react-pomodoro-modal.jpeg",
              alt: "Pomodoro",
              width: 1234,
              height: 552,
            },
          ],
        },
      ],
    },
    {
      title: "Le choix des polices",
      blocks: [
        {
          type: "fonts",
          fonts: [
            {
              title: "Les titres et textes",
              family: "Arial",
              paragraphs: [
                "J'ai utilisé la police **Arial** pour l'ensemble du pomodoro.",
                "Elle donne un côté assez **neutre et minimaliste** au site.",
              ],
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
                name: "Dark rose",
                hex: "#AC7B7D",
              },
              {
                name: "Dark blue",
                hex: "#34435E",
              },
              {
                name: "Pure white",
                hex: "#FFFFFF",
              },
            ],
          ],
          paragraphs: [
            "En **couleur primaire**, j'ai décidé d'utiliser une couleur rose foncé tirant sur le rouge.",
            "En **couleur secondaire**, j’ai choisi un bleu foncé qui permet notamment de faire resortir la **couleur primaire**. Il donne également un côté **sérieux** et **calme**.",
            "Pour le texte, j'ai utilisé **du blanc**.",
          ],
        },
      ],
    },
  ],
};
