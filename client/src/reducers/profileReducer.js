import {
  PROFILE_DETAILS_REQUEST,
  PROFILE_DETAILS_SUCCESS,
  PROFILE_DETAILS_FAIL,
} from '../types';

export const profileReducer = (
  state = { loading: false, error: false, profileDetails: null },
  action
) => {
  switch (action.type) {
    case PROFILE_DETAILS_REQUEST:
      return { ...state, error: false, loading: true, profileDetails: null };
    case PROFILE_DETAILS_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        profileDetails: action.payload,
      };
    case PROFILE_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        profileDetails: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
