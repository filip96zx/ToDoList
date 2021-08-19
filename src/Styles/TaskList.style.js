import styled from "styled-components";
import styleVariables from "../GlobalStyles/GlobalVariables";

export const TaskListStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  h3 {
    text-align: center;
  }
`;

export const ListWrapper = styled.div`
  transform: rotate3d(1, 0, 0, 90deg);
  opacity:0;
  transition: 1s;
  backface-visibility: hidden;
  &.show {
    transform: rotate3d(0, 0, 0, 90deg);
    opacity:1;
    transition: transform 1s;
  }
  &.move-up {
    transform: rotate3d(0, 0, 0, 90deg) translateY(${props => -props.moveUp+"px"});
    opacity:1;
    transition: 1s;
    transition-delay: .3s;
    &.hide {
      transform: translateY(${props => -props.moveUp+"px"}) rotate3d(1, 0, 0, 90deg);
      opacity:0;
      transition: 1s;
    }
  }
  &.move-down {
    transform: rotate3d(0, 0, 0, 90deg) translateY(0);
    transition: 1s;
  }
`;

export const TaskListActive = styled.div`
  width: 80vw;
  box-shadow: 0 0 100px 0px ${styleVariables.mainColor} inset;
  grid-template-columns: 2fr 1fr auto;
  border-radius: 1rem;
  display: grid;
  grid-auto-rows: auto;
  min-height: 5vh;
  overflow: hidden;
`;

export const TaskListDone = styled.div`
  width: 80vw;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr auto;
  box-shadow: 0 0 100px 0px ${styleVariables.mainColor} inset;
  border-radius: 1rem;
  grid-auto-rows: auto;
  min-height: 5vh;
  overflow: hidden;
`;
