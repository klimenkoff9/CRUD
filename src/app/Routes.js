import React from "react";
import { Route, Switch } from "react-router-dom";

import Campuses from "../pages/AllCampuses/Campuses.jsx";
import Home from "../pages/Home/Home";
import ShowCampus from "../pages/ShowCampus/ShowCampus";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/campuses">
				<Campuses />
			</Route>
      <Route path="/campuses/:CampusName" component = {ShowCampus} />
		</Switch>
	);
};

export default Routes;
