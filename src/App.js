import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreen from "./components/home/Home";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
