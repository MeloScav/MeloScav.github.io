import { IProjectDetails } from "@/types";

// First pass converted from the detail page on main, to review.
export const beerLovers: IProjectDetails = {
  summary: "Création du design d’un site pour le Summer Beer Lovers’ Festival.",
  banner: {
    src: "/images/projects/beer-lovers/beer-lover-banner.jpg",
    alt: "Beer lovers’ Festival",
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
            "Dans le cadre d’un cours, dans lequel on devait réaliser un design, j’ai choisi de prendre les festivitées du “**Summer Beer Lovers’ Festival**” qui est un festival qui a lieu **chaque été au centre de la ville de Liège**.",
            "Ce festival met en avant les **brasseries artisanales wallones**, avec environ 20 à 30 brasseries participants chaque année et **plus de 100 bières spéciales** à y découvrir.",
            "J’ai redesigner un site pour cet évènement en y transmettant **l’esprit du festival**. Un style **festif, jeune**, quelque chose faisant penser à **l’été** et qui donne envie d’aller s’amuser, tout en mettant la bière en avant.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/beer-lovers/beer-lover-festival-presentation.jpg",
              alt: "Beer lovers’ Festival",
              width: 726,
              height: 769,
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
              family: "Lobster",
              paragraphs: [
                "Pour les titres, j’ai choisi d’utiliser la police **Lobster**.",
                "**Italique** et effet **manuscrit**, elle permet de donner un **effet personnel** au site.",
              ],
            },
            {
              title: "Les textes",
              family: "Quicksand",
              paragraphs: [
                "Pour le texte, j’ai utilisé la police **Quicksand**.",
                "C’est une police sans empatement qui permet de donner un effet **intemporel**.",
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
                name: "Yellow",
                hex: "#FCD673",
              },
              {
                name: "Blue",
                hex: "#01CEE2",
              },
              {
                name: "Red",
                hex: "#FFB198",
              },
              {
                name: "Black",
                hex: "#171612",
              },
            ],
            [
              {
                name: "White",
                hex: "#FFFDF6",
              },
            ],
          ],
          paragraphs: [
            "J’ai choisi d’utiliser une nuance de jaune en **couleur principal**, pour faire référence à la bière mais aussi parce que c’est une nuance qui reste clair et estival, elle permet également de donner un sentiment de **joie** aux visiteurs.",
            "En **couleur secondaire**, j’ai choisi un bleu clair éclatant pour donner un sentiment de **peps**, **festif**, tout en gardant un côté permettant de s’y sentir bien.",
            "En **troisième couleur**, j’ai décidé d’ajouter une petite pointe de rouge-orangé. Il permet de renforcer le côté fête, été, vacance, et un peu plus **chaleureux**.",
            "Pour le texte, j’ai choisi un **noir légérement saturé** avec la couleur principale.",
            "Le blanc utilisé est également **saturé avec un peu de jaune**.",
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
            "J’ai créé une **icône de bière** pour mettre en grand au niveau du **banner principal** ainsi que dans le footer.",
            "Il permet de mettre directement **l’accent sur la bière**, qui est l’élément principal du festival, de montrer au futur participant qu’ils auront de quoi boire et s’amuser, ainsi que de rajouter un **côté plus visuel** au site.",
          ],
        },
        {
          type: "images",
          logo: true,
          images: [
            {
              src: "/images/projects/beer-lovers/icon-beer.svg",
              alt: "Icon beer",
              width: 219,
              height: 269,
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
            "Mon public cible, ce sont les **participants de festivals** ainsi que les **passionnés de bières**.",
            "Mon objectif est de **retenir l’attention du visiteur** ainsi que de l’amener à **s’inscrire pour l’évènement**.",
            "Pour ce faire, je suis restée sur quelque chose d’assez fluide, avec des **formes et des vagues** pour donner un effet jeune, moderne, et de renforcer encore plus le côté festif. J’ai placé un **bouton d’inscription directement visible** sur le banner, en ouvrant le site, il y a également une section d’informations sur le festival, une section pour pour donner envie aux visiteurs de participer avec un bouton pour s’inscrire et une **Google Map** pour visualiser le lieu précis de ces festivités.",
            "J’ai aussi créé une icône de bière qui permet de mettre l’accent sur la bière qui est un **élément essentiel du festival**. Elle donne un côté plus visuel et festif au site.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/beer-lovers/beer-lovers-festival-home.jpg",
              alt: "Beer lovers’ Festival",
              width: 1003,
              height: 1885,
            },
          ],
        },
        {
          type: "text",
          paragraphs: [
            "J’ai construit la page pour que l’oeil du visiteur arrive d’abord sur le **milieu du banner**, où il y a le titre et le bouton d’action puis ensuite sur la bière et en dernier, sur la barre de navigation. Le visiteur a directement les **informations importantes** en ouvrant le site et il peut aisément **s’inscrire à la participation du festival**.",
            "Ensuite, il est dirigé vers une **section contenant des parties d’informations**, un peu plus poussées, sur le festival ainsi que des **boutons d’actions** pour en savoir plus s’il le désire.",
            "Il verra ensuite une section servant à **donner envie au visiteur de participer** à la fête. Elle est composée d’un **texte accrocheur** et d’un bouton d’inscription.",
            "Après cela, son oeil ira vers une Google Map, utile pour **visualiser correctement le lieu des festivités**, puis vers une **phrase d’accroche invitant la personne a venir**.",
            "En dernier lieu, il verra, dans le bas de page, l’icône de bière. Celle-ci permet de **rappeler la fête**, la bière, et faire référence à la phrase d’accroche juste au-dessus invitant le visiteur à venir boire un verre. Son regard se dirigera, après cela, sur les différents liens du site, présent juste en-dessous, ainsi que sur les différents **moyens de contact**.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/beer-lovers/design-beer-lovers-explain.jpg",
              alt: "Beer lovers’ Festival",
              width: 1003,
              height: 1885,
            },
          ],
        },
      ],
    },
  ],
};
