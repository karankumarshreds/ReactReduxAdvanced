import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../types";
import userApi from "../utils/api";

// headers config
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const signin = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const { data } = await userApi.post(
      "/ai/user/signin",
      { email, password },
      config
    );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        err?.response?.data?.errors[0]?.message || "Something went wrong",
    });
  }
};
