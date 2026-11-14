import DecorationIcon from "./decoration-icon";

const ProjectGridDecorations = () => {
  return (
    <div className="decoration-icons-wrapper d-none d-lg-block">
      <DecorationIcon
        iconId={"circle"}
        className="text-primary-light"
        width="32px"
        style={{ top: "720px", left: "calc(100% + 80px)" }}
      />
      <DecorationIcon
        iconId={"circle"}
        className="text-secondary-light"
        width="32px"
        style={{ top: "1250px", right: "calc(100% + 120px)" }}
      />
    </div>
  );
};

export default ProjectGridDecorations;
