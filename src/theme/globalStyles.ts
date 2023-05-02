import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-size: 16px;
    scroll-behavior: smooth;
    color: #353e22;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }


  a {
    text-decoration:none;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  ul { 
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  `;
