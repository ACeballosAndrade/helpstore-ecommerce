import {
  setProductId,
  setProducts,
  startLoadingProducts,
} from "./ProductSlice";
import { productApi } from "../../../api/productApi";

export const getProducts = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingProducts());
    const { data } = await productApi.get(`/products`);

    dispatch(setProducts({ products: data }));
  };
};

export const getProductsByCat = (cat = "") => {
  return async (dispatch, getState) => {
    dispatch(startLoadingProducts());
    const { data } = await productApi.get(`/products/?categoryId=${cat}`);

    dispatch(setProducts({ products: data }));
  };
};

export const getProductsByTitle = (test = "") => {
  return async (dispatch, getState) => {
    dispatch(startLoadingProducts());
    const { data } = await productApi.get(`/products/?title=${test}`);

    dispatch(setProducts({ products: data }));
  };
};

export const getProductsById = (idN = "") => {
  return async (dispatch, getState) => {
    dispatch(startLoadingProducts());
    const { data } = await productApi.get(`/products/${idN}`);
    console.log(data);
    dispatch(setProductId({ productId: data }));
  };
};
