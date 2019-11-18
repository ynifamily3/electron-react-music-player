import React from 'react';
import './App.css';
import MusicPlayer from './components/MusicPlayer/MusicPlayer'; // 사실상 컨트롤러
import LyPlaylist from './components/LyPlaylist/LyPlaylist';

const App = () => {
  return (
    <div className="App">
      <MusicPlayer />
      <LyPlaylist />
    </div>
  );
}

export default App;
