export type Player = 'human' | 'computer' | '';

export type MatchType = {
  id: number;
  name: 'available' | 'selected';
  player: Player;
  round: number;
};
