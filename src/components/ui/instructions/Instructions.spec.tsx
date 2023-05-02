import React from 'react';
import { render, screen } from 'utils/test-utils';
import Instructions from './Instructions';
import { INSTRUCTION_1, INSTRUCTION_2 } from './Instructions.constants';

describe('Instructions component', () => {
  it('renders instructions text', () => {
    render(<Instructions />);
    expect(screen.getByText(INSTRUCTION_1)).toBeInTheDocument();
    expect(screen.getByText(INSTRUCTION_2)).toBeInTheDocument();
  });
});
