import React from 'react';
import { ButtonStyled } from './Button.styles';

type ButtonProps = {
  onClick: () => void;
  text: string;
  disabled?: boolean;
};
const Button = ({ onClick, text, disabled }: ButtonProps) => {
  return (
    <ButtonStyled type="button" onClick={onClick} disabled={disabled}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
