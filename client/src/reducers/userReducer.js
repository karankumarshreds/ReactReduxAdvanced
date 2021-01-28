import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_LOGOUT,
} from "../types";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true, userInfo: null };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, userInfo: null, error: action.payload };
    case USER_LOGIN_LOGOUT:
      return { loading: false, userInfo: null };
    default:
      return state;
  }
};
