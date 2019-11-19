import React from 'react';
import './ControlSection.scss';

const ControlSection = props => {
  return <div className="ControlSection">
    <div className="controlArea">
      <a href="#" title="재생/일시정지 선택" className="btnNow"></a>
      <a href="#" className="btnPlayPrev"></a>
      <a href="#" className="btnPlayNext"></a>
      <a href="#" title="재생 방법 변경" className="btnShuffle"></a>
      <a href="#" title="반복 재생 설정" className="btnRepeat"></a>
    </div>
  </div>
};

export default ControlSection;
