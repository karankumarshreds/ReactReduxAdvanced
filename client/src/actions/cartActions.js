import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../types";
import cartApi from "../utils/api";

export const cartItemAddAction = (productId, qty) => async (
  dispatch,
  getState
) => {
  try {
    console.log("RECIEVED QTY", qty);
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

export const cartItemRemoveAction = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });
  // also update the localstorage
  let cartItems = [...getState().cartState?.cartItems].filter(
    (item) => item.id !== id
  );
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
