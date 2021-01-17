import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// components
import Navbar from "./Layout/Navbar";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/product/:id" exact component={ProductScreen} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
