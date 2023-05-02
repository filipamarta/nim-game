import React from 'react';
import { render, screen } from 'utils/test-utils';
import Matches from './Matches';
import { LOADING_MESSAGE } from './Matches.constants';
import { MatchType } from 'utils/types';

export const MOCK_MATCHES: MatchType[] = [
  { id: 1, name: 'available', player: '', round: 0 },
  { id: 2, name: 'available', player: '', round: 0 },
];

describe('MatchesList component', () => {
  it('renders a loading message', () => {
    render(<Matches matchesList={[]} />);

    const loadingMessage = screen.getByText(LOADING_MESSAGE);
    expect(loadingMessage).toBeInTheDocument();
  });

  it('renders a list with two listitems, within each listitem there is an enabled button', () => {
    render(<Matches matchesList={MOCK_MATCHES} />);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();

    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(2);

    expect(items[0]).toBeEnabled();
    expect(items[1]).toBeEnabled();
  });
});
