import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
  productState: productReducer,
  cartState: cartReducer,
  userState: userReducer,
});
