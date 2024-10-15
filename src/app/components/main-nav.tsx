import { mainMenu } from "@/data/menus";

import Image from "next/image";
import Link from "next/link";
import {
  Container,
  Nav,
  NavItem,
  Navbar,
  NavbarOffcanvas,
  NavbarToggle,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasTitle,
} from "react-bootstrap";
import MainNavWrapper from "@/app/components/main-nav-wrapper";

import mainLogo from "@/assets/images/Logo.svg";

const MainNav = () => {
  return (
    <MainNavWrapper>
      <Container>
        <Navbar expand="lg">
          <header className="main-nav d-flex flex-fill justify-content-between">
            <div className="main-nav__logo">
              <span className="visually-hidden">Page d&apos;accueil</span>

              <Link href={"/"}>
                <Image src={mainLogo} alt="Scavezzoni Méloé Logo" priority />
              </Link>
            </div>

            <NavbarToggle aria-controls="main-nav" />

            <NavbarOffcanvas
              id={"main-nav"}
              aria-labelledby={"main-nav-label"}
              placement="end"
            >
              <OffcanvasHeader closeButton>
                <OffcanvasTitle id={"main-nav-label"}>
                  <Link href={"/"}>
                    <Image
                      src={mainLogo}
                      alt="Scavezzoni Méloé Logo"
                      priority
                    />
                  </Link>
                </OffcanvasTitle>
              </OffcanvasHeader>
              <OffcanvasBody>
                <Nav className="justify-content-end flex-grow-1">
                  <Navbar className="navbar-nav">
                    {mainMenu.map((item, index) => {
                      const isBtn = item.className?.includes("btn");

                      return (
                        <NavItem as={"li"} key={index}>
                          <Link
                            href={item.href}
                            className={
                              (!isBtn ? "nav-link " : "") +
                              (item.className || "")
                            }
                          >
                            {item.title}
                          </Link>
                        </NavItem>
                      );
                    })}
                  </Navbar>
                </Nav>
              </OffcanvasBody>
            </NavbarOffcanvas>
          </header>
        </Navbar>
      </Container>
    </MainNavWrapper>
  );
};

export default MainNav;
