import React from 'react';
import { useGame } from '../context/GameContext';
import Match from './Match';

const Game = () => {
  const {
    matchesList,
    resetGame,
    resetRound,
    nextRound,
    roundsNumber,
    matchesCounter,
    isComputerPlaying,
  } = useGame();

  const isDisabled = matchesCounter === 0 && isComputerPlaying;

  return (
    <>
      <h3>Let's play NIM.</h3>
      <p>You will play against the computer.</p>
      <p>Select 1, 2 or 3 matches from the list on each round.</p>

      {isComputerPlaying ? <h2>Computer is playing</h2> : <h2>Your turn</h2>}

      <ul>
        {matchesList.map((match) => {
          return <Match key={match.id} {...match} />;
        })}
      </ul>

      <h2>round: {roundsNumber}</h2>
      <h2>selected matches per round: {matchesCounter}</h2>

      <button type="button" onClick={resetRound}>
        Cancel
      </button>

      <button type="button" onClick={nextRound} disabled={isDisabled}>
        Next
      </button>

      <button type="button" onClick={resetGame}>
        Re-start
      </button>
    </>
  );
};

export default Game;
