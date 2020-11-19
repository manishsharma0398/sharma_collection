import React from "react";

import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage";
import "./App.css";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
