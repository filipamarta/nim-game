import React, { useEffect, useState } from 'react';
import { MatchType } from '../utils/types';
import { useGame } from '../context/GameContext';

const Match = (match: MatchType) => {
  const { humanGame, matchesList } = useGame();

  const [isBtnSelected, setIsBtnSelected] = useState(false);

  const handleOnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    /*    event.preventDefault(); */
    humanGame(match);
  };

  const playerName = match.name === 'available' ? '' : `by ${match.player}`;

  useEffect(() => {
    setIsBtnSelected(match.name === 'selected');
  }, [match.name, matchesList]);

  return (
    <li>
      <button
        disabled={isBtnSelected}
        type="button"
        onClick={(event) => handleOnClick(event)}
        className={isBtnSelected ? 'selected' : ''}
        style={{
          backgroundColor:
            match.player === 'human'
              ? 'aquamarine'
              : match.player === 'computer'
              ? 'red'
              : 'grey',
        }}
      >{`match ${match.id} is ${match.name} ${playerName} on round ${match.round}`}</button>
    </li>
  );
};

export default Match;
