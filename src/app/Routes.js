import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Campuses from "../pages/Campuses/Campuses"
import Home from "../pages/Home/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/campuses">
        <Campuses />
      </Route>
    </Switch>
  );
};

export default Routes;