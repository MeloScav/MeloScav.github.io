import { IProjectDetails, IProjectImage } from "@/types";

/** Windows on the app screens, for the gallery. */
const screens: Array<IProjectImage> = [
  "Mes cours",
  "Mes cours, avec la fenêtre pour commenter un cours",
  "Fenêtre pour commenter un cours",
  "Mes cours, après un commentaire",
].map((alt, index) => ({
  src: `/images/projects/ifapme/screen-${index + 1}.jpg`,
  alt: `App IFAPME : ${alt}`,
  width: 1029,
  height: 810,
}));

// First pass converted from the detail page on main, to review.
export const ifapme: IProjectDetails = {
  summary: "Création d'une application permettant la communication entre l'IFAPME, les profs et les élèves.",
  banner: {
    src: "/images/projects/ifapme/banner.jpg",
    alt: "Page « Mes cours » de l'App IFAPME",
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
            "Lors d'un **cours d'UX design**, il nous a été demandé d'imaginer une **application** permettant la communication entre **l'IFAPME, les profs et les élèves**.",
            "Après un **brainstorming**, un **Worst Possible Idea** et un **Crazy 8**, j'ai commencer les wireframes. Le but de ces wireframes étaient de représenter la partie permettant de **donner un feedback** aux différents cours reçu.",
            "J'ai ensuite réalisée la partie Design selon une **charte graphique définie**.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/ifapme/ifapme-presentation.jpg",
              alt: "App IFAPME",
              width: 1920,
              height: 1080,
            },
          ],
        },
        {
          type: "gallery",
          paragraphs: [
            "Une application pensée pour **faciliter les échanges** entre l’IFAPME, les profs et les élèves, en quelques clics.",
          ],
          // Read row by row on a 5 x 3 grid, the text takes the middle cell.
          images: [
            screens[0], screens[1], screens[2], screens[3], screens[1],
            screens[2], screens[0], screens[3], screens[0],
            screens[1], screens[3], screens[0], screens[2], screens[1],
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
              family: "Oswald",
              paragraphs: [
                "Pour les titres, la police **Oswald** est utilisée.",
                "Il s'agit d'une police sans empattement, **très lisible**, qui permet de donner un côté **moderne** au site.",
                "Comme il s'agit d'une **Google fonts**, elle est accessible depuis n'importe quel navigateur et visible par la plupart des utilisateurs, quel que soit leur système d'exploitation, la police n'aura pas besoin d'être téléchargée.",
              ],
            },
            {
              title: "Les textes",
              family: "Lato",
              paragraphs: [
                "Pour le texte, la police **Lato** a été utilisée. Il s'agit également d'une **Google Fonts**.",
                "C’est une police très simple, sans empattement, qui permet de donner un côté **moderne** au site. Cette police est également **très lisible** et peut être lu quel que soit la résolution de l'écran.",
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
                hex: "#D61774",
              },
              {
                name: "Secondary",
                hex: "#177F97",
              },
              {
                name: "Black",
                hex: "#272024",
              },
              {
                name: "White",
                hex: "#FFFFFF",
              },
            ],
          ],
          paragraphs: [
            "En **couleur primaire**, un rose est utilisé.",
            "La **couleur secondaire** est un bleu clair.",
            "J'ai utilisé les **nuances de gris** de la **charte graphique** mais j'en ai également rajouté quelques-uns pour avoir 9 **niveaux de gris**. Ceux-ci me permettront de **guider l'oeil de l'utilisateur**, structurer mes informations et ajuster mes **niveaux de lecture**. Je suis partie d'un noir légèrement saturé avec la **couleur primaire** jusqu'au blanc qui avait été définie en blanc pur par la charte graphique.",
            "Le blanc est un blanc pur, défini par la **charte graphique**.",
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
              src: "/images/projects/ifapme/wireframe-1.jpg",
              alt: "Wireframe de la liste des cours de l'App IFAPME",
              width: 2400,
              height: 1350,
            },
            {
              src: "/images/projects/ifapme/wireframe-2.jpg",
              alt: "Wireframe de la fenêtre de feedback d'un cours",
              width: 2400,
              height: 1350,
            },
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Le public cible est composé des **membres de l'IFAPME, les professeurs et les élèves**.",
            "Le but du site est de **simplifier la communication** mais également de résoudre les différents **pains points des personas**.",
            "Il nous a été demandé de nous concentrer principalement sur la **partie feedback des cours**. J'ai donc commencé par faire des **wireframes** de chacun de mes écrans pour ensuite passer au design de ceux-ci.",
            "Le premier écran reprend l'ensemble des cours passé. J'ai placé des **icônes en couleurs**, représentant chacun des cours, pour que l'utilisateur puisse **rapidement reconnaître les différents cours** sans avoir à lire à chaque fois le contenu de chacune des cartes. Mes **niveaux de lectures** ont été construit à l'aide de mes **nuances de gris** mais également à l'aide des tailles de textes qui ont chacune été faites en suivant la **grille des 8 px**, ce qui permet de garder une certaine conhérence dans l'architecture des textes mais également d'**améliorer la lecture** et de donner plus de cohérence au design. **Deux boutons** sont visibles en bas de la carte, permettant à l'utilisateur de rapidement effectué les **deux actions principales** liées aux cours (télécharger les documents et donner un feedback au prof).",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/ifapme/design-1.jpg",
              alt: "Design de la page « Mes cours » de l'App IFAPME",
              width: 2400,
              height: 1350,
            },
            {
              src: "/images/projects/ifapme/design-2.jpg",
              alt: "Design de la fenêtre pour commenter un cours",
              width: 2400,
              height: 1350,
            },
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Le second écran est une **modale permettant de commenter le cours**. Étant donné que nous sommes sur une modale permettant de voir l'écran de base en dessous de celle-ci, **l'utilisateur comprend où il est et ce qu'il faisait**. Par contre, pour lui permettre de correctement identifier de quel cours il s'agit, **diminuer les frustrations et prévenir les erreurs**, j'ai remis les informations principales permettant d'identifier correctement le cours en question. J'invite ensuite l'utilisateur à donner une **cote sous forme d'étoile** et a **laisser un commentaire**.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/ifapme/ifapme-design-second-part.jpg",
              alt: "App IFAPME",
              width: 1920,
              height: 1080,
            },
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Le troisième écran reprend ensuite l'ensemble des cours pour lesquels il n'a pas encore effectué chacune des actions. **Les boutons changent** pour permettre à l'utilisateur de rapidement voir les **actions qui ont déjà été effectuées**.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/ifapme/ifapme-design-third-part.jpg",
              alt: "App IFAPME",
              width: 1920,
              height: 1080,
            },
          ],
        },
      ],
    },
  ],
};
