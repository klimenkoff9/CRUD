import React from "react";
import { Route, Switch } from "react-router-dom";

import AllCampuses from "../pages/AllCampuses/Campuses.jsx";
import Home from "../pages/Home/Home";
import CampusInfo from "../pages/Campuses/components/Campus-info/campusInfo.jsx";
import StudentInfo from "../pages/Students/StudentInfo/studentInfo.jsx";
import AddStudent from "../pages/Students/AddStudent";
import Submitted from "../pages/Submitted/submitted.jsx";
import ShowCampus from "../pages/ShowCampus/ShowCampus";
import Student from "../pages/Students/Student.jsx"
import EditCampus from "../pages/EditCampus/EditCampus.jsx"
import EditStudent from "../pages/Students/components/EditStudent/EditStudent.jsx"

import AllStudents from "../pages/AllStudents/Students"
import AddCampus from "../pages/AddCampus/AddCampus.jsx";
import AddStudentForm from "../pages/AddStudent/components/AddStudentForm.jsx"


const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>

			<Route exact path="/campuses">
				<AllCampuses />
			</Route>

			<Route exact path="/campuses/:id" component = {ShowCampus} />

			<Route exact path = "/students">
				<AllStudents />
			</Route>

	 		 <Route exact path = "/student/:StudentId" component = {Student}/>

			<Route exact path = "/addcampus">
				<AddCampus/> 
			</Route>

			<Route exact path = "/:path/:campusID/addstudent">
				<AddStudentForm/> 
			</Route>
			
			<Route exact path = "/campuses/:id/edit" component={EditCampus}/>
			<Route exact path = "/student/:id/edit" component={EditStudent}/>
		</Switch>
	);
};

export default Routes;
