import * as types from "../actionTypes/cart.actionTypes";

// actions
const addCart = (cart) => {
  return {
    type: types.ADD_CART,
    payload: cart,
  };
};

const clearCart = () => {
  return {
    type: types.CLEAR_CART,
  };
};

const addCartItem = (cartItem) => {
  return {
    type: types.ADD_CART_ITEM,
    payload: cartItem,
  };
};

const removeCartItem = (cartItem) => {
  return {
    type: types.REMOVE_CART_ITEM,
    payload: cartItem,
  };
};

const updateCartItem = (cartItem) => {
  return {
    type: types.UPDATE_CART_ITEM,
    payload: cartItem,
  };
};

// action creators

export const getCart = (userId, token) => (dispatch) => {
  console.log("getCart action creator called", userId, token);
};

export const postCart = (cart, token) => (dispatch) => {
  console.log("postCart action creator called", cart, token);
};

export const updateCart = (cart, token) => (dispatch) => {
  console.log("updateCart action creator called", cart, token);
};

export const deleteCart = (cart, token) => (dispatch) => {
  console.log("deleteCart action creator called", cart, token);
};

export const postCartItem = (cartItem, cartId, token) => (dispatch) => {
  console.log("postCartItem action creator called", cartItem, cartId, token);
};
