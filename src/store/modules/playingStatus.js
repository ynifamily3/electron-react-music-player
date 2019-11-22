// import produce from "immer";

const TOGGLEPLAYPAUSE = "playingStatus/togglePlayPause";
const SETPOSITION = "playingStatus/setPosition";
const SETALL = "playingStatus/setAll";
const TOGGLEPLAYLISTOPENCLOSE = "playingStatus/togglePlaylistOpenClose";
const SETVOLUME = "playingStatus/setVolume";
const SETSOURCE = "playingStatus/setSource";

export const togglePlayPause = () => ({ type: TOGGLEPLAYPAUSE });
export const setPosition = payload => ({ type: SETPOSITION, payload }); // will be changed frequently
export const setAll = payload => ({ type: SETALL, payload }); // 노래를 처음 시작할때나 다음 곡으로 바꿨을 때 모든 데이터를 갱신한다.
export const togglePlayListOpenClose = () => ({
  type: TOGGLEPLAYLISTOPENCLOSE
});
export const setVolume = payload => ({ type: SETVOLUME, payload });
export const setSource = payload => ({ type: SETSOURCE, payload });

export const PlayPause = {
  PAUSE: 0,
  PLAYING: 1
};

const initialState = {
  playlistOpened: false,
  playingstate: PlayPause.PAUSE,
  position: 0,
  duration: 0,
  volume: 0,
  trackId: 0,
  trackTitle: "",
  artists: "",
  imageUrl: "",
  source: ""
};

export default function playingStatus(state = initialState, action) {
  switch (action.type) {
    case TOGGLEPLAYPAUSE:
      return {
        ...state,
        playingstate:
          state.playingstate === PlayPause.PAUSE
            ? PlayPause.PLAYING
            : PlayPause.PAUSE
      };
    case SETPOSITION:
      return {
        ...state,
        position: action.payload
      };
    case SETALL:
      return {
        ...state,
        ...action.payload
      };
    case TOGGLEPLAYLISTOPENCLOSE:
      return {
        ...state,
        playlistOpened: !state.playlistOpened
      };
    case SETVOLUME:
      return {
        ...state,
        volume: action.payload
      };
    case SETSOURCE:
      return {
        ...state,
        source: action.payload
      };
    default:
      return state;
  }
}
