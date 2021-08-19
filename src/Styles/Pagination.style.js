import { lighten } from "polished";
import styled from "styled-components";
import styleVariables from "../GlobalStyles/GlobalVariables";

export const PaginationStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  user-select: none;
  }
  select {
    background-color: ${styleVariables.secondaryColor};
    box-shadow: 0 0 1px 1px ${styleVariables.mainColor};
    border:none;
    padding: 3px;
    margin: 0 2px;
  }
`;

export const PageItem = styled.p`
  margin: 5px 2px;
  box-shadow: 0 0 1px 1px ${styleVariables.mainColor};
  padding: 1px 4px;
  background-color: ${(props) =>
    props.currentPage ? lighten(0.05, styleVariables.mainColor) : null};
  :hover {
    cursor: pointer;
  }
`;
