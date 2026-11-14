import Link from "next/link";
import { CategoryType } from "@/types";
import ButtonDecoration from "./decorations/button-decoration";

interface IProjectCategoryLinksProps {
  /** Category to leave out, usually the page the visitor is on. */
  exclude?: keyof typeof CategoryType;
}

const links: Array<{
  category: keyof typeof CategoryType;
  href: string;
  label: string;
}> = [
  {
    category: CategoryType.DESIGN,
    href: "/projects/design",
    label: "Voir les designs",
  },
  {
    category: CategoryType.DEVELOPMENT,
    href: "/projects/development",
    label: "Voir les développements",
  },
  {
    category: CategoryType.ILLUSTRATION,
    href: "/projects/illustration",
    label: "Voir les illustrations",
  },
];

const ProjectCategoryLinks = (props: IProjectCategoryLinksProps) => {
  const { exclude } = props;

  return (
    <ButtonDecoration>
      {links
        .filter((link) => link.category !== exclude)
        .map(({ href, label }) => (
          <Link key={href} href={href} className="btn btn-outline-primary-light">
            {label}
          </Link>
        ))}
    </ButtonDecoration>
  );
};

export default ProjectCategoryLinks;
