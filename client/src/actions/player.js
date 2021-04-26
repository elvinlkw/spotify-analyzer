import { PLAYER_INIT, PLAYER_ERROR } from "./types";

export const initPlayer = (device_id) => {
  return { type: PLAYER_INIT, payload: device_id };
};

export const playerError = () => {
  return { type: PLAYER_ERROR };
};
