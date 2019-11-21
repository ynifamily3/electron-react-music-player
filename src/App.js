import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import "./Container.scss";

// 탭들 임포트하기
import Search from "./tabs/Search";
import Today from "./tabs/Today";
import Chart from "./tabs/Chart";
import Dj from "./tabs/Dj";
import My from "./tabs/My";

import Loading from "./components/Loading/Loading";
import MusicPlayerController from "./components/MusicPlayerController/MusicPlayer"; // 컨트롤러
import LyPlaylist from "./components/LyPlaylist/LyPlaylist";
import Sidebar from "./components/Sidebar/Sidebar";
import * as Type from "./store/types";

import axios from "axios";

import { setDeviceID } from "./store/modules/deviceId";
import { streamingUrlGenerate } from "./utility/index";
/*
    width: 100%;
    position: relative;
*/

const App = () => {
  const { activatedWebView } = useSelector(state => state.webView, []);
  const dispatch = useDispatch();

  useEffect(() => {
    // https://apis.naver.com/nmwebplayer/musicapiweb/device/VIBE_WEB/deviceId.json
    axios
      .get(
        `https://apis.naver.com/nmwebplayer/musicapiweb/device/VIBE_WEB/deviceId.json`
      )
      .then(resp => {
        console.log("***");
        console.log(resp.data.response.result.deviceIdInfo.hashedDeviceId);
        dispatch(
          setDeviceID(resp.data.response.result.deviceIdInfo.hashedDeviceId)
        );
      });
  }, []);

  return (
    <div className="App">
      <div className="home">
        <Loading isLoadingCompleted={true} /> {/* 로딩 창 */}
        <div id="player">
          <MusicPlayerController />
          <LyPlaylist show={false} />
        </div>
        <div>
          <Sidebar />
        </div>
        {/* 컨테이너가 들어가야 합니다. 이곳이 tabs컴포넌트를 토글 형식으로 전환해야 하는 곳임. */}
        <div id="container" className="container">
          <Search activated={activatedWebView === Type.SEARCH} />
          <Today activated={activatedWebView === Type.TODAY} />
          <Chart activated={activatedWebView === Type.CHART} />
          <Dj activated={activatedWebView === Type.DJ} />
          <My activated={activatedWebView === Type.MY} />
        </div>
        {/* 푸터가 들어가야 합니다. */}
      </div>
    </div>
  );
};

export default App;
