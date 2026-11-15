import { IProjectDetails } from "@/types";

// First pass converted from the detail page on main, to review.
export const pictograms: IProjectDetails = {
  summary: "Détournement de plusieurs pictogrammes sans dénaturer leur nature graphico-esthétique.",
  banner: {
    src: "/images/projects/pictograms/bg-banner-pictograms.jpg",
    alt: "Détournement de pictogrammes",
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
            "Dans le cadre d'un cours de créativité visuelle, j'ai eu comme consigne de **détourner des pictogrammes** sans en dénaturer leur **nature graphico-esthétique**.",
            "Après quelques recherches, j'ai décidé de me lancer sur **3 panneaux / pictogrammes** : arrêt et stationnement interdits, **produit inflammable**, **sens interdit** pour tout conducteur.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/pictograms/pictograms.jpg",
              alt: "Détournement de pictogrammes",
              width: 800,
              height: 450,
            },
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
            "J'ai décidé de détourner le panneau d'**interdiction d'arrêt et de stationnement** pour le transformer en **une fenêtre** de laquelle on peut voir un paysage avec un arbre, une montagne et un ciel bleu.",
          ],
        },
        {
          type: "images",
          logo: true,
          images: [
            {
              src: "/images/projects/pictograms/picto-window.svg",
              alt: "Détournement de pictogrammes",
              width: 204,
              height: 204,
            },
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Pour le pictogramme de produit inflammable, j'ai décidé de le transformer en **arbre de Noël** avec ses décorations.",
            "Au dessus de celui-ci, j'ai placé **un chapeau** pour renforcer encore plus le côté fête de Noël.",
          ],
        },
        {
          type: "images",
          logo: true,
          images: [
            {
              src: "/images/projects/pictograms/picto-xmas.svg",
              alt: "Détournement de pictogrammes",
              width: 213,
              height: 250,
            },
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Pour détourner le panneau de sens interdit, j'ai décidé d'y ajouter un mignon **petit furet** agrippant et mordant la barre blanche du panneau.",
          ],
        },
        {
          type: "images",
          logo: true,
          images: [
            {
              src: "/images/projects/pictograms/picto-ferret.svg",
              alt: "Détournement de pictogrammes",
              width: 237,
              height: 222,
            },
          ],
        },
      ],
    },
  ],
};
