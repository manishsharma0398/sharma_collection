import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage";
import "./App.css";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/header/Header";
import Auth from "./pages/auth/Auth";

// import Firebase from "./firebase/firebase.utils";
import { auth } from "./firebase/firebase.utils";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    // const auth = new Firebase().auth;
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  unsubscribeFromAuth = null;

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={Auth} />
        </Switch>
      </div>
    );
  }
}
