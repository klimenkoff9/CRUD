import React from "react";
import { Route, Switch } from "react-router-dom";

import AllCampuses from "../pages/AllCampuses/Campuses.jsx";
import Home from "../pages/Home/Home";
import ShowCampus from "../pages/ShowCampus/ShowCampus";
import Student from "../pages/Students/StudentInfo/studentInfo.jsx"

import AllStudents from "../pages/AllStudents/Students"

//edit Campus placeholder
import EditCampus from "../pages/Campuses/components/Campus-info/EditCampus.jsx"
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
<<<<<<< HEAD
      <Route path="/campuses/:id" component = {CampusInfo} />
	  <Route path="/student/:StudentId" component = {StudentInfo} />
    <Route path = "/edit"><EditCampus/></Route>
=======
	  <Route path = "/student/:StudentId" component = {Student}/>
>>>>>>> 4b440bf4c4c8993f734b2ac2cc525d6fd1827295
		</Switch>
	);
};

export default Routes;
