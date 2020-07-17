import React, { Component } from "react";

class AddNewTask extends Component {
  handleOnClick = () => {
    this.props.clearBeforeAddTask();
  }
  render() {
    return (
      <button
          type="button"
          className="btn mt-2 btn--newTask"
          data-toggle="modal"
          data-target="#modalTask"
          onClick={this.handleOnClick}
        >
          Tạo Task mới
        </button>
    );
  }
}
export default AddNewTask;
