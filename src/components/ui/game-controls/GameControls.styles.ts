import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme: { colors } }) => css`
    margin: 0 auto;
    min-height: 170px;
  `
);
