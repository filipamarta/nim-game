import React from 'react';
import { Container, Player } from './BoardResults.styles';
import {
  COMPUTER_TURN_MESSAGE,
  HUMAN_TURN_MESSAGE,
} from './BoardResults.constants';
import { useGame } from 'context/GameContext';

const BoardResults = () => {
  const { isComputerPlaying, roundsNumber, matchesCounter } = useGame();

  return (
    <Container>
      <Player isComputerPlaying={isComputerPlaying}>
        {isComputerPlaying ? COMPUTER_TURN_MESSAGE : HUMAN_TURN_MESSAGE}
      </Player>
      <div>
        <h4>{`Round: ${roundsNumber}`}</h4>
        <h4>{`Selected matches: ${matchesCounter}`}</h4>
      </div>
    </Container>
  );
};

export default BoardResults;
