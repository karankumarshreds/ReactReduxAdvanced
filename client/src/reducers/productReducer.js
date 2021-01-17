import _ from "lodash";
import {
  PRODUCTS_LIST_FAILED,
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCT_FETCH_FAIL,
  PRODUCT_FETCH_SUCCESS,
} from "../types";

export const productReducer = (
  state = { loading: false, error: false, products: {} },
  action
) => {
  switch (action.type) {
    /*
      handling list of products
    */
    case PRODUCTS_LIST_REQUEST:
      return { ...state, loading: true, products: {} };
    case PRODUCTS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        // change incoming array to object with id as keys
        products: { ..._.mapKeys(action.payload, "id") },
      };
    case PRODUCTS_LIST_FAILED:
      return { ...state, loading: false, error: action.payload, products: {} };

    /*
      handling a single product
    */
    case PRODUCT_FETCH_SUCCESS:
      return {
        ...state,
        error: false,
        products: {
          ...state.products,
          [action.payload.id]: action.payload,
        },
      };
    case PRODUCT_FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
