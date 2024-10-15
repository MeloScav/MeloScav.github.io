import MainBanner from "./components/main-banner";
import RecentProjects from "./components/recent-projects";
import SeeMoreProjects from "./components/see-more-projects";
import AboutSection from "./components/about-section";
import { Container, Stack } from "react-bootstrap";
import DecorationColumns from "./components/decorations/decoration-columns";

export default function Home() {
  return (
    <>
      <MainBanner />
      {/* <Spacer></Spacer> */}
      <RecentProjects />

      <Container className="overflow-x-clip">
        <Stack className="py-section py-section--1 gap-section gap-section--1 position-relative">
          <DecorationColumns />
          <SeeMoreProjects />
          <AboutSection />
        </Stack>
      </Container>
    </>
  );
}
