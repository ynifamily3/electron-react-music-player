import React from "react";
import "./MusicPlayer.css";

import SongInfo from "./SongInfo/SongInfo";
import ControlSection from "./ControlSection/ControlSection";
import PlayingProgress from "./PlayingProgress/PlayingProgress";
import PlayTime from "./PlayTime/PlayTime";
import VolumeArea from "./VolumeArea/VolumeArea";
import BtnPlaylistArea from "./BtnPlaylistArea/BtnPlaylistArea";

const MusicPlayer = props => {
  // alert(JSON.stringify(props));
  const {
    playlistOpened,
    playingstate,
    position,
    duration,
    volume,
    trackId,
    trackTitle,
    artists,
    imageUrl
  } = props.playingStatus;
  // alert(volume);
  return (
    <div className="MusicPlayer">
      <SongInfo trackTitle={trackTitle} artists={artists} imageUrl={imageUrl} />
      <ControlSection />
      <PlayingProgress position={position} />
      <PlayTime position={position} />
      <VolumeArea volume={volume} />
      <BtnPlaylistArea playlistOpened={playlistOpened} />
    </div>
  );
};

export default MusicPlayer;
