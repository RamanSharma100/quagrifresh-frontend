import * as types from "../actionTypes/products.actionTypes";
import axios from "axios";

// actions
const setProducts = (products) => ({
  type: types.GET_PRODUCTS,
  payload: products,
});

const setProductsLoading = (payload) => ({
  type: types.SET_PRODUCTS_LOADING,
  payload,
});

// action creators
export const getProducts = () => async (dispatch) => {
  console.log("getProducts");

  dispatch(setProductsLoading(true));
  const endPoint = import.meta.env.QUAGRI_ENDPOINT_URL;
  const { data, status } = await axios.get(`${endPoint}/api/product/get/all`);
  if (status === 200) {
    await dispatch(setProducts(data.products.rows));
    console.log(data);
    dispatch(setProductsLoading(false));
  } else {
    dispatch(setProductsLoading(false));
    dispatch(setProductsLoading([]));
    console.log("error");
    console.log(data);
  }
};
