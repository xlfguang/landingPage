import { createGlobalStyle } from "styled-components";
import PlayfairDisplayFont from "../font/PlayfairDisplay-VariableFont_wght.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'PlayfairDisplay-VariableFont_wght';
    src: url(${PlayfairDisplayFont}) format('truetype');
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'PlayfairDisplay-VariableFont_wght', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f5f0f8;
    color: #333;
    line-height: 1.6;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
