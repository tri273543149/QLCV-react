import React, { Component } from "react";

class FilterProgress extends Component {
  handleOnFilterStatus = (filterStatus) => {
    this.props.changeFilterStatus(filterStatus);
  };
  render() {
    return (
      <div className="filter filter--progress mt-3">
        <ul className="list-unstyled text-left">
          <li
            className="py-1 display-5 lead"
            onClick={this.handleOnFilterStatus.bind(this, -1)}
          >
            <i className="fa fa-book mr-2"></i>
            Tất cả công việc
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={this.handleOnFilterStatus.bind(this, 1)}
          >
            <i className="fa fa-spinner mr-2"></i>
            Đang thực hiện
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={this.handleOnFilterStatus.bind(this, 2)}
          >
            <i className="fa fa-anchor mr-2"></i>
            Chưa bắt đầu
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={this.handleOnFilterStatus.bind(this, 3)}
          >
            <i className="fa fa-check-square-o mr-2" />
            Hoàn thành
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={this.handleOnFilterStatus.bind(this, 4)}
          >
            <i className="fa fa-trash-o mr-2" />
            Hủy bỏ
          </li>
        </ul>
      </div>
    );
  }
}
export default FilterProgress;
