import Link from "next/link";
import { Container, Row } from "react-bootstrap";
import FooterColumn from "./footer-column";
import SpriteSVG from "./sprite-svg";
import DecorationIcon from "./decorations/decoration-icon";
import { getFooterMenu } from "../services/get-menus";
import { getSocials } from "../services/get-socials";
import { MAIL } from "@/data/constants";

const MainFooter = () => {
  const menu = getFooterMenu();
  const socials = getSocials();

  return (
    <footer className="main-footer bg-primary text-white">
      <Container>
        <h2 className="main-footer__title position-relative">
          Contactez-moi et commençons à travailler ensemble
          <DecorationIcon
            iconId={"emoticon-happy"}
            className="main-footer__smiley decoration-icon--responsive"
            width="104px"
            style={{ transform: "rotate(24deg)" }}
          />
        </h2>

        <Row className="gy-5">
          <FooterColumn title="Contact">
            <a href={`mailto:${MAIL}`} className="main-footer__link fs-7">
              {MAIL}
            </a>
          </FooterColumn>

          <FooterColumn title="Menu">
            <ul className="list-unstyled m-0">
              {menu.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="main-footer__link fs-7">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Réseaux sociaux">
            <ul className="main-footer__socials list-unstyled m-0">
              {socials.map((social) => (
                <li key={social.iconId}>
                  <a
                    href={social.href}
                    className="main-footer__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="visually-hidden">{social.name}</span>
                    <SpriteSVG iconId={social.iconId} />
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>
        </Row>

        <Link href={"/"} className="main-footer__logo">
          <span className="visually-hidden">Page d&apos;accueil</span>
          <SpriteSVG iconId={"logo"} isDecorationIcon />
        </Link>
      </Container>
    </footer>
  );
};

export default MainFooter;
