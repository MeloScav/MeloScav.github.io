"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpriteSVG from "./sprite-svg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const getNavHeight = () =>
  document.querySelector<HTMLElement>(".main-nav-wrapper")?.offsetHeight ?? 0;

const ScrollDownBtn = () => {
  const scrollWrapper = useRef<HTMLDivElement>(null);
  const scrollBox = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const banner = scrollWrapper.current?.parentElement;
      const bannerWrapper = banner?.parentElement;
      const panel = banner?.querySelector<HTMLElement>(".main-banner__panel");

      if (!banner || !bannerWrapper || !panel) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 992px)",
          isMobile: "(max-width: 991.98px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isDesktop, reduceMotion } = context.conditions as {
            isDesktop: boolean;
            isMobile: boolean;
            reduceMotion: boolean;
          };

          if (reduceMotion) {
            return;
          }

          if (!isDesktop) {
            gsap.to(scrollWrapper.current, {
              y: 40,
              autoAlpha: 0,
              scrollTrigger: {
                trigger: banner,
                start: "top top",
                end: "bottom top",
                scrub: 1,
              },
            });

            return;
          }

          /** Live position of the pill, so the panel can start exactly on it. */
          const pillBox = () =>
            scrollBox.current?.getBoundingClientRect() ?? new DOMRect();

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: bannerWrapper,
              start: "top top",
              end: "bottom top",
              scrub: 1,
              pin: true,
              pinSpacing: false,
              invalidateOnRefresh: true,
              /**
               * Once the projects section owns the screen it brings its own
               * background, so the banner has to step out of the way. Only the
               * wrapper is toggled here: the panel's visibility belongs to the
               * timeline, and setting it from outside breaks the reverse.
               */
              onLeave: () => gsap.set(bannerWrapper, { autoAlpha: 0 }),
              onEnterBack: () => gsap.set(bannerWrapper, { autoAlpha: 1 }),
            },
          });

          timeline
            .to(scrollBox.current, { y: -80, rotation: 180, duration: 1 })
            .to(".scroll-text", { autoAlpha: 0, duration: 0.4 }, "<40%")
            .fromTo(
              panel,
              {
                top: () => pillBox().top,
                left: () => pillBox().left,
                width: () => pillBox().width,
                height: () => pillBox().height,
                borderRadius: 999,
                autoAlpha: 1,
              },
              {
                top: () => getNavHeight(),
                left: 0,
                width: () => document.documentElement.clientWidth,
                height: () => window.innerHeight - getNavHeight(),
                borderRadius: 0,
                autoAlpha: 1,
                ease: "power2.inOut",
                immediateRender: false,
                duration: 1.4,
              },
            )
            .to(scrollWrapper.current, { autoAlpha: 0, duration: 0.2 }, "<");
        },
      );
    },
    { scope: scrollWrapper },
  );

  return (
    <div ref={scrollWrapper} className="main-banner__scroll">
      <div ref={scrollBox} className="px-2 text-white bg-gray-800">
        <span className="scroll-text">scroll</span>
      </div>

      <Link className="stretched-link text-gray-800 ms-auto" href={"/"}>
        <SpriteSVG
          isDecorationIcon={true}
          iconId={"arrow-scroll"}
          style={{ width: "34px", height: "81px" }}
        />
      </Link>
    </div>
  );
};

export default ScrollDownBtn;
