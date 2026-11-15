import { Container } from "react-bootstrap";
import DecorationColumns from "./decorations/decoration-columns";
import ContactCtaDecorations from "./decorations/contact-cta-decorations";
import { MAIL } from "@/data/constants";

const ContactCta = () => {
  return (
    <div className="overflow-x-clip">
      <Container>
        <div className="position-relative py-section py-section--1 text-center">
          <DecorationColumns />
          <ContactCtaDecorations />

          <h2 className="h3 text-black mb-6">
            Ça vous a plu ?
            <br />
            N’hésitez pas à me contacter !
          </h2>
          <a href={`mailto:${MAIL}`} className="btn btn-primary">
            Contactez-moi
          </a>
        </div>
      </Container>
    </div>
  );
};

export default ContactCta;
