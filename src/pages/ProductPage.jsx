import { useParams } from "react-router";
import MetaTitle from "../components/header/MetaTitle";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";
import MySlider from "../components/slider/MySlider";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsById } from "../store/slices/product/thunks";
import "../styles/product-detail.css";
import { motion } from "framer-motion";
import { cartActions } from "../store/slices/cart/CartSlice";
import { toast } from "react-toastify";

const ProductPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { productId = {}, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsById(id));
    console.log(productId);
  }, []);

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: productId.id,
        productName: productId.title,
        proce: productId.price,
        image: productId.images[0],
      })
    );
    toast.success("Producto agregado al carrito");
  };

  return (
    <MetaTitle title={productId.title}>
      <CommonSection title={productId.title} />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              {/* <MySlider slides={productId.images} /> */}
              <img src={productId.images} alt="" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productId.title}</h2>
                <div className="d-flex align-items-center gap-5">
                  <span className="product__price">{`$${productId.price}`}</span>
                </div>
                <p className="mt-3">{productId.description}</p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="_icon_add"
                  onClick={addToCart}
                >
                  Agregar al Carrito
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </MetaTitle>
  );
};

export default ProductPage;
