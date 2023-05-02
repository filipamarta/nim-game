import React from 'react';
import { render, screen } from 'utils/test-utils';
import { MESSAGE } from './Footer.constants';
import Footer from './Footer';

describe('Footer component', () => {
  it('renders a message', () => {
    render(<Footer />);
    expect(screen.getByText(MESSAGE)).toBeInTheDocument();
  });
});
