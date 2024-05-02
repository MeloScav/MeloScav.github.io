import React from "react";
import { Container } from "react-bootstrap";
import DecorationIcon from "./decorations/decoration-icon";
import CardCategory from "../projects/card-category";
import { categories } from "@/data/categories";

const SeeMoreProjects = () => {
  return (
    <Container className="py-section py-section--1">
      <h2 className="pb-9 text-center text-black position-relative mw-1000 mx-auto">
        Voir plus de projets
        <DecorationIcon
          iconId={"decoration-arrow"}
          className="text-gray-300 decoration-icon--responsive"
          width="34px"
          height="113px"
          style={{
            top: "20px",
            right: "calc(100% + 3px)",
          }}
        />
      </h2>
      <div className="grid-categories-cards">
        {categories.map((category) => (
          <CardCategory key={category.id} category={category} />
        ))}
      </div>
    </Container>
  );
};

export default SeeMoreProjects;
