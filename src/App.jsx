import React, { Component } from "react";
import "./App.css";
import Swal from "sweetalert2";

// IMPORT COMPONENTS
import Control from "./components/Control";
import TaskItem from "./components/TaskItem";
import ModalPopup from "./components/ModalPopup";
import listOfTask from "./models/GetTask";
import randomId from "random-id";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isAddNewTask: true,
      taskEditing: null,
      filterType: "",
      filterStatus: -1,
      filterSearch: "",
      filterLabel: "",
      filterPriority: "",
      sortType: "",
    };
  }

  // Lưu xuống localstorage
  setLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // Lấy dữ liệu dưới localstorage
  getLocalStorage = () => {
    if (localStorage.getItem("tasks") !== null) {
      return JSON.parse(localStorage.getItem("tasks"));
    }
    return null;
  };

  // Tạo dữ liệu khởi đầu
  generateData = () => {
    this.setLocalStorage(listOfTask.ArrayList);
  };

  componentWillMount = () => {
    let tasksJSON = this.getLocalStorage();
    if (tasksJSON) {
      this.setState({
        tasks: tasksJSON,
      });
    } else {
      this.setState({
        tasks: listOfTask.ArrayList,
      });
      this.generateData();
    }
  };

  // Thêm task mới
  addNewTask = (newTask) => {
    if (this.state.isAddNewTask) {
      newTask.id = randomId(5, "aA0");
      let tasksJSON = this.getLocalStorage();
      tasksJSON = [...tasksJSON, newTask];
      this.setState({
        tasks: tasksJSON,
      });
      this.setLocalStorage(tasksJSON);
    }
  };
  clearBeforeAddTask = () => {
    this.setState({
      isAddNewTask: true,
    });
  };
  getTaskInfo = (task) => {
    this.setState({
      taskEditing: task,
      isAddNewTask: false,
    });
  };
  editTask = (task) => {
    if (!this.state.isAddNewTask) {
      let tasksJSON = this.getLocalStorage();
      for (let index in tasksJSON) {
        if (tasksJSON[index].id === task.id) {
          tasksJSON[index].name = task.name;
          tasksJSON[index].labelArr = task.labelArr;
          tasksJSON[index].priority = task.priority;
          tasksJSON[index].status = task.status;
          tasksJSON[index].memberIDArr = task.memberIDArr;
          tasksJSON[index].description = task.description;
        }
      }
      this.setState({
        tasks: tasksJSON,
      });
      this.setLocalStorage(tasksJSON);
    }
  };
  deleteTask = (id) => {
    Swal.fire({
      title: "Bạn chắc muốn xóa chứ?",
      text: "Bạn sẽ không thể lấy lại dữ liệu",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xóa",
    }).then((result) => {
      if (result.value) {
        // Thực hiện xóa task
        let tasksJSON = this.getLocalStorage();
        for (let index in tasksJSON) {
          if (tasksJSON[index].id === id) {
            tasksJSON.splice(index, 1);
          }
        }
        this.setState({
          tasks: tasksJSON,
        });
        this.setLocalStorage(tasksJSON);
        Swal.fire("Đã xóa!", "thành công");
      }
    });
  };
  updateStatus = (id, status) => {
    Swal.fire({
      position: 'center',
      icon: 'Cập nhật thành công',
      title: 'Đã lưu',
      showConfirmButton: false,
      timer: 1500
    })
    let tasksJSON = this.getLocalStorage();
    for (let index in tasksJSON) {
      if (tasksJSON[index].id === id) {
        tasksJSON[index].status = status;
      }
    }
    this.setState({
      tasks: tasksJSON,
    });
    this.setLocalStorage(tasksJSON);
  };
  changeFilterStatus = (filterStatus) => {
    this.setState({
      filterType: "filterStatus",
      filterStatus: filterStatus,
    });
  };
  changeFilterSearch = (filterSearch) => {
    this.setState({
      filterType: "filterSearch",
      filterSearch,
    });
  };
  changeFilterLabel = (filterLabel) => {
    this.setState({
      filterType: "filterLabel",
      filterLabel,
    });
  };
  changeFilterPriority = (filterPriority) => {
    this.setState({
      filterType: "filterPriority",
      filterPriority,
    });
  };
  changeSortType = (sortType) => {
    this.setState({
      filterType: "sortType",
      sortType,
    });
  };
  render() {
    let {
      tasks,
      isAddNewTask,
      taskEditing,
      filterType,
      filterStatus,
      filterSearch,
      filterLabel,
      filterPriority,
      sortType,
    } = this.state;
    return (
      <div className="App">
        <div>
          <div className="container-fluid">
            <div className="row">
              <Control
                generateData={this.generateData}
                clearBeforeAddTask={this.clearBeforeAddTask}
                changeFilterStatus={this.changeFilterStatus}
                changeFilterLabel={this.changeFilterLabel}
                changeFilterPriority={this.changeFilterPriority}
                changeSortType={this.changeSortType}
              />
              <TaskItem
                tasks={tasks}
                getTaskInfo={this.getTaskInfo}
                updateStatus={this.updateStatus}
                deleteTask={this.deleteTask}
                filterType={filterType}
                filterStatus={filterStatus}
                changeFilterSearch={this.changeFilterSearch}
                filterSearch={filterSearch}
                filterLabel={filterLabel}
                filterPriority={filterPriority}
                sortType={sortType}
              />
            </div>
          </div>
          <ModalPopup
            addNewTask={this.addNewTask}
            isAddNewTask={isAddNewTask}
            taskEditing={taskEditing}
            editTask={this.editTask}
          />
        </div>
      </div>
    );
  }
}

export default App;
