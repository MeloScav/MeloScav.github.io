import { IProjectDetails } from "@/types";

// First pass converted from the detail page on main, to review.
export const rassala: IProjectDetails = {
  summary: "Création d'une application mobile de laverie",
  banner: {
    src: "/images/projects/rassala/banner.jpg",
    alt: "Rassala, laverie connectée. Réservez, gagnez, partagez, soyez récompensé !",
    width: 2400,
    height: 1350,
  },
  sections: [
    {
      title: "Débrif",
      layout: "split",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Pour mon **examen du cours d'UX / UI Design** : prototypes, UX Architecture, UX Design et Workshop, j'ai réalisé une **application mobile Android** pour une **laverie connectée**.",
            "Pour cette application, j'ai réalisé diverses **interviews**, fait des **personas** sur base de ces interviews, réalisé une **Empathy Map**, une **Experience Map**, une **User Journey Map**, un **User Flow** et un **Site Map**.",
            "Je suis ensuite partie sur la réalisé des différents **Wireframes basse et medium fidelité** pour ensuite faire le design. Une fois mon design fini pour mon flux principale, j'ai réalisé quelques **Users Tests**. J'ai ensuite fait une **présentation de l'application** comme si je la présentais à un client ou à des investisseurs.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/rassala/rassala-presentation.jpg",
              alt: "Rassala",
              width: 1920,
              height: 1080,
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
              title: "Les titres",
              family: "Roboto",
              paragraphs: [
                "Pour les titres, la police **Roboto** est utilisée.",
                "Il s'agit de la police utilisée dans les Guidelines **Material Design** pour Android.",
              ],
            },
            {
              title: "Les textes",
              family: "Roboto",
              paragraphs: [
                "Pour le texte, la police **Roboto** a été utilisée.",
                "Il s'agit de la police utilisée dans les Guidelines **Material Design** pour Android.",
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
                name: "Primary",
                hex: "#205DDF",
              },
              {
                name: "Secondary",
                hex: "#DFA220",
              },
              {
                name: "Black",
                hex: "#131416",
              },
            ],
          ],
          paragraphs: [
            "La **couleur primaire** est un bleu légèrement foncé pour améliorer la **lisibilité** et le **contraste** de cette couleur avec le blanc. En plus d'être une couleur particulièrement visible et attirant l'oeil, le bleu permet de donner un sentiment de **sécurité**, de **confiance** et de **professionnalisme**. Celui-ci a notamment été utiliser pour faire référence à **l'eau**.",
            "La **couleur secondaire** est un jaune légèrement foncé pour améliorer la **lisibilité** et le **contraste** de cette couleur avec le blanc.",
            "Les **nuances de gris** du site, allant du noir vers le blanc, ont été faites à partir de la **couleur primaire**, c'est-à-dire que chacune de ces nuances est légèrement saturé avec du bleu.",
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
            "Pour mon application de laverie, j'ai créé un **logo** de manière assez minimaliste pour qu'il soit **facile à retenir, facile à dessiner de mémoire et visible en tout petit**.",
            "Ce logo représente le dessin d'une **machine à laver avec son hublot**. A côté, on peut y voir le nom de la marque \"Rassala\".",
          ],
        },
        {
          type: "images",
          logo: true,
          images: [
            {
              src: "/images/projects/rassala/rassala-logo.svg",
              alt: "Icon de l'application Rassale. Ce logo représente le dessin d'une machine à laver avec son hublot.",
              width: 156,
              height: 27,
            },
          ],
        },
      ],
    },
    {
      title: "Le design",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Les clients cibles sont les **jeunes commençant la vie active**, les **étudiants**, les personnes en Eramus, les **retraités** et les occasionnels.",
            "Pour ce design, je me suis efforcée de **régler les différents problèmes** rapportés lors que mes interviews, les **pains points** de mes personas, et d'**améliorer l'expérience des utilisateurs** avec les laveries.",
            "Le design est **simple et minimaliste**, tout en respectant les **Guidlines d'Android**.",
          ],
        },
        {
          type: "images",
          phone: true,
          images: [
            {
              src: "/images/projects/rassala/onboarding-1.jpg",
              alt: "Premier écran de l'onboarding de Rassala, « Dis nous ce que tu veux faire »",
              width: 1080,
              height: 2400,
            },
          ],
        },
      ],
    },
  ],
};
