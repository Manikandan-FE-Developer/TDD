import React from 'react';
import Calc from './components/Calc';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator App</h1>
      </header>
      <main>
        <Calc />
      </main>
    </div>
  );
}

export default App;