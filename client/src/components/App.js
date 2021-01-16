import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import HomeScreen from "../screens/HomeScreen";

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
