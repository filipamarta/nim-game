import React, { useState, useContext, createContext, useEffect } from 'react';
import { ReactNode } from 'react';
import { MatchType } from '../utils/types';
import {
  delay,
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
  nextRound: () => void;
  roundsNumber: number;
  matchesCounter: number;
  isComputerPlaying: boolean;
  isGameFinished: boolean;
  winnerDetails: MatchType;
};

type GameContextProviderType = {
  children: ReactNode;
};

const defaultValues: GameContextType = {
  matchesList: [],
  humanGame: () => {},
  nextRound: () => {},
  resetGame: () => {},
  roundsNumber: 0,
  matchesCounter: 0,
  isComputerPlaying: false,
  isGameFinished: false,
  winnerDetails: { id: 0, name: 'available', player: '', round: 0 },
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
  const [winnerDetails, setWinnerDetails] = useState<MatchType>({
    id: 0,
    name: 'available',
    player: '',
    round: 0,
  });

  const startGame = () => {
    // to avoid mutations on the array, I create a clone of the original array
    const starterList: MatchType[] = gameList.map((a) => ({ ...a }));
    setMatchesList(starterList);
    // set setIsGameStarted boolean to true
    setIsGameStarted(true);
    // set roundsNumber to 1
    setRoundsNumber((prev) => 1);
  };

  const resetGame = () => {
    // when user clicks in re-start button, the game will reset and start again
    setIsGameFinished(false);
    setRoundsNumber((prev) => 0);
    setMatchesCounter(0);
    startGame();
  };

  const nextRound = () => {
    //everytime the human click on the "Next" button, this func will be called
    setIsComputerPlaying(true);
    setMatchesCounter(0);
    setRoundsNumber((prev) => (prev += 1));
  };

  const gameOver = () => {
    // Game over happens when selectedList is full and we have a winner.

    const lastSelection = selectedList.find(
      (item) => item.round === roundsNumber
    );

    if (lastSelection) {
      setWinnerDetails({
        id: lastSelection.id,
        name: lastSelection.name,
        player: lastSelection.player,
        round: lastSelection.round,
      });
    }
    setIsGameFinished(true);
  };

  const updateList = ({ id, name, player, round }: MatchType) => {
    // this runs everytime the human or the computer updates matchesList
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
    // human can only play till 3 matches
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

  const computerGame = async () => {
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

        /*  
          computer has a timeout to improve ux BUT IS NOT WORKING PROPERLY!
          I've tried to find a good way to do this and I cound't. Maybe it's a good topic for discussion :)
          I tried setTimeout or setInterval in ways that the counter blocked the continuation of the script and I wasn't able to do it. 
          I really wanted this to work, can you help me out? ty
        */

        await delay(1500);
      }
    }

    // finish computer game and start next round
    setIsComputerPlaying(false);
    setMatchesCounter(0);
    setRoundsNumber((prev) => (prev += 1));
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
  }, []);

  return (
    <GameContext.Provider
      value={{
        matchesList,
        humanGame,
        resetGame,
        nextRound,
        roundsNumber,
        matchesCounter,
        isComputerPlaying,
        isGameFinished,
        winnerDetails,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
