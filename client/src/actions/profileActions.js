import {
  PROFILE_DETAILS_REQUEST,
  PROFILE_DETAILS_SUCCESS,
  PROFILE_DETAILS_FAIL,
} from '../types';
import profileApi from '../utils/api';

// headers config
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

// fetches profile info for the logged in user
export const profileFetchAction = () => async (dispatch, getState) => {
  const { token } = getState().userState?.userInfo;
  dispatch({
    type: PROFILE_DETAILS_REQUEST,
  });
  try {
    const { data } = await profileApi.get('/api/user/profile', {
      headers: { ...config.headers, 'x-auth-token': token },
    });
    dispatch({
      type: PROFILE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_DETAILS_FAIL,
      payload: err?.response?.data?.errors[0]?.message,
    });
  }
};
