import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoading: false,
    productId: {},
  },
  reducers: {
    startLoadingProducts: (state) => {
      state.isLoading = true;
    },
    setProducts: (state, action) => {
      state.products = action.payload.products;
      state.isLoading = false;
    },
    setProductId: (state, action) => {
      state.productId = action.payload.productId;
    },
  },
});

export const { startLoadingProducts, setProducts, setProductId } =
  productSlice.actions;
