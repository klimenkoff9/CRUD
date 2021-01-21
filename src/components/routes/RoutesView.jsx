import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AllPlayersContainer } from '../containers';

// routes for components 
/* 5 student routes : 
  GET(all students) | GET(student by ID) | CREATE/POST(create student and update database) | UPDATE|PUT(update student information) | DELETE(delete student from database)
  5 college routes : 
  GET(all colleges) | GET(college by ID) | CREATE/POST(create college and update database) | UPDATE|PUT(update college information) | DELETE(delete college from database)
*/
const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={AllPlayersContainer} />
    </Switch>
  )
}

export default RoutesView;
