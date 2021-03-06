import React, { Component } from 'react';
import { AppStyled } from './App.style';
import AddTask from '../AddTask/AddTask';
import TaskList from '../TaskList/TaskList';

class App extends Component {
  state = {
    refresh: false,
    tasks: [
      {
        id: 0,
        text: 'Zrobić zakupy',
        date: '2020-02-11',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: 'Pomalować pokój',
        date: '2020-02-15',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: 'Skosić trawnik',
        date: '2020-02-13',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: 'Posprzątać dom',
        date: '2020-02-14',
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    this.setState((state) => ({
      tasks: state.tasks.filter((item) => item.id !== id),
      refresh: true,
    }));
  };
  changeTaskStatus = (id) => {
    const index = this.state.tasks.findIndex((el) => el.id === id);
    let changeTasks = [...this.state.tasks];
    changeTasks[index].active = false;
    changeTasks[index].finishDate = new Date().getTime();
    this.setState({
      tasks: changeTasks,
      refresh: true,
    });
  };

  handleAddTask = (newTask) => {
    newTask.id = this.state.tasks.length > 0 ? Math.max(...this.state.tasks.map((task) => task.id)) + 1 : 0;
    const newlist = [...this.state.tasks];
    newlist.push(newTask);
    this.setState((state) => ({
      tasks: newlist,
      refresh: true,
    }));
  };
  stopRefresh = () => {
    this.setState({ refresh: false });
  };
  render() {
    return (
      <AppStyled>
        <div className='title'>To do list</div>
        <AddTask addTask={this.handleAddTask} />
        <TaskList refresh={this.state.refresh} stopRefresh={this.stopRefresh} tasks={this.state.tasks} delete={this.deleteTask} changeStatus={this.changeTaskStatus} />
      </AppStyled>
    );
  }
}

export default App;
