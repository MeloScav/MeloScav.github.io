import { IProjectDetails } from "@/types";

// First pass converted from the detail page on main, to review.
export const piscine: IProjectDetails = {
  summary: "Création d'un design pour une entreprise fictive active dans le domaine des piscines, spas, jacuzzi et saunas.",
  banner: {
    src: "/images/projects/piscine/bg-banner-piscine.jpg",
    alt: "Site piscine",
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
            "Pour une **société fictive** active dans le domaine des **piscines, spas, jacuzzi et saunas**, j'ai réalisé un design à la fois **simple, fluide et moderne**.",
            "Cette entreprise devait avoir une **page de présentation**, une page explicative pour leurs piscines, une page pour leurs abris de piscine, une page pour leurs spas et jacuzzi, une page pour leurs saunas, une page reprennant l'ensemble de leurs produits puis des **pages détails du produit**, une **page galerie** pour montrer leurs réalisations et pour finir, une **page de contact**.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/piscine/piscine-presentation.jpg",
              alt: "Site piscine",
              width: 1007,
              height: 1361,
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
              family: "EB Garamond",
              paragraphs: [
                "Pour les titres, j’ai choisi d’utiliser la police **EB Garamond**.",
                "C'est une police avec empattement qui permet de donner un côté **intemporel** et **professionnel** au site. Elle a aussi un style particulier qui permet de donner du **caractère**.",
              ],
            },
            {
              title: "Les textes",
              family: "Comfortaa",
              paragraphs: [
                "Pour le texte, j’ai utilisé la police **Comfortaa**.",
                "C’est une police sans empatement qui permet de donner un effet de **neutralité** et de **modernité**. C'est une police **très lisible**, elle peut donc être lu facilement quelque soit la résolution de l'écran.",
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
                hex: "#1D8EFB",
              },
              {
                name: "Secondary",
                hex: "#ED7118",
              },
              {
                name: "Title",
                hex: "#1161AF",
              },
              {
                name: "Text",
                hex: "#0F171E",
              },
            ],
            [
              {
                name: "White",
                hex: "#FCFDFF",
              },
            ],
          ],
          paragraphs: [
            "J’ai choisi d’utiliser un bleu assez clair et saturé comme **couleur primaire**. Il permet de donner un côté **calme**, **sérieux** ainsi que d'inspirer de la **confiance** aux visiteurs du site. Celle-ci permet également de faire référence à **l'eau**.",
            "En **couleur secondaire**, j'ai choisi un orange clair et saturé. Il permet de faire référence à la **chaleur**, ce qui vient renforcer le côté été, vacances, soleil, qui sont souvent synonyme de plaisir et de piscine.",
            "Pour les titres, j'ai choisi un bleu foncé que j'utilise avec la **couleur primaire**. Cette double couleur permet la mise en évidence de certains mots.",
            "Pour les textes, j'ai choisi un **bleu peu saturé et très foncé**, presque noir.",
            "Pour le blanc, je l'ai choisi légèrement saturé avec la **couleur primaire**.",
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
            "Mon public cible, ce sont les **personnes désireuses de s'acheter** une piscine, un spa, un jacuzzi ou un sauna.",
            "Mon objectif est de **retenir l’attention du visiteur**, de l’amener à **découvrir les différents produits**, de contacter le magasin, ainsi que de lui donner envie de venir visiter le **show-room**.",
            "Pour cela, j'ai décidé de **faire voyager le visiteur** dès son arrivée sur le site. Une grande image, **vue sous l'eau** d'une piscine, avec une personne en train de nager, l'accueille et permet l'immersion.",
            "L'ensemble du design est composé de **formes fluides et de vagues** pour faire référence à l'eau mais également pour donner un côté **frais, paisible et moderne** au site.",
            "En plus de la couleur primaire, qui permet de donner un côté **calme et sérieux**, le design est parsemé de blanc pour un côté **minimaliste, simple et propre**.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/piscine/piscine-design-first-part.jpg",
              alt: "Site piscine",
              width: 1007,
              height: 1947,
            },
          ],
        },
        {
          type: "text",
          paragraphs: [
            "J’ai construit la page pour que le regard du visiteur se pose d’abord sur le **centre du banner**, où il y a le titre, une phrase d'accroche ainsi que **deux boutons** invitant aux actions voulues. Son regard se pose ensuite sur la barre de navigation.",
            "Le visiteur a directement les **informations importantes** en ouvrant le site et il peut facilement prendre contact, aller voir les produits ou naviguer sur le site.",
            "Pour la seconde section, le regarde va **de la gauche vers la droite**. Ici, la section comporte les éléments que la société souhaite mettre en avant.",
            "Les **4 prochaines sections** servent à donner envie de visiter chacunes des pages correspondantes. L'oeil du visiteur est guidé pour aller **une fois à gauche, une fois à droite** grâce aux textes et images qui changent de place, ceci **évite la redondance** et permet de concerver l'envie de lire chacune d'entre elles. Un bouton d'action est également présent pour inviter le visiteur à cliquer.",
            "Avec la 7ième section, \"**Nos produits**\", le regard du visiteur se **repositionne au centre** de la page. Cette section, composée d'une phrase d'accroche et d'un bouton d'action, est là pour donner envie aux visiteurs de découvrir les différents produits.",
            "La section qui suit donne un apperçu des **différentes réalisations** et invite, grâce à un bouton d'action, à visiter la page contenant l'ensemble des images.",
            "La section des **témoignages** reprend l'ensemble des dires des clients disponibles sur Google. Lire les avis d'autres personnes permet de **renforcer la confiance** envers l'entreprise et de donner envie de sauter le pas pour passer de simple visiteur à client réel.",
            "La dernière section est un simple **call-to-action**. Composé d'un titre, d'une phrase d'accroche ainsi que d'un bouton d'appel à l'action, il permet de donner envie de contacter l'entreprise et de leur rendre visite.",
            "Pour le footer, l'oeil va aller de la gauche vers la droite. On voit d'abord les informations importantes comme **l'adresse, le numéro de téléphone et l'email**, ensuite les horaires pour finir avec le menu de navigation du site.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/piscine/piscine-design-second-part.jpg",
              alt: "Site piscine",
              width: 1007,
              height: 2126,
            },
          ],
        },
      ],
    },
  ],
};
