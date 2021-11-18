import styled, { css } from 'styled-components';
import styleVariables from '../../GlobalStyles/GlobalVariables';
import { lighten } from 'polished';

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
  background-color: ${lighten(0.15, styleVariables.mainColor)};
`;
