import React from 'react';
import './App.css';

import Loading from './components/Loading/Loading';
import MusicPlayerController from './components/MusicPlayerController/MusicPlayer'; // 사실상 컨트롤러
import LyPlaylist from './components/LyPlaylist/LyPlaylist';

const App = () => {
  return (
    <div className="App">
      <Loading isLoadingCompleted={true} />
      <div id="player">
        <MusicPlayerController />
        <LyPlaylist show={false} />
      </div>
    </div>
  );
}

export default App;
