import React from 'react';
import { Subtitle, Title } from './Header.styles';
import { useGame } from 'context/GameContext';
import {
  GAME_OVER_MESSAGE,
  GAME_START_MESSAGE,
  TITLE,
} from './Header.constants';

const Header = () => {
  const { isGameFinished } = useGame();

  return (
    <>
      <Title>{TITLE}</Title>
      <Subtitle>
        {isGameFinished ? GAME_OVER_MESSAGE : GAME_START_MESSAGE}
      </Subtitle>
    </>
  );
};

export default Header;
