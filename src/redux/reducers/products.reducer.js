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
    case types.CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case types.UPDATE_PRODUCT:
      const { id, data } = action.payload;
      const currentProduct = state.products.find(
        (product) => product.id === id
      );
      // update product doc
      currentProduct.doc = { ...currentProduct.doc, ...data };

      const updatedProducts = state.products.map((product) =>
        product.id === id ? currentProduct : product
      );

      return {
        ...state,
        products: updatedProducts,
      };

    case types.DELETE_PRODUCT:
      const filteredProducts = state.products.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        products: filteredProducts,
      };
    default:
      return state;
  }
};

export default productsReducer;
