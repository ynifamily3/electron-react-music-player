import React from "react";
import "./PlayingProgress.scss";

const PlayingProgress = props => {
  return (
    <div className="PlayingProgress">
      <div className="barProgress">
        <div className="barLoad"></div>
        <div className="barPlay">
          <span className="handle"></span>
          <span className="time no-drag">{props.position}</span>
        </div>
        <span className="timeTooltip">01:00</span>
      </div>
    </div>
  );
};

export default PlayingProgress;
