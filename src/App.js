import React from 'react';
import Cp from './components/comp'; // 컴포넌트명은 꼭 대문자로.
import './App.css';

function App() {
  return (
    <div className="App">
      comp load test2 : <br/> <Cp text='test테스트'/>
    </div>
  );
}

export default App;
