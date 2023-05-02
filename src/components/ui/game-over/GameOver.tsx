import React from 'react';
import { useGame } from 'context/GameContext';
import { Container } from './GameOver.styles';
import Button from '../button/Button';
import { GAME_OVER_BTN, GAME_OVER_TEXT } from './GameOver.constants';

const GameOver = () => {
  const { winnerDetails, resetGame } = useGame();

  return (
    <Container>
      <h2>
        You{' '}
        <span>
          {winnerDetails.player === 'human' ? 'lost' : 'won'} after{' '}
          {winnerDetails.round} rounds
        </span>
        !
      </h2>
      <p>{GAME_OVER_TEXT}</p>
      <Button onClick={resetGame} text={GAME_OVER_BTN} />
    </Container>
  );
};

export default GameOver;
