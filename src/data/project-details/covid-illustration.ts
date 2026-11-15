import { IProjectDetails } from "@/types";

// First pass converted from the detail page on main, to review.
export const covidIllustration: IProjectDetails = {
  summary: "Création d'une illustration pour le concours \\",
  banner: {
    src: "/images/projects/covid-illustration/bg-banner-pandemie-covid.jpg",
    alt: "La pandémie",
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
            "J'ai réalisé cette **illustration vectorielle** dans le cadre d'un **concours d'art**, appelé \"Il était une fois la pandémie\", organisé par l'ASBL Liège, ville santé.",
            "Pour ce concours, il fallait représenter **l'épidémie Covid19 et ses conséquences**, c'est-à-dire : la dépression/ l'isolement, l'augmentation des dépendances (alcool, médicament, nourriture), la mort, l'éclatement des réseaux sociaux, la vaccination.",
            "J'ai choisi de représenter la partie \"**dépression / isolement**\" avec un dessin plutôt simple et des **couleurs fades** qui, pour moi, représentaient bien le côté isolement et dépression.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/covid-illustration/covid-illustration.jpg",
              alt: "La pandémie",
              width: 1418,
              height: 1135,
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
          type: "text",
          paragraphs: [
            "J’ai choisi d’utiliser des couleurs fades et légèrement foncé pour l'intérieur de la maison ainsi que pour le personnage principale pour donner un côté triste, reflétant la **solitude** et la **dépression**. Alors que pour l'extérieur de la maison, dans la fenêtre, j'ai utilisé des couleurs légèrement plus clairs et saturés car il est à l'opposé de tout ça, synonyme de contact et de **positivité**.",
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
            "Concept : **Quand la maison devient une prison**...",
            "Pour montrer au mieux la dépression et l’isolement subi à cause du covid, j’ai décidé d’illustrer un moment que nous avons tous connus pendant plusieurs mois, le « sacro-saint » **confinement**.",
            "Quelque soit la partie du globe sur laquelle nous nous trouvons, nous avons tous connus cette **partie sombre de la lutte contre le coronavirus** qui nous clouait chez nous sans presque aucunes possibilités de sortie, qui nous empêchait de **voir nos amis ou notre famille**. Selon notre cas, nous étions presque ou complètement isolés, les rayons du soleil sont devenus rares et les seuls éclaircis dans nos vies ont été les **lampes de nos maisons** ou celle de notre GSM.",
            "Emprisonnés dans ce qui fut autre fois un douillet domicile, **nous rêvions tous de sortir** voir ce nouveau monde qui ne ressemblait plus à ce que nous avions connu. Quand nous pouvions sortir, pour faire des courses ou aller chez le médecin, nous le faisions **masqués**. Plus de visage, plus de sourire, le monde était devenu encore un peu plus triste. À tout ça se rajoutait **la peur de l’autre**, la peur de la maladie, 1m50 de distance, pas de contact physique, du gel hydroalcoolique, beaucoup de gel hydroalcoolique. Un faussé se creusait entre nous et les autres, augmentant encore plus **l’isolement et la dépression déjà bien installés**.",
            "Pour beaucoup d’entre nous, **l’après confinement** n’est pas synonyme de liberté ni de joie ou de retour à la normal. Cette période sombre a été si forte en émotion, tellement de perturbations, que ça les a **changés à tout jamais**, troubles déjà présents mais renforcés ou créés suites à des fragilités, l’isolement et la dépression sont toujours bien présents, difficile à faire partir parfois, il faudra du temps pour un **véritable retour à la normalité**...",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/covid-illustration/covid-illustration.jpg",
              alt: "La pandémie",
              width: 1418,
              height: 1135,
            },
          ],
        },
      ],
    },
  ],
};
