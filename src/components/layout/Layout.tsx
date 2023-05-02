import React from 'react';
import { useGame } from 'context/GameContext';
import { Container, ImgContainer, MatchesCaseImage } from './Layout.styles';
import Header from 'components/ui/header/Header';
import Footer from 'components/ui/footer/Footer';
import matchesCase from 'images/matchesCaseOnly.png';
import Matches from 'components/ui/matches/Matches';
import GameControls from 'components/ui/game-controls/GameControls';
import GameOver from 'components/ui/game-over/GameOver';

const Layout = () => {
  const { isGameFinished, matchesList } = useGame();
  return (
    <Container>
      <Header />
      {isGameFinished ? <GameOver /> : <GameControls />}
      <Matches matchesList={matchesList} />
      <ImgContainer>
        <MatchesCaseImage src={matchesCase} alt="matches case" />
      </ImgContainer>
      <Footer />
    </Container>
  );
};

export default Layout;
