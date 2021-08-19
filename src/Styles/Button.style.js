import { darken } from "polished";
import styled from "styled-components";
import styleVariables from "../GlobalStyles/GlobalVariables";

export const Button = styled.button`
    height: ${props=> props.height? props.height: "2rem"};
    width: ${props=> props.width? props.width : "2rem"};
    margin-right: 4px;
    font-size: 1.3rem;
    font-family: "Roboto", sans-serif;
    color: ${styleVariables.btnColor};
    border: 1px solid ${styleVariables.btnColor};
    box-shadow: 0 1px 2px ${styleVariables.btnColor};
    background-color: ${styleVariables.secondaryColor};
    border-radius: 0.3rem;
    transition: 0.25s;
    :hover {
      background-color: ${darken(0.15, styleVariables.secondaryColor)};
    }
`;
