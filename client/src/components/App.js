import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { WithoutAuth } from "../utils/without-auth";
import { WithAuth } from "../utils/with-auth";
// components
import Navbar from "./Layout/Navbar";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import SigninScreen from "../screens/SigninScreen";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/product/:id" exact component={ProductScreen} />
          <Route path="/cart" exact component={WithAuth(CartScreen)} />
          <Route path="/signin" exact component={WithoutAuth(SigninScreen)} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
