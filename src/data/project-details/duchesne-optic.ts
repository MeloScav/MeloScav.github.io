import { IProjectDetails, IProjectImage } from "@/types";

/** Windows on the Duchesne Optic one page, from the top down. */
const screens: Array<IProjectImage> = [
  "Bannière et choix de la marque",
  "Présentation de la marque Oxibis",
  "Les modèles de lunettes",
  "Fin des modèles et formulaire de contact",
  "Formulaire de contact et footer",
].map((alt, index) => ({
  src: `/images/projects/duchesne-optic/screen-${index + 1}.jpg`,
  alt: `Duchesne Optic : ${alt}`,
  width: 998,
  height: 786,
}));

// First pass converted from the detail page on main, to review.
export const duchesneOptic: IProjectDetails = {
  summary: "Refonte graphique du site Duchesne Optic.",
  banner: {
    src: "/images/projects/duchesne-optic/banner.jpg",
    alt: "Bannière de la homepage Duchesne Optic SA",
    width: 2400,
    height: 1123,
  },
  sections: [
    {
      title: "Débrif",
      layout: "split",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "**Refonte graphique** du site d'une entreprise Belge active dans le **monde de l’optique Belgo-Luxembourgeois**.",
            "L'objectif était de **simplifier le site** tout en le rendant **plus moderne**. Il a été transformé en une **One Page** permettant de **rapidement choisir une marque** et de visualiser les différentes lunettes proposées par celle-ci.",
            "Ce site propose des lunettes à des **professionnels** qui doivent pouvoir voir rapidement ce qui est proposé pour ensuite **contacter l'entreprise**.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/duchesne-optic/brand-section.jpg",
              alt: "Section de choix de la marque, ici Oxibis, sur le site Duchesne Optic",
              width: 2400,
              height: 1077,
            },
          ],
        },
        {
          type: "gallery",
          paragraphs: [
            "Une **One Page** épurée pour **découvrir les marques** et **contacter l’entreprise** en un minimum de clics.",
          ],
          // Read row by row on a 5 x 3 grid, the text takes the middle cell.
          images: [
            screens[0], screens[1], screens[2], screens[3], screens[4],
            screens[2], screens[4], screens[0], screens[1],
            screens[3], screens[0], screens[1], screens[4], screens[2],
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
              family: "Josefin Sans",
              paragraphs: [
                "Pour les titres, j’ai choisi d’utiliser la police **Josefin Sans**.",
                "C'est une police sans empattement, avec du **caractère**, **très lisible**, qui permet de donner un côté **moderne** au site.",
                "Cette police est une **Google fonts**, elle est accessible depuis n'importe quel navigateur et visible par la plupart des utilisateurs, quel que soit leur système d'exploitation, la police n'aura pas besoin d'être téléchargée.",
              ],
            },
            {
              title: "Les textes",
              family: "Ubuntu",
              paragraphs: [
                "Pour les textes, j’ai utilisé la police **Ubuntu**.",
                "C’est une police sans empatement qui permet de donner un côté **moderne** au site. C'est une police **très lisible** qui peut être lu facilement quelque soit la résolution de l'écran.",
                "Cette police est une **Google fonts**, elle est accessible depuis n'importe quel navigateur et visible par la plupart des utilisateurs, quel que soit leur système d'exploitation, la police n'aura pas besoin d'être téléchargée.",
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
                hex: "#AF0000",
              },
              {
                name: "Texte",
                hex: "#2E2020",
              },
              {
                name: "Title",
                hex: "#610000",
              },
              {
                name: "White",
                hex: "#FAFAFA",
              },
            ],
          ],
          paragraphs: [
            "Pour la **couleur primaire**, j'ai choisi d'utiliser un rouge très saturé qui permet de donner plus d'énergie au site, elle fait également référence à la **passion** car Duchesne Optic est une entreprise familiale passionnée par le monde de l'optique depuis 1984.",
            "Pour le texte, j'ai utilisé un gris foncé légèrement saturé de la **couleur primaire**.",
            "Pour les titres, j'ai utilisé un rouge très foncé pour ajouter un peu plus de **peps** et **guider l'oeil de l'utilisateur**.",
            "Pour la couleur blanche, j'ai utilisé un blanc très légèrement saturé avec la **couleur primaire**.",
          ],
        },
      ],
    },
    {
      title: "Le design",
      blocks: [
        {
          type: "images",
          images: [
            {
              src: "/images/projects/duchesne-optic/banner.jpg",
              alt: "Bannière de la homepage Duchesne Optic SA",
              width: 2400,
              height: 1123,
            },
            {
              src: "/images/projects/duchesne-optic/brand-section.jpg",
              alt: "Section de choix de la marque, ici Oxibis, sur le site Duchesne Optic",
              width: 2400,
              height: 1077,
            },
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Le public cible est composé de **professionnel de l'optique** cherchant des **fournisseurs de lunettes**.",
            "Duchesne Optic a l'avantage d'avoir déjà des **clients habituelle** qui souhaitent principalement voir rapidement les **nouvelles marques ou lunettes** disponibles chez eux.",
            "**L'action principale** du site est le fait de contacter l'entreprise, j'ai donc disposée un **bouton primaire** directement dans la navbar qui sera en **position fixe**.",
            "La première section permet d'**introduire l'entreprise** et de rapidement savoir sur quel type de site on se trouve (un site proposant des lunettes), j'y ai ajouté un **Call To Action** permettant d'**inciter l'utilisateur à contacter l'entreprise**.",
            "La deuxième section de mon parcours utilisateur est là pour lui permettre de **choisir une marque**, d'avoir une courte explication de celle-ci et puis de voir les différentes lunettes proposées. Cette section arrive directement en **deuxième position** car c'est la raison pour laquelle l'utilisateur visite le site, il doit donc y avoir rapidement accès pour diminuer le temps nécessaire vers l'action désirée. Pour cette section, j'ai choisi **scroll infini** car nous sommes dans une expérience de découverte des produits sans recherche particulière mais qui reste cependant contrôlé à l'aide d'un **bouton d'action**, celui-ci permet à l'utilisateur de mieux maîtriser ce qu'il souhaite voir.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/duchesne-optic/models.jpg",
              alt: "Section « Les modèles » du site Duchesne Optic",
              width: 2400,
              height: 1495,
            },
          ],
        },
        {
          type: "text",
          paragraphs: [
            "A la fin de mon parcours utilisateurs, on trouve la **section de contact** permettant de contacter l'entreprise, ce qui est mon action principale. Il me permet, en fin de parcours, d'inciter l'utilisateur à contacter l'entreprise.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/duchesne-optic/duchesne-optic-design-second-part.jpg",
              alt: "Duchesne Optic",
              width: 1920,
              height: 1164,
            },
          ],
        },
      ],
    },
  ],
};
