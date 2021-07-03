import { combineReducers } from 'redux';
// Reducers
import auth from './auth';
import player from './player';
import alert from './alert';

export default combineReducers({
  auth,
  player,
  alert,
});
