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
/*
    width: 100%;
    position: relative;
*/

const App = () => {
  const { activatedWebView } = useSelector(state => state.webView, []);
  const { deviceId } = useSelector(state => state.deviceId, []);
  const [source, setSource] = useState(null);
  const dispatch = useDispatch();
  // useEffect(async () => {
  //   console.log("device id ");
  //   console.log(deviceId);
  //   if (deviceId) {
  //     await streamingUrlGenerate(deviceId, 30759079);
  //   }
  // }, [deviceId]);
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

  useEffect(() => {
    const _streamingUrlGenerate = async (deviceId, trackId) => {
      if (!deviceId) return;
      let m3u8Result;
      const response = await axios.get(
        "https://apis.naver.com/nmwebplayer/music/stplay_trackStPlay_NO_HMAC?play.trackId=" +
          trackId +
          "&deviceType=VIBE_WEB&deviceId=" +
          deviceId +
          "&play.mediaSourceType=AAC_320_ENC&play.aacSupported=Y"
      );
      console.log("streaming ");
      console.log(response);

      if (response) {
        m3u8Result = response.data.moduleInfo.hlsManifestUrl;
        setSource(m3u8Result);
      }

      return m3u8Result;
    };
    _streamingUrlGenerate(deviceId, 30759079);
  }, [deviceId]);

  return (
    <div className="App">
      <div
        style={{
          paddingLeft: "300px"
        }}
      >
        <video width="352" height="288" controls autoPlay>
          <source type="AAC_096_ENC" src={source} />
        </video>
      </div>

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
