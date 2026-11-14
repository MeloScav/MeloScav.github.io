"use client";

import React, { useRef } from "react";
import { Container, Stack } from "react-bootstrap";
import ProjectCategoryLinks from "./project-category-links";
import SpriteSVG from "./sprite-svg";
import CardProject from "../projects/card-project";
import { CategoryType, IProject } from "@/types";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface IProjectsSliderProps {
  title: string;
  intro: string;
  projects: Array<IProject>;
  /** Category left out of the links, the one the visitor is already on. */
  excludeCategory?: keyof typeof CategoryType;
  /** Fade the title and cards in on scroll. Off, the section is shown as is. */
  reveal?: boolean;
}

/**
 * Dark section pinned on desktop while its project cards slide sideways.
 * Projects come in as props so a random order is picked on the server only.
 */
const ProjectsSlider = (props: IProjectsSliderProps) => {
  const { title, intro, projects, excludeCategory, reveal = true } = props;
  const projectsWrapperRef = useRef<HTMLDivElement>(null);
  const projectsSliderRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const projectsWrapper = projectsWrapperRef.current;
      const projectsSlider = projectsSliderRef.current;

      if (!projectsWrapper || !projectsSlider) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 992px) and (prefers-reduced-motion: no-preference)",
        () => {
          /**
           * How far the slider travels so its last item ends with the same
           * gap on the right as the content has on the left. Rects are read
           * without the current x so the result holds mid-animation.
           */
          const getDistance = () => {
            const lastItem = projectsSlider.querySelector(
              ".cards-wrapper > :last-child",
            );

            if (!lastItem) {
              return 0;
            }

            const x = Number(gsap.getProperty(projectsSlider, "x"));
            const contentLeft =
              projectsSlider.getBoundingClientRect().left -
              x +
              parseFloat(getComputedStyle(projectsSlider).paddingLeft);
            const lastRight = lastItem.getBoundingClientRect().right - x;

            return Math.max(
              0,
              lastRight - (projectsWrapper.clientWidth - contentLeft),
            );
          };

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: projectsWrapper,
              start: "top top",
              end: () =>
                "+=" + ((reveal ? window.innerHeight : 0) + getDistance()),
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          if (reveal) {
            timeline.fromTo(
              ["h2", projectsSlider],
              { y: 80, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, stagger: 0.2, duration: 1 }
            );
          }

          timeline.to(projectsSlider, {
            x: () => -getDistance(),
            ease: "none",
            duration: 3,
          });
        },
      );

      if (!reveal) {
        return;
      }

      mm.add(
        "(max-width: 991.98px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.set(".card-project", { autoAlpha: 0, y: 40 });

          ScrollTrigger.batch(".card-project", {
            start: "top 85%",
            once: true,
            onEnter: (cards) =>
              gsap.to(cards, { autoAlpha: 1, y: 0, stagger: 0.1 }),
          });
        },
      );
    },
    { scope: projectsWrapperRef },
  );

  return (
    <div
      ref={projectsWrapperRef}
      className="projects-wrapper bg-gray-800 overflow-x-clip full-height-section py-section z-1"
    >
      <Container>
        <h2 className="projects-wrapper__title text-gray-100">{title}</h2>
      </Container>

      <Container ref={projectsSliderRef} className="projects-slider">
        <div>
          <Stack gap={5}>
            <Stack gap={4}>
              <p className="fs-6 text-gray-300">{intro}</p>

              <ProjectCategoryLinks exclude={excludeCategory} />
            </Stack>

            <div className="projects-slider__arrow d-flex justify-content-center">
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
          {projects.map((project) => (
            <CardProject key={project.id} project={project} />
          ))}
          <Stack gap={4}>
            <p className="fs-6 text-gray-300">
              N’hésitez pas à consulter l’ensemble de mes réalisations.
            </p>

            <ProjectCategoryLinks exclude={excludeCategory} />
          </Stack>
        </div>
      </Container>
    </div>
  );
};

export default ProjectsSlider;
