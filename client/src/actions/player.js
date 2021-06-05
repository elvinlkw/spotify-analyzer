import { PLAYER_INIT, PLAYER_ERROR, SET_CURRENT } from "./types";
import API from "../api/axiosInstance";

export const initPlayer = (device_id) => {
  return { type: PLAYER_INIT, payload: device_id };
};

export const playerError = () => {
  return { type: PLAYER_ERROR };
};

export const getPlayerState = () => async (dispatch) => {
  try {
    const { data } = await API.get("/api/player");
    dispatch({ type: SET_CURRENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
