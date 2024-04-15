import "../styles/cart.css";
import MetaTitle from "../components/header/MetaTitle";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { PiTrash } from "react-icons/pi";
import { cartActions } from "../store/slices/cart/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <MetaTitle title="Carrito">
      <CommonSection title="Carrito de Compras" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">El carrito está vacío</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Cant</th>
                      <th>Borrar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-betwen">
                  Subtotal:
                </h6>
                <span className="fs-4 fw-bold">${totalAmount}</span>
                <div>
                  <button className="_icon_add w-100">
                    <Link to="/category">Continuar comprando</Link>
                  </button>
                  <button className="_icon_add w-100 mt-3">
                    <Link to="/checkout">Ir a pagar</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </MetaTitle>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <tr>
      <td>
        <img src={item.images} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>{`$${item.price}`}</td>
      <td>1</td>
      <td>
        <PiTrash className="_delete_button" onClick={deleteProduct} />
      </td>
    </tr>
  );
};

export default Cart;
