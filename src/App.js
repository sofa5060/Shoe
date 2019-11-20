import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreen from "./components/home/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
