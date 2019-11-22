const DEVICEID = "deviceid/DEVICEID";

export const setDeviceID = payload => ({
  type: DEVICEID,
  action: payload
});

const initialState = {
  deviceId: ""
};

export default function devicdId(state = initialState, action) {
  switch (action.type) {
    case DEVICEID:
      return {
        ...state,
        deviceId: action.action
      };
    default:
      return state;
  }
}
