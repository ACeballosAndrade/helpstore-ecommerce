import "./footer.css";
import { Container, Col, Row, ListGroupItem, ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { PiPhoneThin } from "react-icons/pi";
import { GoMail, GoLocation } from "react-icons/go";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <p className="footer__text mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus quidem, tempora reiciendis assumenda id culpa
              inventore nobis corrupti quam in?
            </p>
          </Col>
          <Col lg="2">
            <div className="footer__quick_links">
              <h5 className="quick_links_title">Top Categorías</h5>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Ropa</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Electrónicos</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Muebles</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Zapatos</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3">
            <div className="footer__quick_links">
              <h5 className="quick_links_title">Enlaces de interés</h5>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Servicio al cliente</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Política de privacidad</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Devoluciones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Preguntas frecuentes</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3">
            <div className="footer__quick_links">
              <h5 className="quick_links_title">Contacto</h5>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <GoMail className="_icon_link" />
                  <Link to="#">ceballosantony.10@gmail.com</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <PiPhoneThin className="_icon_link" />
                  <Link to="#">+57 3147292024</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <GoLocation className="_icon_link" />
                  <Link to="#">Cali - Colombia</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} - Developed by Antony Ceballos
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
