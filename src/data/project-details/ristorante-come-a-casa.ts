import { IProjectDetails, IProjectImage } from "@/types";

/** Windows on the restaurant pages, for the gallery. */
const screens: Array<IProjectImage> = [
  "Homepage",
  "La carte",
  "Une entreprise familiale",
  "A propos",
  "La galerie",
  "Photos de la galerie",
  "La situation et le contact",
  "Contact et footer",
].map((alt, index) => ({
  src: `/images/projects/ristorante-come-a-casa/screen-${index + 1}.jpg`,
  alt: `Il ristorante come a casa : ${alt}`,
  width: 998,
  height: 786,
}));

// First pass converted from the detail page on main, to review.
export const ristoranteComeACasa: IProjectDetails = {
  summary: "Création d'un design pour un restaurant italien fictif.",
  banner: {
    src: "/images/projects/ristorante-come-a-casa/banner.jpg",
    alt: "Homepage du site Il ristorante come a casa",
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
            "Pour un **restaurant italien fictif**, j'ai décidé de réaliser un design à la fois **sobre et élégant**.",
            "L'objectif était de créer le site entier en gardant un **côté assez sombre** tout en restant **simple et moderne**. Il devait contenir une page pour **sa carte**, une **page à propos**, une page pour la **galerie** et une **page de contact**.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/ristorante-come-a-casa/menu-section.jpg",
              alt: "Section du menu « Eveillez vos papilles grâce à nos différents plats »",
              width: 2400,
              height: 1123,
            },
          ],
        },
        {
          type: "gallery",
          paragraphs: [
            "Un site **sobre et élégant** qui donne envie de **découvrir la carte** et de **passer à table**.",
          ],
          // Read row by row on a 5 x 3 grid, the text takes the middle cell.
          images: [
            screens[0], screens[1], screens[2], screens[3], screens[4],
            screens[5], screens[6], screens[7], screens[0],
            screens[3], screens[4], screens[1], screens[5], screens[2],
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
              specimen: {
                src: "/images/projects/ristorante-come-a-casa/details-font-title.svg",
                alt: "Les titres",
                width: 343,
                height: 239,
              },
              paragraphs: [
                "Pour les titres, j’ai choisi d’utiliser la police **Century Schoolbook**.",
                "C'est une police avec empattement qui permet de donner un côté **intemporel**, **professionnel** et **sophistiqué** au site.",
              ],
            },
            {
              title: "Les textes",
              family: "Baloo Da 2",
              paragraphs: [
                "Pour les textes, j’ai utilisé la police **Baloo Da 2**.",
                "C’est une police sans empatement qui permet de donner un côté **moderne** au site. C'est une police **très lisible** qui peut être lu facilement quelque soit la résolution de l'écran.",
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
                hex: "#B31828",
              },
              {
                name: "Secondary",
                hex: "#221C1C",
              },
              {
                name: "White",
                hex: "#FFFBFB",
              },
            ],
          ],
          paragraphs: [
            "Pour la **couleur primaire**, j'ai choisi d'utiliser un rouge légèrement foncé pour faire référence au **drapeau italien** mais également car cette couleur est synonyme d'énergie, de **passion** et d'amour, ce qui correspont parfaitement à la cuisine italienne.",
            "Pour la **couleur secondaire**, j'ai utilisé un rouge presque noir et peu saturé. Celle-ci permet de donner un côté **sophistiqué** au site.",
            "Pour la couleur blanche, j'ai utilisé un blanc légèrement saturé avec la **couleur primaire**.",
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
            "Pour le logo, j'ai dessiné un **chapeau de chef cuisinier** aux couleurs du **drapeau italien**, j'ai ensuite mis le **texte principal en blanc**, pour qu'il resorte bien sur le fond foncé, et le **texte secondaire en rouge**.",
          ],
        },
        {
          type: "images",
          logo: true,
          images: [
            {
              src: "/images/projects/ristorante-come-a-casa/ristorante-logo.svg",
              alt: "Icon beer",
              width: 179,
              height: 58,
            },
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
              src: "/images/projects/ristorante-come-a-casa/design-1.jpg",
              alt: "Design de la homepage et de la section du menu",
              width: 2400,
              height: 2473,
            },
            {
              src: "/images/projects/ristorante-come-a-casa/design-2.jpg",
              alt: "Design des sections à propos et galerie",
              width: 2400,
              height: 2395,
            },
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Mon public cible, ce sont les personnes désireuses de manger, **fans de cuisine italienne**, en recherche d'un restaurant ou qui veulent **voyager grâce à la cuisine**.",
            "Mon objectif est de **retenir l’attention du visiteur** et de lui donner envie de **découvrir la carte** ainsi que de venir déguster les différents plats. J'avais également pour objectif de transmettre le côté **sophistiqué et passionné** du restaurant et de la cuisine à travers le design. Pour ce faire, je suis partie sur un **rouge sombre et peu saturé**, presque noir, que j'ai utilisé en background en y ajoutant des **formes obliques**.",
            "En plus de ce noir légèrement rouge, j'ai parsemé le design de blanc pour ajouter un côté **minimaliste et moderne**.",
            "J’ai construit la page pour que le regard du visiteur se pose d’abord sur le **centre du banner**, où il y a le titre, une phrase d'accroche ainsi que **deux boutons** invitant aux actions voulues. Son regard se pose ensuite sur l'icône permettant de signaler au visiteur **qu'il faut scroller** pour finir par aller sur le logo puis le menu.",
            "Le visiteur a directement les **informations importantes** en ouvrant le site et il peut facilement voir le menu ou prendre contact.",
            "Pour la seconde section, le regarde va sur les images, de la gauche vers la droite, puis sur le titre ainsi que la phrase d'accroche. Cette partie permet de mettre en évidence **chacune des sections du menu** et permet également au visiteur d'aller voir directement ce qui l'intéresse.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/ristorante-come-a-casa/ristorante-design-first-part.jpg",
              alt: "Il ristorante come a casa",
              width: 1632,
              height: 2476,
            },
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Les **2 prochaines sections** servent à donner envie de visiter chacunes des pages correspondantes. L'oeil du visiteur est guidé pour aller **à gauche puis au centre** grâce aux textes et images qui changent de place, ceci **évite la redondance** et permet de concerver l'envie de lire chacune d'entre elles. Un bouton d'action est également présent pour inviter le visiteur à cliquer.",
            "La dernière section est un **call-to-action**. Composé d'un titre, d'une phrase d'accroche ainsi que d'un bouton d'appel à l'action, il permet de donner envie de contacter le restaurant et de leur rendre visite.",
            "Pour le footer, l'oeil va aller de la gauche vers la droite. On voit d'abord les informations importantes comme **l'adresse, le numéro de téléphone et l'email**, ensuite les horaires pour finir avec le menu de navigation du site.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/ristorante-come-a-casa/ristorante-design-second-part.jpg",
              alt: "Il ristorante come a casa",
              width: 1632,
              height: 1654,
            },
          ],
        },
      ],
    },
  ],
};
