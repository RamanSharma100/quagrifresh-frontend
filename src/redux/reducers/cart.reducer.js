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
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
        cartTotal: state.cartTotal + payload.price,
        cartTotalQuantity: state.cartTotalQuantity + 1,
      };
    case types.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload.id),
        cartTotal: state.cartTotal - payload.price,
        cartTotalQuantity: state.cartTotalQuantity - 1,
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
    default:
      return state;
  }
};

export default cartReducer;
