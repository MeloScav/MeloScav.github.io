import { Stack } from "react-bootstrap";
import Tag from "../components/tag";
import { IProject } from "@/types";
import classNames from "@/utils/classNames";
import { getCategoryById } from "../services/get-categories";

interface IProjectBadgesProps {
  className?: string;
  project: IProject;
}

/** The tags of a project followed by its category, as outlined pills. */
const ProjectBadges = (props: IProjectBadgesProps) => {
  const { className, project } = props;
  const category = getCategoryById(project.category);
  const badges = [...(project.tags ?? []), category?.name].filter(
    (badge): badge is string => Boolean(badge)
  );

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className={classNames("project-badges flex-wrap", className)}
    >
      {badges.map((badge) => (
        <Tag
          key={badge}
          variant="gray-400"
          className="project-badges__tag"
          outline
          pill
        >
          {badge}
        </Tag>
      ))}
    </Stack>
  );
};

export default ProjectBadges;
