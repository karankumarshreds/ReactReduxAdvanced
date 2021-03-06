import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { WithoutAuth } from '../utils/without-auth';
import { WithAuth } from '../utils/with-auth';
import history from '../utils/history';
// components
import Navbar from './Layout/Navbar';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import ProfileScreen from '../screens/ProfileScreen';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/product/:id" exact component={ProductScreen} />
          <Route path="/cart" exact component={WithAuth(CartScreen)} />
          <Route path="/signin" exact component={WithoutAuth(SigninScreen)} />
          <Route path="/signup" exact component={WithoutAuth(SignupScreen)} />
          <Route path="/profile" exact component={WithAuth(ProfileScreen)} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
