import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Home, Checkout, Transaction } from '../pages';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/transaction" component={Transaction} />
    </Switch>
  </BrowserRouter>
);

export default Router;
