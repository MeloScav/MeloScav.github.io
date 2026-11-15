import { IProjectDetails } from "@/types";

// First pass converted from the detail page on main, to review.
export const illustration3d: IProjectDetails = {
  summary: "Création d'une illustration 3D pour un site web.",
  banner: {
    src: "/images/projects/illustration3d/illustration3d-banner.jpg",
    alt: "Character design 3D",
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
            "Pour le **site portfolio d'un client**, j'ai réalisé une **illustration 3D d'un personnage**.",
          ],
        },
        {
          type: "images",
          images: [
            {
              src: "/images/projects/illustration3d/illustration3d-character-animate.mp4",
              alt: "Character design 3D",
              width: 720,
              height: 720,
            },
          ],
        },
      ],
    },
  ],
};
