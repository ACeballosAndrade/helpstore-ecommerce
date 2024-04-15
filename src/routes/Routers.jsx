import { Routes, Route } from "react-router-dom";
//Navigate
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import CategoryPage from "../pages/CategoryPage";
import Checkout from "../pages/Checkout";
import ProductPage from "../pages/ProductPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="category" element={<CategoryPage />} />
      <Route path="product/:id" element={<ProductPage />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  );
};

export default Router;
