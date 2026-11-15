import { IProjectDetails, IProjectImage } from "@/types";

/** Windows on the TAUKN screens, for the gallery. */
const screens: Array<IProjectImage> = [
  "Bannière Russette building",
  "Recents assets",
  "Top sales",
  "Browse by category",
  "Liste des assets avec les filtres",
  "Détail de l’asset « A colorful paint »",
  "Détail d’un asset et footer",
].map((alt, index) => ({
  src: `/images/projects/taukn/screen-${index + 1}.jpg`,
  alt: `TAUKN : ${alt}`,
  width: 998,
  height: 786,
}));

// First pass converted from the detail page on main, to review.
export const taukn: IProjectDetails = {
  summary: "Création d'un site Blockchain permettant d'acheter des produits via des cryptomonnaies.",
  banner: {
    src: "/images/projects/taukn/banner.jpg",
    alt: "Bannière de la homepage TAUKN avec le Russette building",
    width: 2400,
    height: 1158,
  },
  sections: [
    {
      title: "Débrif",
      layout: "split",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Pour une **nouvelle entreprise active dans la Blockchain** et souhaitant lancer sa présence en ligne, j'ai réaliser un **site d'investissement Blockchain**.",
            "Leur souhait était de permettre aux personnes d'**investir simplement** dans toutes sortes d'objet / produits / entreprises via la Blockchain.",
            "Ce site est destiné à un **public déjà connaisseur du monde de la Blockchain** souhaitant investir dans des projets diverses.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/taukn/recent-assets.jpg",
              alt: "Section « Recents assets » de la homepage TAUKN",
              width: 2400,
              height: 1184,
            },
          ],
        },
        {
          type: "gallery",
          paragraphs: [
            "Une marketplace pour **investir simplement** dans des **actifs tokénisés**, de l’immobilier à l’art, en quelques clics.",
          ],
          // Read row by row on a 5 x 3 grid, the text takes the middle cell.
          images: [
            screens[0], screens[1], screens[2], screens[3], screens[4],
            screens[5], screens[6], screens[3], screens[2],
            screens[4], screens[0], screens[5], screens[1], screens[6],
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
              family: "Source Sans 3",
              paragraphs: [
                "Pour le texte, j’ai utilisé la police **Source Sans 3**, qui est également une **Google fonts**.",
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
                hex: "#553CF2",
              },
              {
                name: "Secondary",
                hex: "#64DAB6",
              },
              {
                name: "Title",
                hex: "#130D37",
              },
              {
                name: "Black",
                hex: "#0C0C0D",
              },
            ],
            [
              {
                name: "White",
                hex: "#FCFCFD",
              },
            ],
          ],
          paragraphs: [
            "Pour la **couleur primaire**, je suis partie du logo de l'entreprise qui était composé de noir, bleu et vert. J'ai choisi le bleu qui tire légèrement vert la violet car c'est une couleur qui fait référence au monde de la **finance**, aux **cryptomonnaies**, elle inspire **confiance** mais fait aussi référence à la **croissance** et à la **richesse**.",
            "En **couleur secondaire**, j’ai choisi le vert du logo qui est un vert assez saturé tirant vert le bleu. Cette couleur permet d'apporter un peu plus de **peps**, elle évoque également le monde de la **finance** et des **cryptomonnaies**. Le vert permet aussi de donner un sentiment de **croissance**, de chance et de **stabilité**.",
            "Pour les titres, je suis partie sur le bleu de la **couleur primaire** en très foncé pour donner un peu plus de couleur au site mais également le différencier du texte et **guider l'oeil de l'utilisateur**.",
            "J'ai utilisé **9 niveaux de gris** pour **guider l'oeil de l'utilisateur**, structurer mes informations et ajuster mes **niveaux de lecture**. Je suis partie d'un noir légèrement saturé avec la **couleur primaire** jusqu'au blanc, également légèrement saturé avec la couleur primaire.",
            "Le blanc utilisé est légèrement saturé avec la **couleur primaire**.",
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
              src: "/images/projects/taukn/design-1.jpg",
              alt: "Design de la bannière et des Recents assets de la homepage TAUKN",
              width: 2400,
              height: 2344,
            },
            {
              src: "/images/projects/taukn/design-2.jpg",
              alt: "Design des Top sales et de Browse by category",
              width: 2400,
              height: 2344,
            },
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Le public cible est composé de personnes, **déjà activent dans le monde de la Blockchain**, cherchant différents types de produits dans lesquels investir.",
            "Le but du site est de **simplifier au maximum le parcours utilisateurs** et de **diminuer le nombre d'actions** à effectuer pour investir dans un produits.",
            "Mes **niveaux de lectures** ont été construit à l'aide de mes **nuances de gris** mais également à l'aide des tailles de textes qui ont chacune été faites en suivant la **grille des 8 px**, ce qui permet de garder une certaine conhérence dans l'architecture des textes mais également d'**améliorer la lecture** et de donner plus de cohérence au design.",
            "Le parcours utilisateur commence avec **la navbar et le banner** qui vont lui permettre de voir les différents élements important, d'**effectuer directement une recherche** s'il sait ce qu'il cherche ainsi qu'avoir un **apperçu des prochains produits** et voir leur date d'arrivée pour potentiellement prévoir quand venir pour y investir.",
            "Étant donné que l'utilisateur cherche à **investir rapidement** dans des produits, la suite du parcours utilisateur va permettre à l'utilisateur de voir les **produits ajoutés récemment** mais également les produits les plus intéressants dans lesquelles il y a eu **le plus d'investissement**.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/taukn/category-footer.jpg",
              alt: "Design de Browse by category et du footer de TAUKN",
              width: 2400,
              height: 2279,
            },
          ],
        },
        {
          type: "text",
          paragraphs: [
            "A la fin du parcours de la page d'accueil, l'utilisateur vera **l'ensemble des catégories** disponible sur le site. S'il n'a pas encore cliqué sur un produit, c'est qu'il n'a pas encore vu ce qu'il cherchait ou quelque chose pouvant lui plaire, mettre à la fin l'ensemble des catégories lui permettra de **faire un choix plus large** lui permettant de voir différant produits par rapport à une catégorie intérressante pour lui.",
            "**Le footer** permettra a l'utilisateur de **s'orienter sur le site** et de trouver les **liens important** (notamment ceux présents dans le menu) mais aussi moins important mais qui pourrait tout être utilent dans certaines circonstances (ex: FAQ, liens légaux, etc.).",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/taukn/explore.jpg",
              alt: "Design de la page Explore de TAUKN, avec les filtres",
              width: 2400,
              height: 2685,
            },
            {
              src: "/images/projects/taukn/details.jpg",
              alt: "Design du détail de l’asset « A colorful paint »",
              width: 2400,
              height: 2685,
            },
          ],
        },
      ],
    },
  ],
};
