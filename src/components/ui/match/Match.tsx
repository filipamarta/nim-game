import React, { useEffect, useState } from 'react';
import { MatchType } from 'utils/types';
import { useGame } from 'context/GameContext';
import { Button } from './Match.styles';

const Match = (match: MatchType) => {
  const { humanGame, matchesList, isComputerPlaying } = useGame();

  const [isBtnSelected, setIsBtnSelected] = useState(false);

  const handleOnClick = () => {
    humanGame(match);
  };

  useEffect(() => {
    setIsBtnSelected(match.name === 'selected');
  }, [match.name, matchesList]);

  return (
    <Button
      disabled={isBtnSelected || isComputerPlaying}
      type="button"
      onClick={handleOnClick}
      className={isBtnSelected ? 'selected' : ''}
      player={match.player}
      id={`match-${match.id}`}
      data-testid={`match-${match.id}`}
    />
  );
};

export default Match;
