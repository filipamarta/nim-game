import React from 'react';
import './App.css';
import GameContextProvider from './context/GameContext';
import Layout from './components/Layout';

function App() {
  return (
    <GameContextProvider>
      <div className="App">
        <Layout />
      </div>
    </GameContextProvider>
  );
}

export default App;
