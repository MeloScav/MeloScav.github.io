import { MAIL } from "./constants";

interface IMainMenuItem {
    title: string;
    href: string;
    className?: string;
}

export const mainMenu: IMainMenuItem[] = [
    {
        title: "Design",
        href: "/projects/design"
    },
    {
        title: "Développement",
        href: "/projects/development"
    },
    {
        title: "Illustration",
        href: "/projects/illustration"
    },
    {
        title: "Me contacter",
        href: `mailto:${MAIL}`,
    }
]