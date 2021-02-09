import {
  PROFILE_DETAILS_REQUEST,
  PROFILE_DETAILS_SUCCESS,
  PROFILE_DETAILS_SUCCESS,
} from '../types';
import profileApi from '../utils/api';

// headers config
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

// fetches profile info for the logged in user
export const profileFetchAction = () => async (dispactch, getState) => {
  const { token } = getState().userState?.userInfo;
  dispactch({
    type: PROFILE_DETAILS_REQUEST,
  });
  const { data } = await profileApi.get('/api/user/profile', {
    headers: { ...config.headers, 'x-auth-token': token },
  });
  dispatch({
    type: PROFILE_DETAILS_SUCCESS,
    payload: data,
  });
};
