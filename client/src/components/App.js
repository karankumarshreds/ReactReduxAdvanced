import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// components
import Navbar from "./Layout/Navbar";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/product/:id" exact component={ProductScreen} />
          <Route path="/cart" exact component={CartScreen} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
