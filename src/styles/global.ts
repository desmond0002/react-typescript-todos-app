import styled, {
    createGlobalStyle,
    keyframes,
  } from 'styled-components';
  
 export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    min-height: 100vh;
    background: radial-gradient(yellow, orange);
    display: grid;
    place-content: center;
    text-align: center;
  }
  `;

  