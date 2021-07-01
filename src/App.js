import "./styles.css";
import logo from "./thai-affair-logo-ig.jpeg";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Employees from "./Employees/Employees";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Thai Affair"
    };
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="container mt-2" style={{ marginTop: 40 }}>
            <Switch>
              <Route exact path="/"></Route>
              <Route exact path="/Employees">
                <Employees />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
