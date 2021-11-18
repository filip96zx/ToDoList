import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp, faSort } from "@fortawesome/free-solid-svg-icons";
import { SortComponentStyled } from "./SortComponent.style";

const SortComponent = (props) => {
  const { sort, listName, text, property, desc, activeSort } = props;
  return (
    <SortComponentStyled onClick={() => sort(listName, property)}>
      <strong>{text}</strong>
      {activeSort === property && desc ? (
        <FontAwesomeIcon style={{position:"absolute"}} icon={faSortDown}></FontAwesomeIcon>
      ) : activeSort === property && !desc ? (
        <FontAwesomeIcon style={{position:"absolute"}} icon={faSortUp}></FontAwesomeIcon>
      ) : activeSort !==""? null : <FontAwesomeIcon style={{position:"absolute"}} icon={faSort}></FontAwesomeIcon>}
    </SortComponentStyled>
  );
};

export default SortComponent;
