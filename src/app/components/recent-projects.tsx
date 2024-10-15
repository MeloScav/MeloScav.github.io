"use client";

import { CategoryType } from "@/types";

import React, { useRef } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import ButtonDecoration from "./decorations/button-decoration";
import SpriteSVG from "./sprite-svg";
import CardProject from "../projects/card-project";
import { getProjects } from "../services/get-projects";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const RecentProjects = () => {
  const recentProjectList = getProjects();
  const projectsWrapperRef = useRef<HTMLDivElement>(null);
  const projectsSliderRef = useRef<HTMLDivElement>(null);

  // useGSAP(() => {
  //   const projectsWrapper = projectsWrapperRef.current;
  //   const projectsSlider = projectsSliderRef.current;

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: projectsWrapper,
  //       start: "center center",
  //       end: "+=100%",
  //       pin: projectsWrapper,
  //       scrub: true,
  //       invalidateOnRefresh: true,
  //       // markers: true,
  //     },
  //   });

  //   tl.to(projectsSlider, {
  //     x: () => (projectsSlider?.scrollWidth || 0) * -1,
  //     xPercent: 80,
  //     ease: "power1.out",
  //   });
  // }, [projectsWrapperRef, projectsSliderRef]);

  return (
    <div
      ref={projectsWrapperRef}
      className="projects-wrapper bg-gray-800 overflow-x-hidden full-height-section py-section z-1"
    >
      <Container>
        <h2 className="text-gray-100 pb-9">Projets récents</h2>
      </Container>

      <Container ref={projectsSliderRef} className="projects-slider">
        <div>
          <Stack gap={5}>
            <Stack gap={4}>
              <p className="fs-6 text-gray-300">
                Retrouvez ici une sélection de mes derniers projets. N’hésitez
                pas à consulter également l’ensemble de mes réalisations.
              </p>

              <ButtonDecoration>
                <Link
                  href="/projects/design"
                  className="btn btn-outline-primary-light"
                >
                  Voir les designs
                </Link>
                <Link
                  href="/projects/development"
                  className="btn btn-outline-primary-light"
                >
                  Voir les développements
                </Link>
                <Link
                  href="/projects/illustrations"
                  className="btn btn-outline-primary-light"
                >
                  Voir les illustrations
                </Link>
              </ButtonDecoration>
            </Stack>

            <div className="d-flex justify-content-center">
              <SpriteSVG
                iconId={"decoration-arrow"}
                className="text-gray-300 mx-auto"
                isDecorationIcon
                style={{ width: "34px", height: "113px" }}
              />
            </div>
          </Stack>
        </div>

        <div className="cards-wrapper">
          {recentProjectList.map((project) => (
            <CardProject key={project.id} project={project} />
          ))}
          <Stack gap={4}>
            <p className="fs-6 text-gray-300">
              N’hésitez pas à consulter l’ensemble de mes réalisations.
            </p>

            <ButtonDecoration>
              <Button variant="outline-primary-light">Voir les designs</Button>
              <Button variant="outline-primary-light">
                Voir les développements
              </Button>
              <Button variant="outline-primary-light">
                Voir les illustrations
              </Button>
            </ButtonDecoration>
          </Stack>
        </div>
      </Container>
    </div>
  );
};

export default RecentProjects;
