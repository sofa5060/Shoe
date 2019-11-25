import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreen from "./components/home/Home";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import SearchPage from "./components/products/SearchPage"
import NavBar from "./components/layout/NavBar"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/navbar" component={NavBar} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
