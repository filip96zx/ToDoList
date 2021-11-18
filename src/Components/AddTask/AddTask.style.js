import styled from "styled-components";
import styleVariables from "../../GlobalStyles/GlobalVariables";
import { transparentize } from "polished";

export const AddTaskStyled = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${transparentize(0.3, styleVariables.mainColor)};
  box-shadow: 0 0 2px ${styleVariables.mainColor};

  .addTaskText {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      text-align: center;
      background-color: ${styleVariables.secondaryColor};
      width: 50%;
      height: 1.3em;
      font-size: 1.5rem;
      padding: 0 10px;
      margin-top: 1vh;
      @media (max-width: 760px) {
        width: 90%;
      }
    }
  }
  .add-btn {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-bottom: 5px;
  }
  .addTaskOptions {
    width: 60%;
    display: flex;
    font-size: 1.2rem;
    @media (max-width: 760px) {
      flex-direction: column;
      width: 100%;
    }
    div {
      padding: 5px 0;
    }
    justify-content: space-evenly;
    align-items: center;
    input {
      font-family: sans-serif;
      font-size: 1.2rem;
      background-color: ${styleVariables.secondaryColor};
      border: 1px solid;
      margin-right: 5px;
      border-radius: 0.3rem;
    }
  }
`;
