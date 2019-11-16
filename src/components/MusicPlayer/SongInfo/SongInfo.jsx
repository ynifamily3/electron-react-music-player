import React from 'react';
import './SongInfo.css';

const SongInfo = props => {
  return (
  <div className="SongInfo">
    <a href="#" className="thumb">
      <img src="https://musicmeta-phinf.pstatic.net/album/002/859/2859502.jpg?type=r100Fll&v=20190220115904" className="" alt="노래제목" width="45" height="45" />
    </a>
    <div className="infoArea">
      <em className="songArea">
        <span className="song">
          <a href="#" className="link">노래제목 1234567890</a>
        </span>
      </em>
      <span className="artist">
        <span>
          <span>
            <a href="#" className="linkArtist">Ogura Yui</a>
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
          <a href="#" className="lyItem">좋아요 취소</a>
          <a href="#" className="lyItem">내 플레이리스트 추가</a>
          <a href="#" className="snsShare">공유</a>
        </div>
      </div>
    </div>
  </div>
  )
};

export default SongInfo;
