import * as types from "../actionTypes/products.actionTypes";

const initialState = {
  isLoading: true,
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case types.SET_PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
