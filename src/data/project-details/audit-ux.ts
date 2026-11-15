import { IProjectDetails, IProjectImage } from "@/types";

const folder = "/images/projects/audit-ux";

const screen = (name: string, alt: string): IProjectImage => ({
  src: `${folder}/${name}.jpg`,
  alt,
  width: 1336,
  height: 1213,
});

const teaHouse: IProjectImage = {
  src: `${folder}/tea-house.jpg`,
  alt: "Section « Notre maison du thé » de la contre-proposition Fruitea",
  width: 2400,
  height: 1244,
};

/** Windows on the redesigned homepage, from the top down to the footer. */
const homepage: Array<IProjectImage> = [
  "Bannière et types de thés",
  "Promotion d’été et **bestsellers**",
  "Nos thés et nos infusions",
  "Nos infusions et notre maison du thé",
  "Notre maison du thé et articles de presse",
  "Articles de presse, réassurance et footer",
  "Réassurance et footer",
].map((alt, index) => ({
  src: `${folder}/homepage-${index + 1}.jpg`,
  alt: `Contre-proposition Fruitea : ${alt}`,
  width: 977,
  height: 769,
}));

export const auditUx: IProjectDetails = {
  summary:
    "Audit UX d’une landing page d’e-shop pour un magasin de thé avec une contre proposition designé",
  banner: {
    src: `${folder}/hero.jpg`,
    alt: "Bannière de la contre-proposition de la homepage Fruitea",
    width: 2400,
    height: 1090,
  },
  sections: [
    {
      title: "Débrif",
      layout: "split",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Pour mon examen du cours d'Expérience utilisateur, il nous a été demandé de réaliser un **Audit UX** d'une landing page pour un **magasin de thé**.",
            "Pour cet Audit, j'ai commencé avec une récolte des informations importantes sur le client mais aussi sur les profils des utilisateurs. J'ai ensuite examiné l'ensemble des éléments de la page, qu'ils soient positifs ou négatifs, pour en faire une présentation avec mes recommandations, comme si je présentais l'Audit UX a un client. Pour ce faire, je me suis inspirée des points importants repris dans la **grille heuristiques de Nielsen**.",
            "A la fin de cet Audit, j'ai ajouté une **Priorization Map** pour classer les différentes recommandations par ordre de priorité en fonction de leur impact et de leur faisabilité.",
            "J'ai ensuite réalisé une **contre-proposition designé** pour cette homepage.",
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "images", images: [teaHouse] },
        {
          type: "gallery",
          paragraphs: [
            "Une homepage repensée **section par section**, pour guider l’utilisateur du premier coup d’œil jusqu’à l’achat.",
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
              family: "Lato",
              paragraphs: [
                "Pour les titres, j'ai choisi la police **Lato**.",
                "Il s'agit d'une police sans empattement, elle est **très lisible** et donne un côté **moderne** au site. Comme il s'agit d'une **Google fonts**, elle est accessible depuis n'importe quel navigateur et visible par la plupart des utilisateurs, quel que soit leur système d'exploitation, la police n'aura pas besoin d'être téléchargée.",
                "La police de base était la police **Shrikhand**. Le problème avec celle-ci est qu’elle est **italique**, ce qui **diminue la lisibilité** des titres. En général, les polices italiques sont **réservées aux citations**.",
              ],
            },
            {
              title: "Les textes",
              family: "Almarai",
              paragraphs: [
                "Pour les textes, j’ai choisi la police **Almarai** qui est sans empattement, **très lisible** et qui permet de donner un côté moderne au site. Elle fait également partie des **Google fonts**.",
                "La police de base était la **police Inter**. Cette police aurait pu ne pas être changé car elle reste **simple, lisible et sans empattement**.",
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
              { name: "Primary", hex: "#4C6827" },
              { name: "Secondary", hex: "#F6CE46" },
            ],
            [
              { name: "Black", hex: "#1D2216" },
              { name: "Grey - 600", hex: "#4D5247" },
              { name: "Grey - 500", hex: "#808679" },
              { name: "Grey - 400", hex: "#B3B6AF" },
            ],
            [
              { name: "Grey - 300", hex: "#CCCFC9" },
              { name: "Grey - 200", hex: "#E6E7E4" },
              { name: "Grey - 100", hex: "#F2F3F2" },
              { name: "White", hex: "#FFFFFF" },
            ],
          ],
          paragraphs: [
            "La **couleur primaire** du site est un vert tirant légèrement vers le jaune. Pour ma contre-proposition, j'ai **légèrement foncé** cette couleur en passant d'une luminosité de 34 à 28 pour permettre un **meilleur contraste** des boutons.",
            "La **couleur secondaire** est un **jaune** tirant légèrement vers l'orange.",
            "Pendant mon annalyse UX, j’ai vu que les **nuances de gris** du site, allant du noir vers le blanc, ont été faites à partir d'orange, c'est-à-dire que chacune de ces nuances est légèrement saturé avec de l'orange, alors que cette couleur n’est même pas présente sur le site. Pour ma contre-proposition, j'ai changé chacune de ces nuances de gris, en les **saturant** légèrement avec la **couleur primaire**.",
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
            screen("client-design-1", "Homepage d'origine du client, haut de page"),
            screen("client-design-2", "Homepage d'origine du client, articles et promotion"),
          ],
        },
        {
          type: "text",
          lead: true,
          paragraphs: [
            "Le client est actif dans la vente de **thé bio et équitable** sur internet, la plupart de ses clients sont des citadins, aisées, cultivées, faisant attention à l'environnement, voulant acheter du thé bio et équitable.",
            "La homepage du client est séparée en 9 sections (sans compter le footer et la navbar). Je suis partie sur une analyse de chacune en vérifiant tout que ce soit la taille des polices, le contraste, la lisibilité, etc. Pour ce faire, je me suis inspirée des points importants repris dans la **grille heuristiques de Nielsen**.",
          ],
        },
        {
          type: "images",
          images: [
            screen("client-design-3", "Homepage d'origine du client, produits"),
            screen("client-design-4", "Homepage d'origine du client, réassurance et footer"),
          ],
        },
      ],
    },
    {
      title: "Ma contre-proposition",
      blocks: [
        {
          type: "images",
          images: [
            {
              src: `${folder}/banner.jpg`,
              alt: "Nouvelle bannière « Fraicheur d’été »",
              width: 1512,
              height: 687,
            },
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Pour ma contre-proposition, j'ai retravaillé les **polices** et les **couleurs** pour quelles aillent mieux avec l'image du client mais aussi pour quelles soit **plus lisible** pour les utilisateurs. J'ai également modifier le **parcours de l'utilisateur** pour **améliorer son expérience** sur le site et **éviter** aux maximums toutes **frustrations**.",
            "J'ai commencé par **modifier les liens** de la **navbar** pour qu'ils soient plus **compréhensible** mais aussi pour que l'utilisateur puisse chercher et avoir accès directement à ce qui l'intéresse et de ce fait, **diminuer le nombre de clics** nécessaire pour réaliser l'action voulue.",
            "J'ai ensuite complètement changé le banner qui n'était pas suffisement lisible et qui ne permettait pas d'identifier correctement le client ou ce qu'il vend. Étant donné que le **but principal** de l’utilisateur est d'**acheter du thé**, j'en ai profité pour mettre en avant les nouvelles gammes de thés pour pousser l'utilisateur à aller la découvrir ou à découvrir les autres thés disponibles.",
          ],
        },
        {
          type: "images",
          images: [
            screen("proposal-1", "Types de thés, promotion et bestsellers"),
            screen("proposal-2", "Sections des thés et des infusions"),
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Si l'utilisateur a encore décidé de scroller, c'est qu'il n'est **pas encore convaincu**. Je lui propose donc **l'ensemble des différentes sortes de thés** pour qu'il puisse y trouver son bonheur et cliquer sur ce qui l'intéresse.",
            "Après ça, j'ai remis la promotion proposée par le site pour inciter l'utilisateur à acheter. Je l'ai changé de place car cette section n'arrivait pas au bon moment dans le **parcours utilisateur**, l'image d'illustration était également trop présente et l'image du produit pas assez mise en avant, le bouton était également gris et pas suffisement visible. J'en ai donc profité pour donner un peu **plus de peps** à cette section et mettre un peu plus en avant la gourde offerte.",
            "Les 3 sections suivantes sont des sections permettant de proposer les bestsellers ainsi que des **thés et infusions** proposés.",
            "J'ai retravaillé les cartes produits pour permettre de mieux les **identifiers** et **inciter** l'utilisateurs à acheter le produit directement ou aller en savoir plus.",
          ],
        },
        { type: "images", images: [teaHouse] },
        {
          type: "text",
          paragraphs: [
            "A la fin de ces 3 sections, j'ai mis les informations à propos de la société et de leurs thés et infusions. Je l'ai mis à ce moment du **parcours utilisateurs** car cette section est moins importante que les autres mais aussi car si l'utilisateur n'a toujours pas cliqué sur un des produits à ce niveau de la homepage, c'est surement qu'il veut être **rassuré** ou en **savoir plus** à propos de la société.",
          ],
        },
        {
          type: "images",
          images: [
            screen("proposal-3", "Maison du thé et articles de presse"),
            screen("proposal-4", "Réassurance et nouveau footer"),
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Après les informations sur la société et leurs produits, j'ai ajouté le section contenant les articles parlant d'eux pour permettre de **rassurer** encore plus l'utilisateur mais aussi lui permettre d'en **apprendre** encore **plus** sur la société.",
            "La dernière section contient les informations à propos du paiement et de la livraison. Pour cette section, j'ai principalement changé les icônes car sur la version de base, la **lisibilité** n'était pas très bonne.",
            "J'ai également réorganisé le footer, qui n'était pas très compréhensible sur la version d'origine. J'ai adouci sa couleur pour que ce soit plus agréable à lire, j'ai modifier les **niveaux de lectures**, arrangé le tout en colonne et ajouté les liens légaux qui sont obligatoires sur les sites e-commerces mais qui n'était pas du tout visible sur la version du client.",
          ],
        },
      ],
    },
  ],
};
