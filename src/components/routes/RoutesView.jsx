import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AllPlayersContainer } from '../containers';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={AllPlayersContainer} />
    </Switch>
  )
}

export default RoutesView;
