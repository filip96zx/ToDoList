import React, { Component } from "react";
import { AddTaskStyled } from "./AddTask.style";
import { Button } from "../../Styles/Button.style";

class AddTask extends Component {
  state = {
    text: "",
    important: false,
    date: new Date().toISOString().slice(0, 10),
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleCheck = (e) => {
    const { name, checked } = e.target;
    this.setState({
      [name]: checked,
    });
  };

  handleSubmit = (e, text, date, important) => {
    e.preventDefault();
    this.setState({
      text: "",
      important: false,
      date: new Date().toISOString().slice(0, 10),
    });
    const newTask = {
      text,
      date,
      important,
      active: true,
      finishDate: null,
    };
    this.props.addTask(newTask);
  };

  render() {
    const { text, important, date } = this.state;
    return (
      <AddTaskStyled>
        
        <div className="addTaskText">
          <input
            type="text"
            placeholder="New task"
            maxLength="100"
            value={text}
            name="text"
            onChange={this.handleChange}
          />
        </div>
        <div className="addTaskOptions">
          <div>
            <input
              className="checkbox"
              type="checkbox"
              name="important"
              checked={important}
              id="important"
              onChange={this.handleCheck}
            />
            <label htmlFor="important">
              <strong>Important</strong>
            </label>
          </div>
          <div>
            <input
              type="date"
              name="date"
              id="date"
              value={date}
              onChange={this.handleChange}
            />
            <label htmlFor="date">
              <strong>Task deadline</strong>
            </label>
          </div>
        </div>
        <div className="add-btn">
          <Button width="auto" onClick={(e) => this.handleSubmit(e, text, date, important)}>
            Add task
          </Button>
        </div>
      </AddTaskStyled>
    );
  }
}

export default AddTask;
