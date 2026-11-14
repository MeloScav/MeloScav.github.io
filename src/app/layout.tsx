import type { Metadata } from "next";
import { Almarai, Merienda } from "next/font/google";
import "./styles/index.scss";
import MainNav from "./components/main-nav";
import MainFooter from "./components/main-footer";
import classNames from "@/utils/classNames";

const almarai = Almarai({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-family-base",
});

const merienda = Merienda({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-family-headings",
});

export const metadata: Metadata = {
  title: { default: "Méloé", template: "Méloé - %s" },
  description:
    "Portfolio de Méloé Scavezzoni, UX / UI designeuse et développeuse web frontend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={classNames(almarai.variable, merienda.variable)}>
      {/* GSAP's ScrollTrigger leaves an empty style attribute on body when it registers, before hydration. */}
      <body className="pt-main-nav-height" suppressHydrationWarning>
        <MainNav />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
