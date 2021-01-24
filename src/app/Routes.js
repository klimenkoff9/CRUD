import React from "react";
import { Route, Switch } from "react-router-dom";

import AllCampuses from "../pages/AllCampuses/Campuses.jsx";
import Home from "../pages/Home/Home";
import ShowCampus from "../pages/ShowCampus/ShowCampus";
import Student from "../pages/Students/StudentInfo/studentInfo.jsx"

import AllStudents from "../pages/AllStudents/Students"
import AddCampus from "../pages/AddCampus/AddCampus.jsx";


const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>

			<Route exact path="/campuses">
				<AllCampuses />
			</Route>

			<Route path="/campuses/:id" component = {ShowCampus} />

			<Route path = "/students">
				<AllStudents />
			</Route>

	 		 <Route path = "/student/:StudentId" component = {Student}/>

			<Route path = "/addcampus">
				
				<AddCampus/> 
			</Route>

		</Switch>
	);
};

export default Routes;
