import React, { useCallback, useEffect, useState } from "react";
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
import {
  togglePlayPause,
  setPosition,
  setVolume,
  setSource
} from "./store/modules/playingStatus";
/*
    width: 100%;
    position: relative;
*/

const App = () => {
  const { activatedWebView } = useSelector(state => state.webView, []);
  const { deviceId } = useSelector(state => state.deviceId, []);
  const playingStatus = useSelector(state => state.playingStatus, []);

  // const [source, setSource] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(
        `https://apis.naver.com/nmwebplayer/musicapiweb/device/VIBE_WEB/deviceId.json`
      )
      .then(resp => {
        dispatch(
          setDeviceID(resp.data.response.result.deviceIdInfo.hashedDeviceId)
        );
      });

    const musicPlayer = document.getElementById("musicPlayer");
    // 이벤트 리스너 등록
    musicPlayer.onplay = e => {
      // console.log("재생 시작");
      dispatch(togglePlayPause());
    };

    musicPlayer.onpause = e => {
      // console.log("일시정지");
      dispatch(togglePlayPause());
    };

    musicPlayer.ontimeupdate = e => {
      // console.log("업데이트");
      dispatch(setPosition(musicPlayer.currentTime));
    };
  }, []);

  useEffect(() => {
    const fetchm3u8 = async (deviceId, trackId) => {
      const x = await streamingUrlGenerate(deviceId, trackId);
      dispatch(setSource(x));
    };
    fetchm3u8(deviceId, 30759079);
  }, [deviceId]);

  useEffect(() => {
    if (playingStatus.source) {
      var player = window.videojs("musicPlayer");
      player.play(); //  => 노드가 생겼다 없어지는 과정에서 오류가 트리거됨.
    }
  }, [playingStatus.source]);

  return (
    <div className="App">
      <div
        style={{
          paddingLeft: "300px"
        }}
      >
        <video
          width="352"
          height="288"
          controls
          id="musicPlayer"
          volume="0.5"
          key={playingStatus.source}
        >
          <source type="application/x-mpegURL" src={playingStatus.source} />
        </video>
      </div>

      <div className="home">
        <Loading isLoadingCompleted={true} /> {/* 로딩 창 */}
        <div id="player">
          <MusicPlayerController playingStatus={playingStatus} />
          <LyPlaylist show={playingStatus.playlistOpened} />
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
