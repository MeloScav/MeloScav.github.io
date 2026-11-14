import Link from "next/link";
import ButtonDecoration from "./decorations/button-decoration";

const links = [
  { href: "/projects/design", label: "Voir les designs" },
  { href: "/projects/development", label: "Voir les développements" },
  { href: "/projects/illustration", label: "Voir les illustrations" },
];

const ProjectCategoryLinks = () => {
  return (
    <ButtonDecoration>
      {links.map(({ href, label }) => (
        <Link key={href} href={href} className="btn btn-outline-primary-light">
          {label}
        </Link>
      ))}
    </ButtonDecoration>
  );
};

export default ProjectCategoryLinks;
