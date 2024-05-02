import React from "react";
import MainBanner from "./components/main-banner";
import Spacer from "./components/spacer";
import RecentProjects from "./components/recent-projects";
import SeeMoreProjects from "./components/see-more-projects";

export default function Home() {
  return (
    <>
      <MainBanner />
      {/* <Spacer></Spacer> */}
      <RecentProjects />
      <SeeMoreProjects />
      <span>Tatatatata</span>
      <Spacer></Spacer>
    </>
  );
}
