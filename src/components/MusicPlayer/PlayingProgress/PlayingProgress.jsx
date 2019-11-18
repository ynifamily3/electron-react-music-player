import React from 'react';
import './PlayingProgress.scss';

const PlayingProgress = props => {
  return <div className="PlayingProgress">
    <div className="barProgress">
      <div className="barLoad"></div>
      <div className="barPlay">
        <span className="handle"></span>
        <span className="time no-drag">00:00</span>
      </div>
      <span className="timeTooltip">04:48</span>
    </div>
  </div>
};

export default PlayingProgress;
