import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Home, Checkout } from '../pages';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/checkout" component={Checkout} />
    </Switch>
  </BrowserRouter>
);

export default Router;
