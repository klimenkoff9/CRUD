import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Campuses from "../pages/Campuses/Campuses.jsx";
import Home from "../pages/Home/Home";

//edit Campus placeholder
import EditCampus from "../pages/Campuses/components/CampusArray/components/EditCampus.jsx"
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/campuses">
        <Campuses />
      </Route>
      <Route path = "/edit"><EditCampus/></Route>
    </Switch>
  );
};

export default Routes;