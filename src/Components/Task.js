import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { TaskCol } from "../Styles/Task.syle";
import { Button } from "../Styles/Button.style";

const Task = (props) => {
  const { id, text, date, active, important, finishDate } = props.task;
  const worldBreak = {
    wordBreak: "break-all",
  };
  if (active) {
    return (
      <>
        <TaskCol
          style={worldBreak}
          important={important}
          colStart={1}
          colEnd={2}
        >
          {text}
        </TaskCol>
        <TaskCol important={important} colStart={2} colEnd={3}>
          {date}
        </TaskCol>
        <TaskCol buttons={true} important={important} colStart={3} colEnd={4}>
          <Button onClick={() => props.change(id)}>
            <FontAwesomeIcon icon={faCheck} />
          </Button>
          <Button onClick={() => props.delete(id)}>
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </TaskCol>
      </>
    );
  } else {
    const dateFinish = new Date(finishDate).toLocaleString();
    return (
      <>
        <TaskCol style={worldBreak} colStart={1} colEnd={2}>
          {text}
        </TaskCol>
        <TaskCol colStart={2} colEnd={3}>
          {date}
        </TaskCol>
        <TaskCol colStart={3} colEnd={4}>
          {dateFinish}
        </TaskCol>
        <TaskCol buttons={true} colStart={4} colEnd={6}>
          <Button onClick={() => props.delete(id)}>
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </TaskCol>
      </>
    );
  }
};

export default Task;
