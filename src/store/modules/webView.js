import * as TYPE from "../types";

const ACTIVATE_WEBVIEW = "webView/ACTIVATE_WEBVIEW";

export const ActivateWebview = view => ({
  type: ACTIVATE_WEBVIEW,
  activatedWebView: view
});

const initialState = {
  activatedWebView: TYPE.TODAY
};

export default function webView(state = initialState, action) {
  switch (action.type) {
    case ACTIVATE_WEBVIEW:
      return {
        ...state,
        activatedWebView: action.activatedWebView
      };
    default:
      return state;
  }
}
