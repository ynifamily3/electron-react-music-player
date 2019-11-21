import React from "react";
import "./Digging.scss";

const Digging = props => {
  return (
    <div className="digging-container">
      <div className="today_mag pick">
        <div className="link_wrap">
          <a href="#" className="link">
            <div className="thumb">
              <img
                src="https://music-phinf.pstatic.net/20191119_183/15741403469818EnVa_PNG/Artist_type_%BF%A1%C0%D5%BA%BC%C5%B8%BF%EE.png?type=w720"
                className="img_thumb"
              />
            </div>
            <div className="text_area">
              <img
                src="https://music-phinf.pstatic.net/20190702_287/1562066500033t4gp0_PNG/icon_pick.png"
                alt="VIBE Pick"
                className="icon_mag"
              />
              <strong className="title">
                {`이주의 디깅 #33
                  뉴잭스윙의 리듬 속으로`}
              </strong>
              <div className="info">{`기린이 설립한 8BallTown 레이블의 컴필레이션 앨범 <Slow Step>이 발매되었다. ‘뉴잭스윙’이라는 장르를 전면에 내세워 기린이 활동을 시작한 지 10년만의 일이다. 그 10년 사이, 외로웠던 기린에겐 크루들이 생겼고, 촌스러운 음악으로 치부되었던 뉴잭스윙은 뉴트로의 바람을 타고 Kpop의 한 부분으로 성장했다. 가을의 끝자락, 뉴잭스윙의 흥겨우면서도 애잔한 리듬 속으로 함께 빠져보자`}</div>
              <div className="sub">
                <span className="item">VIBE MAG</span>
                <span className="item">2019.11.19</span>
              </div>
            </div>
          </a>
          <a href="#" className="btn_play_now"></a>
          <div href="#" className="more_option only">
            <div className="dropdown_wrap">
              <a href="#" className="btn_option_now"></a>
              <div className="ly_option">
                <a href="#" className="ly_item">
                  <span>보관함에 추가</span>
                </a>
                <a href="#" className="ly_item">
                  내 플레이리스트 추가
                </a>
                <a href="#" className="ly_item">
                  바로 다음에 추가
                </a>
                <a href="#" className="ly_item">
                  맨 아래에 추가
                </a>
                <a href="#" className="naver-splugin spi_sns_share">
                  공유
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digging;
