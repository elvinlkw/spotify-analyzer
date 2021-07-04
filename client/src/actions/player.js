import {
  PLAYER_INIT,
  PLAYER_ERROR,
  SET_CURRENT,
  SET_PLAY_STATE,
} from './types';

export const initPlayer = device_id => {
  return { type: PLAYER_INIT, payload: device_id };
};

export const setCurrent = track => {
  return { type: SET_CURRENT, payload: track };
};

export const setPlayState = isPlaying => {
  return { type: SET_PLAY_STATE, payload: isPlaying };
};

export const playerError = () => {
  return { type: PLAYER_ERROR };
};
