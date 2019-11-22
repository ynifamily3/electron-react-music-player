import { combineReducers } from "redux";
import webView from "./webView";
import deviceId from "./deviceId";
import playingStatus from "./playingStatus";

export default combineReducers({
  webView,
  deviceId,
  playingStatus
});
