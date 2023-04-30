import { Player } from './types';

export const getRandomIntInclusive = ({
  min,
  max,
}: {
  min: number;
  max: number;
}) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const maxMatchesSelectedByComputer = () => {
  return getRandomIntInclusive({ max: 3, min: 1 });
};

export const findWinner = (number: number): Player => {
  /* 
    To find the winner, verify if roundsNumber are odd or even.
    If roundsNumber is odd human wins (game always start with a human play).
    If roundsNumber is even computer win. 
  */
  return number % 2 === 0 ? 'computer' : 'human';
};
