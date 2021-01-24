import React from "react";
import { Route, Switch } from "react-router-dom";

import Campuses from "../pages/Campuses/Campuses.jsx";
import Home from "../pages/Home/Home";
import CampusInfo from "../pages/Campuses/components/Campus-info/campusInfo.jsx";
import StudentInfo from "../pages/Students/StudentInfo/studentInfo.jsx";
import AddStudent from "../pages/Students/AddStudent";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/campuses">
				<Campuses />
			</Route>
			<Route path="/campuses/:id" component={CampusInfo} />
			<Route path="/student/:StudentId" component={StudentInfo} />
			{/* THIS IS THE ROUTE TO ADD STUDENTS IN A CAMPUS */}
			<Route exact path = "/AddStudent/:campusId" component={AddStudent}/>
			{/* ROUTE TO RENDER ADD STUDENT FORM WITH ANOTHER PATH */}
		</Switch>
	);
};

export default Routes;
