import { PLAYER_INIT, PLAYER_ERROR } from "./types";

export const initPlayer = () => {
  return { type: PLAYER_INIT };
};

export const playerError = () => {
  return { type: PLAYER_ERROR };
};
