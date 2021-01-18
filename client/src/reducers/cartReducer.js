import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../types";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      // returns boolean
      const itemExists = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemExists) {
        // replace
        return {
          ...state,
          cartItems: state.cartItems.map((each) => {
            if (each.id === action.payload.id) {
              return action.payload;
            } else return each;
          }),
        };
      } else {
        // push
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
