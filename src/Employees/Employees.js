import React, { Component } from "react";

class Employees extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    console.log("test2134123");
    return (
      <div>
        <h1> Employee </h1>
      </div>
    );
  }
}

export default Employees;
