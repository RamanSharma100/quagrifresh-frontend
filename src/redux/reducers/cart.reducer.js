import * as types from "../actionTypes/cart.actionTypes";

const initialState = {
  cartItems: [],
  checkedOut: false,
  cartId: null,
  cartTotal: 0,
  cartTotalQuantity: 0,
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_CART:
      return {
        ...state,
        cartItems: payload.cartItems,
        checkedOut: payload.checkedOut,
        cartId: payload.cartId,
        cartTotal: payload.cartTotal,
        cartTotalQuantity: payload.cartTotalQuantity,
      };
    case types.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
        checkedOut: false,
        cartTotal: 0,
        cartTotalQuantity: 0,
      };
    case types.ADD_CART_ITEM:
      // check if item already exists in cart
      const itemExists = state.cartItems.find(
        (item) => item.product === payload.product
      );

      if (itemExists) {
        localStorage.setItem(
          "quagri_cart",
          JSON.stringify({
            ...state,
            cartItems: state.cartItems.map((item) =>
              item._id === payload._id
                ? {
                    ...item,
                    quantity:
                      parseInt(item.quantity) + parseInt(payload.quantity),
                  }
                : item
            ),
            userId,
            checkedOut: false,
            cartTotal:
              parseFloat(state.cartTotal) +
              parseFloat(payload.price) * parseInt(payload.quantity),
            cartTotalQuantity:
              parseInt(state.cartTotalQuantity) + parseInt(payload.quantity),
          })
        );
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === payload._id
              ? {
                  ...item,
                  quantity:
                    parseInt(item.quantity) + parseInt(payload.quantity),
                }
              : item
          ),
          userId,
          checkedOut: false,
          cartTotal:
            parseFloat(state.cartTotal) +
            parseFloat(payload.price) * parseInt(payload.quantity),
          cartTotalQuantity:
            parseInt(state.cartTotalQuantity) + parseInt(payload.quantity),
        };
      } else {
        localStorage.setItem(
          "quagri_cart",
          JSON.stringify({
            ...state,
            cartItems: [...state.cartItems, payload],
            checkedOut: false,
            cartTotal:
              parseFloat(state.cartTotal) +
              parseFloat(payload.price) * parseInt(payload.quantity),
            cartTotalQuantity:
              parseInt(state.cartTotalQuantity) + parseInt(payload.quantity),
          })
        );

        return {
          ...state,
          cartItems: [...state.cartItems, payload],
          checkedOut: false,
          cartTotal:
            parseFloat(state.cartTotal) +
            parseFloat(payload.price) * parseInt(payload.quantity),
          cartTotalQuantity:
            parseInt(state.cartTotalQuantity) + parseInt(payload.quantity),
        };
      }

    case types.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: cartObj.cartItems.filter(
          (item) => item.product !== cartItem.product
        ),
        cartTotal:
          parseFloat(cartObj.cartTotal) -
          parseFloat(cartItem.price) * parseInt(cartItem.quantity),
        cartTotalQuantity:
          parseInt(cartObj.cartTotalQuantity) - parseInt(cartItem.quantity),
      };
    case types.UPDATE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === payload.id) {
            return payload;
          }
          return item;
        }),
        cartTotal: state.cartTotal + payload.price,
      };

    case types.UPDATE_CART:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
