import { createGlobalStyle } from "styled-components";
import styleVariables from "./GlobalVariables";

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${styleVariables.fontColor};
}

`;
