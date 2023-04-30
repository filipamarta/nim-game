import React from 'react';
import { useGame } from '../context/GameContext';
import GameOver from './GameOver';
import Game from './Game';

const Layout = () => {
  const { isGameFinished } = useGame();
  return (
    <>
      <h1>NIM</h1>
      {!isGameFinished ? <Game /> : <GameOver />}
    </>
  );
};

export default Layout;
