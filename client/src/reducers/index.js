import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { productReducer } from './productReducer';
import { userReducer } from './userReducer';
import { profileReducer } from './profileReducer';

export default combineReducers({
  productState: productReducer,
  cartState: cartReducer,
  userState: userReducer,
  profileState: profileReducer,
});
