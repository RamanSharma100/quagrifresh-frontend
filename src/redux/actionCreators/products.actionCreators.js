import * as types from "../actionTypes/products.actionTypes";
import axios from "axios";
import { toast } from "react-toastify";

// actions
const setProducts = (products) => ({
  type: types.GET_PRODUCTS,
  payload: products,
});

const setProductsLoading = (payload) => ({
  type: types.SET_PRODUCTS_LOADING,
  payload,
});

const updateProduct = (payload) => ({
  type: types.UPDATE_PRODUCT,
  payload,
});

const deleteProduct = (id) => async (dispatch) => ({
  type: types.DELETE_PRODUCT,
  payload: id,
});

const createProduct = (payload) => ({
  type: types.CREATE_PRODUCT,
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

export const updateProductAction =
  (product, id, token, setSuccess) => async (dispatch) => {
    const endPoint = import.meta.env.QUAGRI_ENDPOINT_URL;
    const { data, status } = await axios.post(
      `${endPoint}/api/product/update/${id}`,
      product,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (status === 200) {
      await dispatch(updateProduct({ data: product, id }));
      toast.success("Product updated successfully");
      setSuccess(true);
      console.log(data);
    } else {
      console.log("error");
      console.log(data);
      toast.error("Error updating product");
    }
  };

export const deleteProductAction =
  (id, token, setSuccess) => async (dispatch) => {
    const endPoint = import.meta.env.QUAGRI_ENDPOINT_URL;
    const { data, status } = await axios.post(
      `${endPoint}/api/product/delete/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (status === 200) {
      await dispatch(deleteProduct(id));
      toast.success("Product deleted successfully");
      setSuccess(true);
      console.log(data);
    } else {
      console.log("error");
      console.log(data);
      toast.error("Error deleting product");
    }
  };

export const createProductAction =
  (product, token, setSuccess) => async (dispatch) => {
    const endPoint = import.meta.env.QUAGRI_ENDPOINT_URL;
    const { data, status } = await axios.post(
      `${endPoint}/api/product/create`,
      product,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (status === 200) {
      // await dispatch(createProduct(data.product));
      toast.success("Product created successfully");
      setSuccess(true);
      console.log(data);
    } else {
      console.log("error");
      console.log(data);
      toast.error("Error creating product");
    }
  };
