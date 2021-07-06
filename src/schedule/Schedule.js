import React, { Component } from "react";

class Schedule extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div>
        <h1>Schedule</h1>
      </div>
    );
  }
}

export default Schedule;
