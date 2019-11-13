import React from 'react';
import Cp from './components/comp'; // 컴포넌트명은 꼭 대문자로.
import './App.css';

function App() {
  return (
    <div className="App">
        백그라운드에서 사운드 재생 중... <br/> <Cp text='test테스트'/>
    </div>
  );
}

export default App;
