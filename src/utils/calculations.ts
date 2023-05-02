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

export const maxMatchesSelectedByComputer = (): number => {
  return getRandomIntInclusive({ max: 3, min: 1 });
};

export const delay = async (ms: number) =>
  new Promise((res) => setTimeout(res, ms));
