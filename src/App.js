import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreen from "./components/home/Home";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import SearchPage from "./components/products/SearchPage"
import ProductDetails from "./components/products/ProductDetails"
import Cart from "./components/layout/Cart"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/search/:result" component={SearchPage} />
          <Route exact path="/products/:id" component={ProductDetails} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
