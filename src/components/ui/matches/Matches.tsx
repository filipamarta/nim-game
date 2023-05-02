import React from 'react';
import { List, ListItem } from './Matches.styles';
import { LOADING_MESSAGE } from './Matches.constants';
import { MatchType } from 'utils/types';
import Match from '../match/Match';

type MatchesListProps = {
  matchesList: MatchType[];
};

const Matches = ({ matchesList }: MatchesListProps) => {
  return matchesList.length > 0 ? (
    <List>
      {matchesList.map((match) => (
        <ListItem key={match.id}>
          <Match {...match} />
        </ListItem>
      ))}
    </List>
  ) : (
    <p>{LOADING_MESSAGE}</p>
  );
};

export default Matches;
