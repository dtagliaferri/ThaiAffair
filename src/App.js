import "./styles.css";
import React from "react";
import NavbarHeader from "./components/NavbarHeader";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavbarHeader />
      </div>
    );
  }
}

export default App;
