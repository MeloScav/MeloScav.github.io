import { PropsWithChildren } from "react";
import { Col } from "react-bootstrap";

interface IFooterColumnProps extends PropsWithChildren {
  title: string;
}

const FooterColumn = (props: IFooterColumnProps) => {
  const { title, children } = props;

  return (
    <Col xs={12} md={4} xxl={3}>
      <h3 className="fs-5 mb-3">{title}</h3>
      {children}
    </Col>
  );
};

export default FooterColumn;
