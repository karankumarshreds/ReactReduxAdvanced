import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../types";
import cartApi from "../utils/api";

export const cartItemAddAction = (productId, qty) => async (
  dispatch,
  getState
) => {
  try {
    const { data } = await cartApi.get(`/api/product/${productId}`);
    const { id, name, image, price, countInStock } = data;
    dispatch({
      type: CART_ADD_ITEM,
      payload: { id, name, image, price, countInStock, qty },
    });
    // also save the cart state in localstorage
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cartState.cartItems)
    );
  } catch (err) {
    console.log(err);
  }
};

const cartITemRemoveAction = (id) => async (dispatch) => {};
