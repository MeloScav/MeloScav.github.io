"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RichText from "@/app/components/rich-text";
import { IProjectImage } from "@/types";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface IGalleryBlockProps {
  paragraphs: Array<string>;
  images: Array<IProjectImage>;
}

/** How much bigger the text is while it is alone on screen. */
const TEXT_START_SCALE = 1.8;

/**
 * Full screen text that shrinks into the middle of a grid of screenshots
 * while they gather around it. Pinned on desktop, a plain grid elsewhere.
 */
const GalleryBlock = (props: IGalleryBlockProps) => {
  const { paragraphs, images } = props;
  const galleryRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const gallery = galleryRef.current;

      if (!gallery) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 992px) and (prefers-reduced-motion: no-preference)",
        () => {
          const text = gallery.querySelector(".project-gallery__text");
          const tiles = gsap.utils.toArray<HTMLElement>(
            ".project-gallery__tile",
          );

          /**
           * Offset of a tile from the middle of the grid. Read from the layout,
           * not the rects, so the tweened transforms do not skew it.
           */
          const fromCenter = (tile: HTMLElement) => ({
            x: tile.offsetLeft + tile.offsetWidth / 2 - gallery.clientWidth / 2,
            y: tile.offsetTop + tile.offsetHeight / 2 - gallery.clientHeight / 2,
          });

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: gallery,
              start: "top top",
              end: "+=120%",
              pin: true,
              // The section body is a flex column, where GSAP skips the spacing.
              pinSpacing: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          // fromTo, not from: in dev the effect runs twice and a from() would
          // pick up the start values left by the first run as its end values.
          timeline
            .fromTo(
              text,
              { scale: TEXT_START_SCALE },
              { scale: 1, ease: "none", duration: 1 },
            )
            .fromTo(
              tiles,
              {
                autoAlpha: 0,
                scale: 0.7,
                // Each tile slides in from further out, the closest ones first.
                x: (index, tile) => fromCenter(tile).x * 0.4,
                y: (index, tile) => fromCenter(tile).y * 0.4,
              },
              {
                autoAlpha: 1,
                scale: 1,
                x: 0,
                y: 0,
                stagger: (index, tile) => {
                  const { x, y } = fromCenter(tile as HTMLElement);

                  return Math.hypot(x, y) / gallery.clientWidth;
                },
                duration: 0.6,
              },
              0.2,
            );
        },
      );
    },
    { scope: galleryRef },
  );

  return (
    <div ref={galleryRef} className="project-gallery">
      <div className="project-gallery__text project-text">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>
            <RichText text={paragraph} />
          </p>
        ))}
      </div>

      {images.map((image, index) => (
        <div key={index} className="project-gallery__tile">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 992px) 20vw, 50vw"
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryBlock;
