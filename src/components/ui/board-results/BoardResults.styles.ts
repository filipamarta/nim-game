import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme: { colors, radii } }) => css`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors?.neutral10};
    border-radius: ${radii?.md};
    margin: 15px auto;
    padding: 10px 20px;

    > div {
      display: flex;
      text-align: left;
      flex-direction: column;

      h4 {
        margin: 3px 0;
      }
    }
  `
);

export const Player = styled.h2<{ isComputerPlaying: boolean }>(
  ({ isComputerPlaying, theme: { colors } }) => css`
    text-align: left;
    position: relative;
    margin-left: 24px;

    &:before {
      content: '';
      height: 20px;
      width: 20px;
      display: block;
      background-color: ${isComputerPlaying ? colors?.computer : colors?.human};
      top: 4px;
      left: -24px;
      position: absolute;
      border-radius: 100%;
    }
  `
);
