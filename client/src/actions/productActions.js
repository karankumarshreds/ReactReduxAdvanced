import {
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAILED,
} from "../types";
import productsApi from "../utils/api";

export const productsFetchAction = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCTS_LIST_REQUEST,
    });
    const { data } = await productsApi.get("/api/product");
    dispatch({
      type: PRODUCTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCTS_LIST_FAILED,
      payload: err?.response?.data?.errors[0]?.message,
    });
  }
};
