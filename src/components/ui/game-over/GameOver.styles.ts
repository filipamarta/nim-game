import styled from 'styled-components';

export const Container = styled.div<{ disabled?: boolean }>`
  min-height: 100px;
  margin-bottom: 30px;

  h2 {
    margin: 30px 0;
  }

  button {
    margin-top: 20px;
  }
`;
