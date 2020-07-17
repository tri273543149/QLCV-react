import React, { Component } from "react";

class InitializeTask extends Component {
  handleOnClick = () => {
    this.props.generateData();
  }
  render() {
    return (
      <button
          type="button"
          className="btn mt-2 btn--initializeTask"
          onClick={() => this.handleOnClick()}
        >
          Local storage
        </button>
    );
  }
}
export default InitializeTask;