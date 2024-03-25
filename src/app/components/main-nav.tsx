import { mainMenu } from "@/data/menus";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import mainLogo from "@/app/assets/images/Logo.svg";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarOffcanvas,
  NavbarToggle,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasTitle,
} from "react-bootstrap";

const MainNav = () => {
  return (
    <Container>
      <Navbar expand="lg" className="main-header">
        <header className="main-header d-flex flex-fill justify-content-between main-header">
          <div className="main-header__logo">
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
                  <Image src={mainLogo} alt="Scavezzoni Méloé Logo" priority />
                </Link>
              </OffcanvasTitle>
            </OffcanvasHeader>
            <OffcanvasBody>
              <ul className="navbar-nav">
                {mainMenu.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className={item.className}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </OffcanvasBody>
          </NavbarOffcanvas>

          {/* <nav className="main-header__navbar navbar">
           
            
          </nav> */}
        </header>
      </Navbar>
    </Container>
  );
};

export default MainNav;
