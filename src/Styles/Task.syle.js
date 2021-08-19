import styled, { css } from "styled-components";
import styleVariables from "../GlobalStyles/GlobalVariables";
import { darken, transparentize} from "polished";

export const TaskCol = styled.div`
  grid-column: ${(props) => props.colStart} / ${(props) => props.colEnd};
  word-wrap: break-word;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  ${(props) => (props.important ? important : null)}
`;

const important = () => css`
  font-weight: bold;
  background-color: ${darken(0.1, styleVariables.mainColor)};
  text-decoration: underline;
  border-bottom: 3px solid ${transparentize(0.4, styleVariables.mainColor)};
  border-top: 3px solid ${transparentize(0.4, styleVariables.mainColor)};
`;

