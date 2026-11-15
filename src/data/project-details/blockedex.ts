import { IProjectDetails } from "@/types";

// First pass converted from the detail page on main, to review.
export const blockedex: IProjectDetails = {
  summary: "Création d'un logo pour une entreprise active dans la Blockchain.",
  banner: {
    src: "/images/projects/blockedex/blockedex-banner.jpg",
    alt: "Blockedex",
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
            "J'ai reçu une demaine d'un **client actif dans le domaine de la Blockchain** (Création de Smart Contract, consulting Blockchain, DAPPS) pour la **réalisation d'un logo**. Sa demande était de réaliser un logo faisant référence à son nom \"Blockedex\" qui est un mélange entre \"Block\", de la Blockchain, et de \"Pokédex\", de l'univers de Pokémon. Les couleurs voulues devaient être **futuristes et modernes**.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/blockedex/blockedex.jpg",
              alt: "Blockedex",
              width: 2400,
              height: 1350,
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
                name: "Blue",
                hex: "#0B8BF4",
              },
              {
                name: "Purple",
                hex: "#703BF2",
              },
            ],
          ],
          paragraphs: [
            "J'ai choisi d'utiliser la couleur bleu, qui est une couleur souvent utilisée dans le monde de la Blockchain et de la **finance**, elle permet de donner un sentiment de **sécurité**, de **confiance** et de **professionalisme**.",
            "J'ai choisi d'utiliser également du mauve car cette couleur permet de donner un côté **mystérieux et luxueux** à la blockchain.",
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
            "Pour ce logo, j'ai réalisé un **dessin minimaliste** pour qu'il soit **facile à retenir**, facile à redessiner de mémoire et visible en tout petit. J'ai veillé à ce qu'il soit approprié à la société et **suffisement distinctif** pour qu'on puisse facilement reconnaitre la socitété grâce à son logo et suffisemment simple pour s'en rappeler après l'avoir vu une seule fois.",
            "Il représente un dessin assez minimaliste d'**un carré avec un autre carré à l'intérieur** pour à la fois représenter l'univers de la blockchain mais également faire référence au dessin d'un **pokeball**. A l'intérieur de celui-ci, la forme \"b\" apparaît pour faire référence au nom \"Blockedex\". Dans l'espace vide, un C apparaît rappellant le \"C\" de blockchain et celui de \"Blockedex\".",
            "Les **formes droites et géométriques** permettent de donner un sentiment de **sécurité, de force, de stabilité et de professionnalisme**.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/blockedex/Blockedex-logo-anime.mp4",
              alt: "Blockedex",
              width: 1080,
              height: 1080,
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
            "Pour la partie texte de ce logo, j'ai utilisé \"**Univia Pro**\" qui est une **police Adobe**.",
            "Il s'agit d'une police **sans empattement, très lisible**, qui permet de donner un côté moderne. Elle présente également un aspect assez droit et pointu, ce qui correspond bien aux styles des polices web3 et le \"o\" de Blockedex forme presque un carré, ce qui fait un petit **clin d'oeil** au mot \"bloc\" de la blockchain.",
          ],
        },
        {
          type: "images",
          logo: true,
          images: [
            {
              src: "/images/projects/blockedex/blockedex-logo.svg",
              alt: "Blockedex",
              width: 1933,
              height: 394,
            },
          ],
        },
      ],
    },
  ],
};
