import { combineReducers } from "redux";
import webView from "./webView";
import deviceId from "./deviceId";

export default combineReducers({
  webView,
  deviceId
});
