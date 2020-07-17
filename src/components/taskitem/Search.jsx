import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterSearch: "",
    };
  }
  handleOnFilterSearch = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.props.changeFilterSearch(this.state.filterSearch);
      }
    );
  };
  render() {
    return (
      <div className="form-group text-left my-0">
        <input
          type="text"
          className="form-control"
          placeholder="Tìm kiếm công việc"
          name="filterSearch"
          onChange={this.handleOnFilterSearch}
        />
      </div>
    );
  }
}
export default Search;
