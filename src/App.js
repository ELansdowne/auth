import React, { Component } from "react";
import "./App.css";
import Aux from "./hoc/Auxi";
import { Switch, Redirect, Route } from "react-router";
import Dashboard from "./containers/Dashboard/Dashboard";
import Signup from "./containers/Signup/Signup";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Aux>
          <Route exact path={"/"} component={Dashboard} />
          <Route path={"/signup"} component={Signup} />
        </Aux>
      </MuiThemeProvider>
    );
  }
}

export default App;
