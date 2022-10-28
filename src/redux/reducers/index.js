import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import cartReducer from "./cart.reducer";
import eventsReducer from "./events.reducer";
import productsReducer from "./products.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  events: eventsReducer,
  cart: cartReducer,
});

export default rootReducer;
