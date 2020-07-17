import React, { Component } from "react";

// IMPORT COMPONENTS
import InitializeTask from "./control/InitializeTask";
import AddNewTask from "./control/AddNewTask";
import FilterLabel from "./control/FilterLabel";
import FilterProgress from "./control/FilterProgress";
import FilterPriority from "./control/FilterPriority";
import Sort from "./control/Sort";

class Control extends Component {
  render() {
    return (
      <div className="col-md-3 text-center px-0">
        <div className="header header--left d-flex align-items-center">
          <img src="./img/user_1.jpg" className="ml-2 user" alt="user" />
          <h3 className="text-white d-inline font-weight-light ml-2">
            Lê Quang Song
          </h3>
        </div>
        <AddNewTask clearBeforeAddTask={this.props.clearBeforeAddTask} />
        <InitializeTask generateData={this.props.generateData} />
        {/* Filter */}
        <div className="px-3">
          <FilterProgress changeFilterStatus={this.props.changeFilterStatus} />
          <FilterLabel changeFilterLabel={this.props.changeFilterLabel} />
          <FilterPriority changeFilterPriority={this.props.changeFilterPriority} />
          <Sort changeSortType={this.props.changeSortType} />
        </div>
      </div>
    );
  }
}
export default Control;
