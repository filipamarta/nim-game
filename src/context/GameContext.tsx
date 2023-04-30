import React, { useState, useContext, createContext, useEffect } from 'react';
import { ReactNode } from 'react';
import { MatchType, Player } from '../utils/types';
import {
  findWinner,
  getRandomIntInclusive,
  maxMatchesSelectedByComputer,
} from '../utils/calculations';

const gameList: MatchType[] = [
  { id: 1, name: 'available', player: '', round: 0 },
  { id: 2, name: 'available', player: '', round: 0 },
  { id: 3, name: 'available', player: '', round: 0 },
  { id: 4, name: 'available', player: '', round: 0 },
  { id: 5, name: 'available', player: '', round: 0 },
  { id: 6, name: 'available', player: '', round: 0 },
  { id: 7, name: 'available', player: '', round: 0 },
  { id: 8, name: 'available', player: '', round: 0 },
  { id: 9, name: 'available', player: '', round: 0 },
  { id: 10, name: 'available', player: '', round: 0 },
  { id: 11, name: 'available', player: '', round: 0 },
  { id: 12, name: 'available', player: '', round: 0 },
  { id: 13, name: 'available', player: '', round: 0 },
];

type GameContextType = {
  matchesList: MatchType[];
  humanGame: ({ id }: MatchType) => void;
  resetGame: () => void;
  resetRound: () => void;
  nextRound: () => void;
  roundsNumber: number;
  matchesCounter: number;
  isComputerPlaying: boolean;
  isGameFinished: boolean;
  winner: Player;
};

type GameContextProviderType = {
  children: ReactNode;
};

const defaultValues: GameContextType = {
  matchesList: [],
  humanGame: () => {},
  resetRound: () => {},
  nextRound: () => {},
  resetGame: () => {},
  roundsNumber: 0,
  matchesCounter: 0,
  isComputerPlaying: false,
  isGameFinished: false,
  winner: '',
};

const GameContext = createContext<GameContextType>(defaultValues);

export const useGame = () => {
  const contextValue = useContext(GameContext);

  if (!contextValue) {
    throw new Error(
      `useGame must be called from within an GameContextProvider`
    );
  }

  return contextValue;
};

const GameContextProvider = ({
  children,
}: GameContextProviderType): JSX.Element => {
  const [matchesList, setMatchesList] = useState<MatchType[]>([]);
  const [availableList, setAvailableList] = useState<MatchType[]>(matchesList);
  const [selectedList, setSelectedList] = useState<MatchType[]>([]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isComputerPlaying, setIsComputerPlaying] = useState(false);
  const [roundsNumber, setRoundsNumber] = useState(0);
  const [matchesCounter, setMatchesCounter] = useState(0);
  const [winner, setWinner] = useState<Player>('');

  const startGame = () => {
    // to avoid mutations on the array, I create a clone of the original array
    const starterList: MatchType[] = gameList.map((a) => ({ ...a }));
    setMatchesList(starterList);
    setIsGameStarted(true);
    setRoundsNumber((prev) => 1);
  };

  const resetGame = () => {
    // when user clicks in re-start button, the game will reset
    setIsGameFinished(false);
    setRoundsNumber((prev) => 0);
    setMatchesCounter(0);
    startGame();
    console.log('reset game');
  };

  const nextRound = () => {
    //everytime the human click on the "Next" button, this func will be called
    setIsComputerPlaying(true);
    setMatchesCounter(0);
    setRoundsNumber((prev) => (prev += 1));
    console.log('nextRound is called');
  };

  const gameOver = () => {
    // Game over happens when selectedList is full and we have a winner.
    const who = findWinner(roundsNumber);
    setWinner(who);
    setIsGameFinished(true);
  };

  const updateList = ({ id, name, player, round }: MatchType) => {
    const list = matchesList.map((item) => {
      if (item.id === id) {
        item.name = name;
        item.player = player;
        item.round = round;
        return item;
      }
      return item;
    });

    setMatchesList(list);
  };

  const humanGame = (match: MatchType) => {
    if (matchesCounter < 3) {
      setMatchesCounter((prev) => (prev += 1));
      updateList({
        id: match.id,
        name: 'selected',
        player: 'human',
        round: roundsNumber,
      });
    }
  };

  const computerGame = () => {
    const firstElement = 0;
    const lastElement = availableList.length - 1;
    const maxMatchesSelected = maxMatchesSelectedByComputer();
    let matchesSelected = 0;

    while (matchesSelected < maxMatchesSelected) {
      matchesSelected++;

      const sortedElementIndex = getRandomIntInclusive({
        max: lastElement,
        min: firstElement,
      });

      const computerMatchSelection = availableList[sortedElementIndex];

      if (!!computerMatchSelection) {
        updateList({
          id: computerMatchSelection.id,
          name: 'selected',
          player: 'computer',
          round: roundsNumber,
        });
      }
    }

    setIsComputerPlaying(false);
    setRoundsNumber((prev) => (prev += 1));
  };

  const resetRound = () => {
    console.log('resetRound game');
  };

  useEffect(() => {
    if (isComputerPlaying) {
      computerGame();
    }
  }, [isComputerPlaying]);

  useEffect(() => {
    // everytime matchesList change, update available and selected
    // save a list with selected by human only
    const selected = matchesList.filter((match) => match.name === 'selected');
    setSelectedList(selected);

    // save a list with available only
    const available = matchesList.filter((match) => match.name === 'available');
    setAvailableList(available);
  }, [matchesList]);

  useEffect(() => {
    // when selectedList is full, the game is over
    if (selectedList.length === 13) {
      gameOver();
    }
  }, [selectedList]);

  useEffect(() => {
    // when the page is rendered, the game started
    startGame();
    console.log('start game');
  }, []);

  return (
    <GameContext.Provider
      value={{
        matchesList,
        humanGame,
        resetGame,
        resetRound,
        nextRound,
        roundsNumber,
        matchesCounter,
        isComputerPlaying,
        isGameFinished,
        winner,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
