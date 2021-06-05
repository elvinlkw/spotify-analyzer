import {
  PLAYER_INIT,
  PLAYER_ERROR,
  SET_CURRENT,
  SET_TRACKLIST,
  SET_PLAY_STATE,
  CLEAR_TRACKLIST,
} from "../actions/types";

const initialState = {
  isReady: false,
  isError: false,
  isPlaying: false,
  current: null,
  tracklist: null,
  deviceId: null,
};

const player = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PLAYER_INIT:
      return {
        ...state,
        isReady: true,
        isError: false,
        deviceId: payload,
      };
    case PLAYER_ERROR:
      return {
        ...state,
        isReady: false,
        isError: true,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
      };
    case SET_TRACKLIST:
      return {
        ...state,
        tracklist: payload,
      };
    case SET_PLAY_STATE:
      return {
        ...state,
        isPlaying: payload,
      };
    case CLEAR_TRACKLIST:
      return {
        ...state,
        tracklist: null,
        current: null,
      };
    default:
      return state;
  }
};

export default player;
