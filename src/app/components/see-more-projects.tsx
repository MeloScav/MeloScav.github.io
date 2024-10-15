import DecorationIcon from "./decorations/decoration-icon";
import CardCategory from "../projects/card-category";
import { categories } from "@/data/categories";

const SeeMoreProjects = () => {
  return (
    <div className="position-relative">
      <div className="decoration-icons-wrapper">
        <DecorationIcon
          iconId={"circle"}
          className="text-secondary-light"
          width="32px"
          style={{ top: "39.65%", right: "102.77%" }}
        />
        <DecorationIcon
          iconId={"hashtag"}
          className="text-primary-light"
          width="36px"
          style={{ bottom: "104.7%", left: "59.76%" }}
        />
        <DecorationIcon
          iconId={"star"}
          className="text-secondary-light"
          width="49px"
          style={{ bottom: "101.22%", right: "5.14%" }}
        />
        <DecorationIcon
          iconId={"triangle"}
          className="text-primary-light"
          width="44px"
          style={{ bottom: "9.43%", right: "106.10%" }}
        />
        <DecorationIcon
          iconId={"circle"}
          className="text-primary-light"
          width="32px"
          style={{ bottom: "12.78%", left: "102.83%" }}
        />
      </div>

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
    </div>
  );
};

export default SeeMoreProjects;
