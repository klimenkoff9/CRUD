import React from "react";
import { Route, Switch } from "react-router-dom";

import AllCampuses from "../pages/AllCampuses/Campuses.jsx";
import Home from "../pages/Home/Home";
import CampusInfo from "../pages/Campuses/components/Campus-info/campusInfo.jsx";
import StudentInfo from "../pages/Students/StudentInfo/studentInfo.jsx";
import AddStudent from "../pages/Students/AddStudent";
import Submitted from "../pages/Submitted/submitted.jsx";
import ShowCampus from "../pages/ShowCampus/ShowCampus";
import Student from "../pages/Students/StudentInfo/studentInfo.jsx"

import AllStudents from "../pages/AllStudents/Students"

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
			<Route exact path = "/submitted" component={Submitted}/>
			<Route path="/campuses/:id" component={CampusInfo} />
			//<Route path="/student/:StudentId" component={StudentInfo} />
			{/* THIS IS THE ROUTE TO ADD STUDENTS IN A CAMPUS */}
			<Route exact path = "/AddStudent/:campusId" component={AddStudent}/>
			{/* ROUTE TO RENDER ADD STUDENT FORM WITH ANOTHER PATH */}
	  <Route path = "/student/:StudentId" component = {Student}/>
		</Switch>
	);
};

export default Routes;
