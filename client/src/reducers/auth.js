import {
  GET_AUTH,
  GET_USER,
  AUTH_SUCCESS,
  AUTH_ERROR,
  LOG_OUT,
} from "../actions/types";

const initialState = {
  token: null,
  loading: true,
  error: false,
  isLoggedIn: false,
  user: null,
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_AUTH:
    case AUTH_SUCCESS:
      return {
        ...state,
        token: payload,
        loading: false,
        error: false,
        isLoggedIn: true,
      };
    case GET_USER:
      return {
        ...state,
        user: payload,
      };
    case AUTH_ERROR:
      sessionStorage.removeItem("token");
      return {
        token: null,
        loading: false,
        error: true,
        isLoggedIn: false,
        user: null,
      };
    case LOG_OUT:
      sessionStorage.removeItem("token");
      return {
        token: null,
        loading: false,
        error: false,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default auth;
