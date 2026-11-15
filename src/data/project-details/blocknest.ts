import { IProjectDetails, IProjectImage } from "@/types";

/** Windows on the BlockNest homepage, one per section from the top down. */
const homepage: Array<IProjectImage> = [
  "Bannière et avantages",
  "Découvrez nos propriétés",
  "Pourquoi investir avec BlockNest",
  "Comment investir avec BlockNest",
  "Blog et newsletter",
  "FAQ et appel à l’action",
  "Contact et footer",
].map((alt, index) => ({
  src: `/images/projects/blocknest/homepage-${index + 1}.jpg`,
  alt: `Homepage BlockNest : ${alt}`,
  width: 998,
  height: 786,
}));

// First pass converted from the detail page on main, to review.
export const blocknest: IProjectDetails = {
  summary: "Création d'un site vitrine et d'une Web App d'investissement immobilier tokénisé.",
  banner: {
    src: "/images/projects/blocknest/thumb.jpg",
    alt: "BlockNest",
    width: 1920,
    height: 952,
  },
  sections: [
    {
      title: "Débrif",
      layout: "split",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Pour mon **travail de fin d'étude**, j'ai décidé de prendre le sujet de la **blockchain** mais aussi de l'**investissement immobilier** car ce sont deux sujets vastes, souvent compliqués, mal compris et jugés inaccessible par une bonne partie de la population, **surtout chez les jeunes**.",
            "A travers ce projet, j'ai voulu montrer que **l'intégration du web3** dans un environnement existant (l'investissement immobilier) est possible sans perdre la compréhension des utilisateurs finaux vis-à-vis de ce domaine, de montrer que ces deux mondes peuvent être **simple et ouvert à tous** mais aussi montrer que **l'UX / UI Design peut améliorer la compréhension** d'un sujet jugé complexe.",
            "Mon objectif était de proposer une **expérience utilisateur optimale** en améliorant la compréhension des utilisateurs finaux vis-à-vis du web3 mais aussi de l'investissement immobilier grâce à une interface **claire, intuitive et attrayante**.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/blocknest/properties.jpg",
              alt: "Section « Découvrez nos propriétés » de BlockNest",
              width: 2400,
              height: 1456,
            },
          ],
        },
        {
          type: "gallery",
          paragraphs: [
            "Un investissement immobilier **tokénisé**, rendu **simple** et **accessible** à tous, dès 10 €.",
          ],
          // Read row by row on a 5 x 3 grid, the text takes the middle cell.
          images: [
            homepage[0], homepage[1], homepage[2], homepage[3], homepage[4],
            homepage[5], homepage[6], homepage[3], homepage[4],
            homepage[0], homepage[1], homepage[2], homepage[3], homepage[4],
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
              family: "Ruda",
              paragraphs: [
                "Pour les titres, j’ai choisi d’utiliser la police **Ruda** qui est une **Google fonts**.",
                "Il s'agit d'une police sans empattement, **très lisible**, avec du **caractère**, qui permet de donner un côté **moderne** au site. Elle présente également un côté droit et pointu, ce qui représente bien le monde de la Blockchain.",
                "Comme il s'agit d'une **Google fonts**, elle est accessible depuis n'importe quel navigateur et visible par la plupart des utilisateurs, quel que soit leur système d'exploitation, la police n'aura pas besoin d'être téléchargée.",
              ],
            },
            {
              title: "Les textes",
              family: "Ubuntu",
              paragraphs: [
                "Pour les textes, j'ai choisi la police **Ubuntu**, qui est également une **Google fonts**.",
                "Il s'agit d'une police très simple, avec des formes droites et sans empattements. Elle permet de donner un côté **moderne** au site tout en respectant les **codes de la blockchain et de l'investissement immobilier**. Elle est également **très lisible** quelque soit la résolution d'écran.",
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
                hex: "#086812",
              },
              {
                name: "Secondary",
                hex: "#0C79AC",
              },
              {
                name: "Black",
                hex: "#16221C",
              },
            ],
          ],
          paragraphs: [
            "La **couleur primaire** est un vert tirant légèrement vert le bleu. Cette couleur est là pour faire référence à la **nature**, à la **finance**, aux **cryptomonnaies**, à la **croissance**, à la **richesse**, elle est reposante et apaisante.",
            "La **couleur secondaire** est un bleu clair. Cette couleur est souvent utilisée dans le monde de la **finance**, il donne un sentiment de **sécurité**, de **confiance** et de **professionnalisme**.",
            "Les **nuances de gris** du site, allant du noir vers le blanc, ont été faites à partir de la **couleur primaire**, c'est-à-dire que chacune de ces nuances est légèrement saturé avec du vert. Elles me sont utiles autant pour les wireframes que pour le design. Je les ai utilisées notamment pour mes **niveaux de lecture**, pour mettre certaines choses plus en évidence que d'autres et **guider l'oeil de l'utilisateur**.",
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
            "Le nom de l'entreprise est composée de \"Bloc\" représentant un bloc de la Blockchain et de \"Nest\" faisant référence à **un nid d'oiseau** pour évoquer la nature, **l'aspect écologique, le confort, la sécurité**.",
            "Le logo représente **un bloc avec une feuille** qui traverse l'intérieur et ressort pour **former un toit** au-dessus du bloc, créant ensuite une maison. Ce logo permet d'avoir la référence de **la blockchain, de la nature et de l'immobilier**.",
            "J'ai conçu le logo de manière minimaliste pour qu'il soit à la fois **facile à retenir, facile à dessiner de mémoire et visible en tout petit**.",
          ],
        },
        {
          type: "images",
          logo: true,
          images: [
            {
              src: "/images/projects/blocknest/blocknest-logo.svg",
              alt: "Logo de l'entreprise BlockNest, il s'agit d'un carré traversé par une feuille formant ensuite le toit d'une maison.",
              width: 226,
              height: 49,
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
              src: "/images/projects/blocknest/mindmap.jpg",
              alt: "Mindmap du crowdfunding immobilier web3",
              width: 2400,
              height: 1659,
            },
            {
              src: "/images/projects/blocknest/persona.jpg",
              alt: "Persona d'Audrène, étudiante en Master de psychologie",
              width: 2400,
              height: 1659,
            },
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Avant de commencer ce projet, j'ai d'abord réalisé un **Mindmap** pour me permettre de poser mes premières idées pour ensuite débuter mes **recherches et interviews**.",
            "Mes recherches m'ont servi à me renseigner suffisement pour pouvoir poser des **questions pertinentes**, lors de mes interviews, qui me seront utiles lors de mes prochaines étapes de créations, mais également à connaître les différents codes de la blockchain et de l'investissement immobilier car chacun d'eux possèdent des caractéristiques auxquelles les utilisateurs sont habitués.",
            "Mes interviews m'ont ensuite permis d'extraire des informations sur **l'expérience des utilisateurs**, de mieux connaître les utilisateurs, d'avoir une vision plus globale et d'imaginer des solutions différentes. Le fait de directement **cerner les besoins des utilisateurs** permet de limiter le nombre de modifications du projet par la suite, ce qui fera donc un **gain de temps et d'argent**. Grâce à mes **personas**, j'ai pu garder en tête ces besoins et me concentrer sur ce qui est important pour eux.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/blocknest/user-flow.jpg",
              alt: "User flow de l'investissement dans un bien sur BlockNest",
              width: 2400,
              height: 537,
            },
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Avant de me lancer dans les Wireframes, j'ai d'abord réalisé un **User Flow** pour mon flux principal, **l'investissement dans un bien**. Celui ci m'a permis d'exprimer visuellement mes idées, de faire une réunion d'équipe avant de commencer mais également d'avoir un livrable en plus à montrer au client. J'ai pu plus facilement me mettre à la place de l'utilisateur en créant son parcours par rapport à une tâche précise, ce qui permet d'**identifier et résoudre les potentiels problèmes d'UX**, d'optimiser l'expérience, d'améliorer le taux de conversion et le taux de rebond du site.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/blocknest/wireframe.jpg",
              alt: "Wireframe de la homepage BlockNest",
              width: 2400,
              height: 1915,
            },
            {
              src: "/images/projects/blocknest/list-view.jpg",
              alt: "Wireframe de la liste des propriétés de la Web App BlockNest",
              width: 2400,
              height: 1915,
            },
          ],
        },
        {
          type: "text",
          paragraphs: [
            "J'ai ensuite réalisé des **Wireframes Medium Fidelity** pour que cela ne soit pas trop détaillé mais, qu'en même temps, cela puisse ressembler au design final. Ils m'ont permis d'avoir un visuel à montrer au client pour une **première validation** mais également d'avoir une réunion avec les membres de l'équipes pour qu'on puisse se mettre d'accord avec les **Backend** sur les informations nécessaire et avec les **Frontends** sur la complexité du visuel par rapport à la deadline.",
            "Pour la conception UX, j'ai fait en sorte de me concentrer sur **la compréhension, la simplicité** et d'**inspirer la confiance** des utilisateurs finaux. Comme nous sommes sur un site utilisant la Blockchain, j'ai fait en sorte d'expliquer aux utilisateurs chacunes des **actions irréversibles**. J'ai également veillé à utiliser **le moins de jargon possible**.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/blocknest/list-design.jpg",
              alt: "Design de la liste des propriétés de la Web App BlockNest",
              width: 2400,
              height: 1349,
            },
            {
              src: "/images/projects/blocknest/details-design.jpg",
              alt: "Design du détail d'une propriété avec la modale d'investissement",
              width: 2400,
              height: 1349,
            },
          ],
        },
        {
          type: "text",
          paragraphs: [
            "J'ai construit le desing du site vitrine et de la web app pour qu'il reste **simple, minimaliste, compréhensible**, et qu'il incite les utilisateurs à en découvrir d'avantage pour finalement **passer à l'action et investir**",
            "Pour laisser respirer chacunes des sections mais aussi pour donner plus de **clarté et de lisibilité** au site, j'ai décidé de leur donner un espacement haut - bas de **104 px**. Afin de garder une cohérence visuelle, en plus des mêmes espacements entre les sections et entre les mêmes éléments ainsi que les mêmes tailles de textes, j'ai veillé à respecter la **grille des 8 px**.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/blocknest/research.jpg",
              alt: "Page « Mes recherches » de la Web App BlockNest",
              width: 2400,
              height: 1349,
            },
            {
              src: "/images/projects/blocknest/settings.jpg",
              alt: "Page « Mes paramètres » de la Web App BlockNest, onglet KYC",
              width: 2400,
              height: 1349,
            },
          ],
        },
      ],
    },
  ],
};
