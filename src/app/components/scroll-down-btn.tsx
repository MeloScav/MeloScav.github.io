"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpriteSVG from "./sprite-svg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ScrollDownBtn = () => {
  const scrollBox = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const scrollBoxElement = scrollBox.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollBoxElement,
        toggleActions: "restart none reverse none",
        start: "top 60%",
        end: "bottom 10%",
        scrub: 2,
        // markers: true,
      },
    });

    tl.to(scrollBoxElement, {
      y: "-100px",
      rotation: 180,
      ease: "power1.out",
    })
      .to(".scroll-text", { opacity: 0 })
      .to(scrollBoxElement, {
        y: "800px",
        rotation: 260,
        scale: "10",

        ease: "power1.out",
      })
      .to(scrollBoxElement, {
        rotation: 360,
        scale: "80",
        ease: "power1.out",
      });
  }, [scrollBox]);

  return (
    <div className="main-banner__scroll">
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
