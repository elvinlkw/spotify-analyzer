import { combineReducers } from "redux";
// Reducers
import auth from "./auth";
import player from "./player";

export default combineReducers({
  auth,
  player,
});
