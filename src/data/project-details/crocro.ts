import { IProjectDetails } from "@/types";

// First pass converted from the detail page on main, to review.
export const crocro: IProjectDetails = {
  summary: "Création d'une illustration 3D d'un crocodile.",
  banner: {
    src: "/images/projects/crocro/crocro-banner.jpg",
    alt: "Crocro - Character design",
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
            "Réalisation d'un **crocodile 3d** avec **Blender**.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/crocro/crocro-animate.mp4",
              alt: "Crocro - Character design",
              width: 720,
              height: 720,
            },
          ],
        },
      ],
    },
  ],
};
