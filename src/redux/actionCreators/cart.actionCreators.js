import axios from "axios";
import { toast } from "react-toastify";
import * as types from "../actionTypes/cart.actionTypes";

// actions
export const addCart = (cart) => {
  return {
    type: types.ADD_CART,
    payload: cart,
  };
};

export const clearCart = () => {
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

const updateCartAction = (cart) => ({
  type: types.UPDATE_CART,
  payload: cart,
});

const updateCartItem = (cartItem) => {
  return {
    type: types.UPDATE_CART_ITEM,
    payload: cartItem,
  };
};

// action creators

export const getCart = (userId, token) => (dispatch) => {
  const BACKEND_URL = import.meta.env.QUAGRI_ENDPOINT_URL;
  axios
    .get(`${BACKEND_URL}/api/cart/get/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      const cart = {
        cartItems: res.data.cart.cartItems,
        checkedOut: res.data.cart.checkedOut,
        cartId: res.data.cart._id,
        cartTotal: res.data.cart.cartTotal,
        cartTotalQuantity: res.data.cart.cartTotalQuantity,
      };
      dispatch(addCart(cart));
      localStorage.setItem("quagri_cart", JSON.stringify(cart));
    })
    .catch((err) => {
      console.log("cart fetch error", err);
    });
};

export const postCart = (cart, token) => (dispatch) => {
  console.log("postCart action creator called", cart, token);
};

export const updateCart = (cart, userId, token) => (dispatch) => {
  const BACKEND_URL = import.meta.env.QUAGRI_ENDPOINT_URL;
  const cartLocal = localStorage.getItem("quagri_cart");

  if (cartLocal) {
    const cartObj = JSON.parse(cartLocal);
    const cartId = cartObj.cartId;

    if (cartId) {
      if (userId) {
        axios
          .post(
            `${BACKEND_URL}/api/cart/update/${cartId}`,
            {
              userId,
              ...cart,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            dispatch(addCart(cart));
            localStorage.setItem("quagri_cart", JSON.stringify(cart));
            toast.success("Cart updated successfully");
          })
          .catch((err) => {
            console.log("cart update error", err);
            toast.error("Cart update failed");
          });
      } else {
        dispatch(updateCartAction(cart));
        localStorage.setItem("quagri_cart", JSON.stringify(cart));
        toast.success("Cart updated successfully");
      }
    } else {
      dispatch(updateCartAction(cart));
      localStorage.setItem("quagri_cart", JSON.stringify(cart));
      toast.success("Cart updated successfully");
    }
  }
};

export const deleteCart = (cart, token) => (dispatch) => {
  console.log("deleteCart action creator called", cart, token);
};

export const postCartItem = (cartItem, userId, token) => (dispatch) => {
  const BACKEND_URL = import.meta.env.QUAGRI_ENDPOINT_URL;

  const cart = localStorage.getItem("quagri_cart");

  if (cart) {
    const cartObj = JSON.parse(cart);
    const cartId = cartObj.cartId;

    if (userId) {
      if (!cartId) {
        axios
          .post(
            `${BACKEND_URL}/api/cart/create`,
            {
              userId: userId,
              cartItems: [cartItem],
              checkedOut: false,
              cartTotal:
                parseFloat(cartItem.price) * parseInt(cartItem.quantity),
              cartTotalQuantity: parseInt(cartItem.quantity),
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            console.log("cart created", res);
            const cart = {
              cartItems: res.data.cart.cartItems,
              checkedOut: res.data.cart.checkedOut,
              cartId: res.data.cart._id,
              cartTotal: res.data.cart.cartTotal,
              cartTotalQuantity: res.data.cart.cartTotalQuantity,
            };
            dispatch(addCart(cart));
            localStorage.setItem("quagri_cart", JSON.stringify(cart));
          })
          .catch((err) => {
            console.log("cart create error", err);
          });
      } else {
        const cartItemExists = cartObj.cartItems.find(
          (item) => item.product === cartItem.product
        );
        let updatedCart;

        if (cartItemExists) {
          updatedCart = {
            cartItems: cartObj.cartItems.map((item) =>
              item.product === cartItem.product
                ? {
                    ...item,
                    quantity:
                      parseInt(item.quantity) + parseInt(cartItem.quantity),
                    price: parseFloat(item.price) + parseFloat(cartItem.price),
                  }
                : item
            ),
            userId,
            checkedOut: false,
            cartId: cartId,
            cartTotal:
              parseFloat(cartObj.cartTotal) +
              parseFloat(cartItem.price) * parseInt(cartItem.quantity),
            cartTotalQuantity:
              parseInt(cartObj.cartTotalQuantity) + parseInt(cartItem.quantity),
          };
        } else {
          updatedCart = {
            userId,
            cartItems: [...cartObj.cartItems, cartItem],
            checkedOut: false,
            cartId: cartId,
            cartTotal:
              parseFloat(cartObj.cartTotal) +
              parseFloat(cartItem.price) * parseInt(cartItem.quantity),
            cartTotalQuantity:
              parseInt(cartObj.cartTotalQuantity) + parseInt(cartItem.quantity),
          };
        }

        axios
          .post(`${BACKEND_URL}/api/cart/update/${cartId}`, updatedCart, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            console.log("cart updated", res);
            const cart = {
              cartItems: res.data.cart.cartItems,
              checkedOut: res.data.cart.checkedOut,
              cartId: res.data.cart._id,
              cartTotal: res.data.cart.cartTotal,
              cartTotalQuantity: res.data.cart.cartTotalQuantity,
            };
            console.log("cart updated", cart);
            dispatch(addCart(cart));
            localStorage.setItem("quagri_cart", JSON.stringify(cart));
          })
          .catch((err) => {
            console.log("cart update error", err);
          });
      }
    }
  } else {
    dispatch(addCartItem(cartItem));
  }
};

export const removeCartItemAction = (cartItem, userId, token) => (dispatch) => {
  const BACKEND_URL = import.meta.env.QUAGRI_ENDPOINT_URL;
  const cart = localStorage.getItem("quagri_cart");

  if (cart) {
    const cartObj = JSON.parse(cart);
    const cartId = cartObj.cartId;

    if (userId) {
      if (!cartId) {
        dispatch(removeCartItem(cartItem));
        toast.success("Item removed from cart");
      } else {
        const updatedCart = {
          userId,
          cartItems: cartObj.cartItems.filter(
            (item) => item.product !== cartItem.product
          ),
          checkedOut: false,
          cartTotal:
            parseFloat(cartObj.cartTotal) -
            parseFloat(cartItem.price) * parseInt(cartItem.quantity),
          cartTotalQuantity:
            parseInt(cartObj.cartTotalQuantity) - parseInt(cartItem.quantity),
        };

        axios
          .post(`${BACKEND_URL}/api/cart/update/${cartId}`, updatedCart, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            console.log("cart updated", res);
            const cart = {
              cartItems: res.data.cart.cartItems,
              checkedOut: res.data.cart.checkedOut,
              cartId: res.data.cart._id,
              cartTotal: res.data.cart.cartTotal,
              cartTotalQuantity: res.data.cart.cartTotalQuantity,
            };
            console.log("cart updated", cart);
            dispatch(addCart(cart));
            localStorage.setItem("quagri_cart", JSON.stringify(cart));
            toast.success("Item removed from cart");
          })
          .catch((err) => {
            console.log("cart update error", err);
            toast.error("Item could not be removed from cart");
          });
      }
    }
  } else {
    dispatch(removeCartItem(cartItem));
    toast.success("Item removed from cart");
  }
};
