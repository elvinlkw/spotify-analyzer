import { SET_ALERT, HIDE_ALERT } from 'actions/types';
import { v4 as uuidv4 } from 'uuid';

export const setAlert =
  ({ type, text, title, timeout = 3000 }) =>
  dispatch => {
    const newAlert = {
      id: uuidv4(),
      type,
      title,
      text,
    };

    dispatch({ type: SET_ALERT, payload: newAlert });

    setTimeout(
      () => dispatch({ type: HIDE_ALERT, payload: newAlert.id }),
      timeout
    );
  };
