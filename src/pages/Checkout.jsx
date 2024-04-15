import { Container, Col, Row, Form, FormGroup } from "reactstrap";
import MetaTitle from "../components/header/MetaTitle";
import CommonSection from "../components/UI/CommonSection";
import { useSelector } from "react-redux";
import "../styles/checkout.css";

const Checkout = () => {
  const totalQntty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <MetaTitle title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Información de Compra</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Nombre" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="email" placeholder="Email" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="Teléfono" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Dirección" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Ciudad" />
                </FormGroup>
              </Form>
            </Col>

            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Cantidad: <span>{totalQntty}</span>
                </h6>
                <h6>
                  Subtotal: <span>0</span>
                </h6>
                <h6>
                  Envío: <span>$0</span>
                </h6>
                <h4>
                  Total: <span>${totalAmount}</span>
                </h4>
                <h5></h5>
                <button className="_icon_add w-100">Comprar</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </MetaTitle>
  );
};

export default Checkout;
