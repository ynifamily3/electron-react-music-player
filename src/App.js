import React, { useCallback } from "react";
import "./App.css";

import Loading from "./components/Loading/Loading";
import MusicPlayerController from "./components/MusicPlayerController/MusicPlayer"; // 컨트롤러
import LyPlaylist from "./components/LyPlaylist/LyPlaylist";

const App = () => {
  return (
    <div className="App">
      <div className="home">
        <Loading isLoadingCompleted={true} /> {/* 로딩 창 */}
        <div id="player">
          <MusicPlayerController />
          <LyPlaylist show={false} />
        </div>
        {/* 사이드바가 들어가야 합니다. */}
        {/* 컨테이너가 들어가야 합니다. 이곳이 tabs컴포넌트를 토글 형식으로 전환해야 하는 곳임. */}
        {/* 푸터가 들어가야 합니다. */}
      </div>
    </div>
  );
};

export default App;
