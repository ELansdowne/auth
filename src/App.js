import React, { Component } from "react";
import "./App.css";
import Aux from "./hoc/Auxi";
import { Switch, Redirect, Route } from "react-router";
import Dashboard from "./containers/Dashboard/Dashboard";
import Signup from "./containers/Signup/Signup";

class App extends Component {
  render() {
    return (
      <Aux>
        <Route exact path={"/"} component={Dashboard} />
        <Route path={"/signup"} component={Signup} />
      </Aux>
    );
  }
}

export default App;
