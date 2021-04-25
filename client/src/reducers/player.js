import { PLAYER_INIT, PLAYER_ERROR } from "../actions/types";

const initialState = {
  isReady: false,
  isError: false,
};

const player = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PLAYER_INIT:
      return {
        ...state,
        isReady: true,
        isError: false,
      };
    case PLAYER_ERROR:
      return {
        ...state,
        isReady: false,
        isError: true,
      };
  }
};

export default player;
