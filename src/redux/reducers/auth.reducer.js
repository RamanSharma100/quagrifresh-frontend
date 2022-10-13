import * as types from "../actionTypes/auth.actionTypes";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isAuthenticated: true,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
