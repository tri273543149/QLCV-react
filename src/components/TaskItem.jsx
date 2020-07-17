import React, { Component } from "react";

// IMPORT COMPONENTS
import TableHeader from "./taskitem/TableHeader";
import Item from "./taskitem/Item";
import Search from "./taskitem/Search";

class TaskItem extends Component {
  render() {
    let {
      tasks,
      filterType,
      filterStatus,
      filterLabel,
      filterPriority,
      sortType,
    } = this.props;
    let filterTasks = [];
    switch (filterType) {
      case "filterStatus":
        if (filterStatus === -1) {
          filterTasks = tasks;
        } else {
          for (let task of tasks) {
            if (parseInt(task.status, 10) === filterStatus) {
              filterTasks = [...filterTasks, task];
            }
          }
        }
        break;
      case "filterSearch":
        filterTasks = tasks.filter((task) => {
          return (
            task.name
              .trim()
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/đ/g, "d")
              .replace(/Đ/g, "D")
              .indexOf(
                this.props.filterSearch
                  .trim()
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .replace(/đ/g, "d")
                  .replace(/Đ/g, "D")
              ) !== -1
          );
        });
        break;
      case "filterLabel":
        for (let task of tasks) {
          for (let index in task.labelArr) {
            if (task.labelArr[index] === filterLabel) {
              filterTasks = [...filterTasks, task];
            }
          }
        }
        break;
      case "filterPriority":
        if (filterPriority == -1) {
          filterTasks = tasks;
        } else {
          for (let task of tasks) {
            if (parseInt(task.priority, 10) == filterPriority) {
              filterTasks = [...filterTasks, task];
            }
          }
        }
        break;
      case "sortType":
        filterTasks = tasks;
        if (sortType === "asc") {
          filterTasks.sort((a, b) => {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            if (x < y) return -1;
            if (x > y) return 1;
            return 0;
          });
        }
        if (sortType === "desc") {
          filterTasks.sort((a, b) => {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            if (x > y) return -1;
            if (x < y) return 1;
            return 0;
          });
        }
        break;
      default:
        filterTasks = tasks;
        break;
    }
    let elementItemTask = filterTasks.map((task, i) => {
      return (
        <Item
          task={task}
          key={i}
          index={i}
          getTaskInfo={this.props.getTaskInfo}
          updateStatus={this.props.updateStatus}
          deleteTask={this.props.deleteTask}
        />
      );
    });
    return (
      <div className="col-md-9 px-0">
        <div className="container-fluid px-0">
          <div className="row header header--right d-flex align-items-center mx-0">
            <div className="col-md-6">
              <div className=" d-flex justify-content-between">
                <h3 className="text-left ml-2 ">Danh sách công việc</h3>
              </div>
            </div>
            <div className="col-md-6">
              <Search changeFilterSearch={this.props.changeFilterSearch} />
            </div>
          </div>
        </div>
        <div className="px-3">
          <table className="table table-hover">
            <TableHeader />
            {elementItemTask}
          </table>
        </div>
      </div>
    );
  }
}
export default TaskItem;
