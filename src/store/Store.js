import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slices/product/ProductSlice";
import CartSlice from "./slices/cart/CartSlice";

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: CartSlice,
  },
});
