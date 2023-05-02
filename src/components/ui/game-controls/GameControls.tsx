import React, { useEffect, useState } from 'react';
import BoardResults from 'components/ui/board-results/BoardResults';
import Button from 'components/ui/button/Button';
import Instructions from 'components/ui/instructions/Instructions';
import { useGame } from 'context/GameContext';
import { Container } from './GameControls.styles';
import { BUTTON_NEXT, BUTTON_RESTART } from './GameControls.constants';

const GameControls = () => {
  const { resetGame, nextRound, matchesCounter, isComputerPlaying } = useGame();

  const [isBtnNextDisabled, setIsBtnNextDisabled] = useState(true);

  useEffect(() => {
    if (matchesCounter !== 0) {
      setIsBtnNextDisabled(false);
    } else {
      setIsBtnNextDisabled(true);
    }
  }, [matchesCounter]);

  return (
    <Container>
      <Instructions />
      <BoardResults />

      <div>
        <Button
          onClick={resetGame}
          text={BUTTON_RESTART}
          disabled={isComputerPlaying}
        />
        <Button
          onClick={nextRound}
          text={BUTTON_NEXT}
          disabled={isBtnNextDisabled || isComputerPlaying}
        />
      </div>
    </Container>
  );
};

export default GameControls;
