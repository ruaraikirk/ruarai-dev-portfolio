import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before { 
    box-sizing: inherit;
    }
  html, body {
  overflow-x: hidden;
  }
  body {
    background: ${({ theme }) => theme.backgroundColor};
    box-sizing: border-box; 
    margin: 0;
    font-family: Cabin, 'Open Sans', sans-serif;
    font-display: swap;
    font-display: fallback;
    // overflow-x: hidden;
    position: relative;
  }
`;
