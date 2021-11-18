import React, { Component } from "react";
import Pagination from "../Pagination/Pagination";
import SortComponent from "../SortComponent/SortComponent";
import Task from "../Task/Task";
import {
  TaskListStyled,
  TaskListActive,
  TaskListDone,
  ListWrapper,
} from "./TaskList.style";
import Search from "../Search/Search";
import { TaskCol } from "../Task/Task.style";

class TaskList extends Component {
  state = {
    activeTasks: [],
    doneTasks: [],
    reSort: false,
    activeTasksSort: { propertyName: "", desc: false },
    doneTasksSort: { propertyName: "", desc: false },
    activePageIndex: 0,
    activePageSize: 5,
    donePageIndex: 0,
    donePageSize: 5,
    activeList: {
      show: false,
      showAgain: false,
    },
    doneList: {
      show: false,
      hide: false,
      moveUp: false,
      moveDown: false,
      showMoveUp: false,
      flag: false,
    },
    moveUp: 0,
  };

  componentDidUpdate() {
    const { activeTasksSort, doneTasksSort } = this.state;
    if (this.props.refresh) {
      let reSort = false;
      activeTasksSort.propertyName !== "" || doneTasksSort.propertyName !== ""
        ? (reSort = true)
        : (reSort = false);
      this.setState({
        activeTasks: this.loadActiveTasks(),
        doneTasks: this.loadDoneTasks(),
        reSort,
      });
      this.props.stopRefresh();
    }
    if (this.state.reSort) {
      if (activeTasksSort.propertyName !== "")
        this.sortTasks("activeTasks", activeTasksSort.propertyName, false);
      if (doneTasksSort.propertyName !== "")
        this.sortTasks("doneTasks", doneTasksSort.propertyName, false);
      this.setState({ reSort: false });
    }
    this.handleAnimations();
  }
  componentDidMount() {
    this.setState({
      activeTasks: this.loadActiveTasks(),
      doneTasks: this.loadDoneTasks(),
    });
  }
  loadActiveTasks = () => {
    return this.props.tasks
      .filter((task) => task.active)
      .map((task) => (
        <Task
          key={task.id}
          task={task}
          delete={this.props.delete}
          change={this.props.changeStatus}
        />
      ));
  };
  loadDoneTasks = () => {
    return this.props.tasks
      .filter((task) => !task.active)
      .map((task) => (
        <Task
          key={task.id}
          task={task}
          delete={this.props.delete}
          change={this.props.changeStatus}
        />
      ));
  };

  sortTasks = (listName, property, changeDirection = true) => {
    const list = [...this.state[listName]];
    let { desc } = this.state[listName + "Sort"];
    if (!changeDirection) {
      desc = !desc;
    }
    const compare = (a, b) =>
      a.props.task[property] < b.props.task[property]
        ? -1
        : a.props.task[property] > b.props.task[property]
        ? 1
        : 0;
    desc ? list.sort(compare).reverse() : list.sort(compare);
    this.setState({
      [listName]: list,
      [listName + "Sort"]: {
        propertyName: property,
        desc: !desc,
      },
    });
  };
  switchActivePageIndex = (pageIndex) => {
    this.setState({
      activePageIndex: pageIndex,
    });
  };
  switchActivePageSize = (e) => {
    this.setState({
      activePageSize: e.target.value * 1,
      activePageIndex: 0,
    });
  };
  switchDonePageIndex = (pageIndex, pageSize) => {
    this.setState({
      donePageIndex: pageIndex,
    });
  };
  switchDonePageSize = (e) => {
    this.setState({
      donePageSize: e.target.value * 1,
      donePageIndex: 0,
    });
  };

  handleSearch = (searchString) => {
    let activeFiltered = this.loadActiveTasks().filter(
      (task) =>
        task.props.task.text.includes(searchString) ||
        task.props.task.date.includes(searchString)
    );
    let doneFiltered = this.loadDoneTasks().filter(
      (task) =>
        task.props.task.text.includes(searchString) ||
        task.props.task.date.includes(searchString) ||
        new Date(task.props.task.finishDate)
          .toLocaleString()
          .includes(searchString)
    );
    if (activeFiltered.length === 0)
      activeFiltered.push(
        <TaskCol key="0" colStart={1} colEnd={4}>
          No results found.
        </TaskCol>
      );
    if (doneFiltered.length === 0)
      doneFiltered.push(
        <TaskCol key="0" colStart={1} colEnd={4}>
          No results found.
        </TaskCol>
      );
    this.setState({
      activeTasks: activeFiltered,
      activePageIndex: 0,
      doneTasks: doneFiltered,
      donePageIndex: 0,
    });
  };
  handleAnimations = () => {
    const { activeTasks, doneTasks, search, activeList, doneList } = this.state;
    //active list
    if ((activeTasks.length > 0 || search) && !activeList.show) {
      this.setState({
        activeList: { show: true },
        doneList: { moveUp: false },
      });
    }
    if ((activeTasks.length === 0 || search) && activeList.show) {
      const height = document.querySelector("#active-task-list"
      ).offsetHeight;
      this.setState({
        activeList: { show: false },
        moveUp: height
      });
    }

    //done list
    if (
      (doneTasks.length > 0 || search) &&
      !doneList.show &&
      !doneList.moveUp &&
      !doneList.showMoveUp
    ) {
      this.setState({
        doneList: { show: true },
      });
    }
    if ((doneTasks.length === 0 || search) && doneList.show) {
      this.setState({
        doneList: {},
      });
    }
    if (
      (doneTasks.length === 0 || search) &&
      doneList.moveUp &&
      !doneList.flag
    ) {
      this.setState({
        doneList: {
          moveUp: true,
          hide: true,
          flag: true,
        },
      });
    }
    if (
      (doneTasks.length > 0 || search) &&
      doneList.show &&
      !activeList.show &&
      !doneList.moveUp
    ) {
      if (
        activeTasks.length === 0 &&
        doneTasks.length === 1 &&
        !doneList.flag
      ) {
        this.setState({
          doneList: { show: true, hide: false, flag: true },
        });
      } else {
        this.setState({
          doneList: {
            moveUp: true,
          },
        });
      }
    }
  };

  render() {
    const {
      activeTasks,
      doneTasks,
      activeTasksSort,
      doneTasksSort,
      activePageIndex,
      activePageSize,
      donePageIndex,
      donePageSize,
      search,
      doneList,
      activeList,
    } = this.state;

    return (
      <TaskListStyled>
        <Search search={this.handleSearch} />
        {(activeTasks.length > 0 || search || 1) && (
          <ListWrapper
            id="active-task-list"
            className={[activeList.show ? "show" : null]}
          >
            <h3>Active Tasks</h3>
            <TaskListActive>
              <SortComponent
                sort={this.sortTasks}
                listName="activeTasks"
                property={"text"}
                text={"Task"}
                desc={activeTasksSort.desc}
                activeSort={activeTasksSort.propertyName}
              />
              <SortComponent
                sort={this.sortTasks}
                listName="activeTasks"
                property={"date"}
                text={"Deadline"}
                desc={activeTasksSort.desc}
                activeSort={activeTasksSort.propertyName}
              />
              {activeTasks.slice(
                activePageIndex === 0 ? 0 : activePageIndex * activePageSize,
                activePageIndex * activePageSize + activePageSize
              )}
            </TaskListActive>
            <Pagination
              pageIndex={activePageIndex}
              pageSize={activePageSize}
              pageSizes={[5, 10, 20]}
              itemCount={activeTasks.length}
              switchPage={this.switchActivePageIndex}
              switchIndex={this.switchActivePageSize}
            />
          </ListWrapper>
        )}
        {(doneTasks.length > 0 || 1) && (
          <ListWrapper
            moveUp={this.state.moveUp}
            className={[
              doneList.show ? "show" : null,
              doneList.moveUp ? "move-up" : null,
              doneList.hide ? "hide" : null,
            ]}
          >
            <h3>Done Tasks</h3>
            <TaskListDone>
              <SortComponent
                sort={this.sortTasks}
                listName="doneTasks"
                property={"text"}
                text={"Task"}
                desc={doneTasksSort.desc}
                activeSort={doneTasksSort.propertyName}
              />
              <SortComponent
                sort={this.sortTasks}
                listName="doneTasks"
                property={"date"}
                text={"Deadline"}
                desc={doneTasksSort.desc}
                activeSort={doneTasksSort.propertyName}
              />
              <SortComponent
                sort={this.sortTasks}
                listName="doneTasks"
                property={"finishDate"}
                text={"Finished"}
                desc={doneTasksSort.desc}
                activeSort={doneTasksSort.propertyName}
              />

              {doneTasks.slice(
                donePageIndex === 0 ? 0 : donePageIndex * donePageSize,
                donePageIndex * donePageSize + donePageSize
              )}
            </TaskListDone>
            <Pagination
              pageIndex={donePageIndex}
              pageSize={donePageSize}
              pageSizes={[5, 10, 20]}
              itemCount={doneTasks.length}
              switchPage={this.switchDonePageIndex}
              switchIndex={this.switchDonePageSize}
            />
          </ListWrapper>
        )}
      </TaskListStyled>
    );
  }
}

export default TaskList;
