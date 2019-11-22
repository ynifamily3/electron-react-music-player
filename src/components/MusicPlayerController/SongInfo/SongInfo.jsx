import React from "react";
import "./SongInfo.css";

const SongInfo = props => {
  // console.log("이 부분이 리 렌더링 되어야 합니다.");
  return (
    <div className="SongInfo">
      <a href="#" className="thumb">
        <img
          src={props.imageUrl}
          className=""
          alt={props.trackTitle}
          width="45"
          height="45"
        />
      </a>
      <div className="infoArea">
        <em className="songArea">
          <span className="song">
            <a href="#" className="link">
              {props.trackTitle}
            </a>
          </span>
        </em>
        <span className="artist">
          <span>
            <span>
              <a href="#" className="linkArtist">
                {props.artists}
              </a>
            </span>
          </span>
        </span>
      </div>
      <div className="optionArea">
        <a href="#" className="btnLike on"></a>
        <a href="#" className="btnLyrics"></a>
        <div className="dropdownWrap">
          <a href="#" className="btnOption"></a>
          <div className="lyOption">
            <div className="lySongInfo"></div>
            <a href="#" className="lyItem"></a>
            <a href="#" className="lyItem"></a>
            <a href="#" className="snsShare"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongInfo;
