import React from "react";
import './MusicPlayer.css';

import SongInfo from "./SongInfo/SongInfo";
// import ControlSection from "./ControlSection/ControlSection";
// import PlayingProgress from "./PlayingProgress/PlayingProgress";
// import PlayTime from "./PlayTime/PlayTime";
// import VolumeArea from "./VolumeArea/VolumeArea";
// import BtnPlaylistArea from "./BtnPlaylistArea/BtnPlaylistArea";

const electron = window.require('electron');
const ipcRenderer  = electron.ipcRenderer;

ipcRenderer.on("onplay", (event, arg) => {
  
});
ipcRenderer.on("onpause", (event, arg) => {
  
});
ipcRenderer.on("ontimeupdate", (event, arg) => {
  // 업데이트
  const { currentTime, duration } = arg;
  console.log(`${Math.floor(currentTime)} / ${Math.floor(duration)}`);
});

const MusicPlayer = props => {
  /*
    <ControlSection />
    <PlayingProgress />
    <PlayTime />
    <VolumeArea />
    <BtnPlaylistArea />
  */
  return (
  <div className="MusicPlayer">
    <SongInfo />
  </div>
  )
};

export default MusicPlayer;
