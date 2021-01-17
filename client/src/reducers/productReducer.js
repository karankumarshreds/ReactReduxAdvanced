import _ from "lodash";
import {
  PRODUCTS_LIST_FAILED,
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
} from "../types";

export const productReducer = (
  state = { loading: false, error: false, products: {} },
  action
) => {
  switch (action.type) {
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
      return { loading: false, error: action.payload, products: {} };
    default:
      return state;
  }
};
