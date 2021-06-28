import { AUTH_SUCCESS, AUTH_ERROR, GET_AUTH, GET_USER, LOG_OUT } from "./types";
import API from "../api/axiosInstance";
import setAuthToken from "../api/setAuthToken";
import moment from "moment";

let myInterval = null;

// Convert authorization code into access token
export const getAccessToken =
  (authCode, push = false) =>
  (dispatch) => {
    API.post("/api/auth", { code: authCode })
      .then(({ data }) => {
        sessionStorage.setItem("token", JSON.stringify(data));
        dispatch(authSuccess(data.access_token));
        setAuthToken(data.access_token);
        dispatch(checkValidToken(data.expires_at));
        dispatch(getUser());
        if (!push) return;
      })
      .catch((err) => {
        console.log(err);
        dispatch(authError());
      });
  };

// Run this to make sure the user is allowed to access the page
export const getUser = () => async (dispatch) => {
  try {
    const res = await API.get("/api/auth");
    dispatch({ type: GET_USER, payload: res.data });
  } catch (error) {
    console.log(error.response.data);
    dispatch(authError());
  }
};

export const checkValidToken = (expires_at) => (dispatch) => {
  const interval = 1000; // 1 sec
  myInterval = setInterval(() => {
    const now = moment().unix();
    if (now > expires_at) {
      alert("Token Expired");
      dispatch(authError);
    }
  }, interval);
};

export const loadUser = (token) => (dispatch) => {
  dispatch({ type: GET_AUTH, payload: token });
  dispatch(getUser());
};

export const authSuccess = (token) => {
  return { type: AUTH_SUCCESS, payload: token };
};

export const authError = () => {
  clearInterval(myInterval);
  return { type: AUTH_ERROR };
};

export const logout = () => {
  clearInterval(myInterval);
  return { type: LOG_OUT };
};
