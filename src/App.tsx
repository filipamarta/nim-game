import React from 'react';
import './App.css';
import GameContextProvider from './context/GameContext';
import Layout from './components/layout/Layout';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/globalStyles';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GameContextProvider>
        <div className="App">
          <Layout />
        </div>
      </GameContextProvider>
    </ThemeProvider>
  );
}

export default App;
