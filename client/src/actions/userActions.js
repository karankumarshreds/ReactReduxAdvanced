import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
} from '../types';
import userApi from '../utils/api';
import history from '../utils/history';

// headers config
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const signin = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const { data } = await userApi.post(
      '/api/user/signin',
      { email, password },
      config
    );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    history.push('/');
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: err?.response?.data?.errors[0]?.message,
    });
  }
};

export const signout = () => async (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
  });
  localStorage.removeItem('userInfo');
  history.push('/');
};

export const signup = ({ name, email, password }) => async (dispatch) => {
  try {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    });
    const { data } = await userApi.post(
      '/api/user/signup',
      {
        name,
        email,
        password,
      },
      config
    );
    localStorage.setItem('userInfo', JSON.stringify(data));
    history.push('/');
    dispatch({
      type: USER_SIGNUP_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload: err?.response?.data?.errors[0]?.message,
    });
  }
};
