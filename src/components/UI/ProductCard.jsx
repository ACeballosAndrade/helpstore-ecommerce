import { motion } from "framer-motion";
import "../../styles/productCard.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import MySlider from "../slider/MySlider";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/slices/cart/CartSlice";
import {toast} from 'react-toastify'


const ProductCard = ({ item }) => {

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: item.id,
      title: item.title,
      price: item.price,
      images: item.images[0]
    }));
    toast.success("Producto agregado al carrito");
  }

  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product__item">
        <Link to={`/product/${item.id}`}>
          <div className="product__img">
            <MySlider slides={item.images} />
          </div>
          <div className="p-2 product__info">
            <h3 className="product__name">{item.title}</h3>
            <span>{item.category.name}</span>
          </div>
        </Link>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="_price">{`$${item.price}`}</span>
          <motion.span whileTap={{ scale: 1.2 }} className="_icon_add" onClick={addToCart}>
            Agregar al carrito
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

ProductCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default ProductCard;
