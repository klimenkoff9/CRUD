import React from "react";
import { Route, Switch } from "react-router-dom";

import Campuses from "../pages/Campuses/Campuses.jsx";
import Home from "../pages/Home/Home";
import CampusInfo from "../pages/Campuses/components/Campus-info/campusInfo.jsx";
import StudentInfo from "../pages/Students/StudentInfo/studentInfo.jsx";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/campuses">
				<Campuses />
			</Route>
      <Route path="/campuses/:id" component = {CampusInfo} />
	  <Route path="/student/:StudentId" component = {StudentInfo} />
		</Switch>
	);
};

export default Routes;
