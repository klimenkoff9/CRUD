import React from "react";
import { Route, Switch } from "react-router-dom";

import Campuses from "../pages/Campuses/Campuses.jsx";
import Home from "../pages/Home/Home";
import CampusInfo from "../pages/Campuses/components/CampusArray/components/Campus-info/campusInfo.jsx";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/campuses">
				<Campuses />
			</Route>
      <Route path="/campuses/:CampusName" component = {CampusInfo} />
		</Switch>
	);
};

export default Routes;
