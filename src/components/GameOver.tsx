import React from 'react';
import { useGame } from '../context/GameContext';

const GameOver = () => {
  const { winner, resetGame } = useGame();

  return (
    <>
      <h2>
        This game is over and you{' '}
        <span>{winner === 'human' ? 'win' : 'loose'}</span>!
      </h2>
      <p>Do you want to play again?</p>
      <button type="button" onClick={resetGame}>
        I want play again
      </button>
    </>
  );
};

export default GameOver;
