//imports
import axios from "axios";
import { bindActionCreators } from "redux";

//Action Types
import { GOT_ALL_CAMPUSES, GOT_SINGLE_CAMPUS, GOT_SINGLE_STUDENT } from "./actionTypes";

//Initial State-- Look at stateful components and transfer over
const initialState = {
	campuses: [],
	campus : [],
	student : []
}
//Action Creators
const gotAllCampuses = (payload) => ({
	type: GOT_ALL_CAMPUSES,
	payload,
});
// Action Creator to get single campus
const gotSingleCampus = (payload) => ({
	type:  GOT_SINGLE_CAMPUS,
	payload,
})

// action creator for single student
const gotSingleStudent = (payload) => ({
	type: GOT_SINGLE_STUDENT,
	payload,
})
//Thunks - Just action creators that take a function

export const getAllCampuses = () => {
	console.log("ABOUT TO THUNK");
	return async (dispatch) => {
		try {
			/* const data = [
				{ name: "Brooklyn" },
				{ name: "Baruch" },
				{ name: "Hunter" },
				{ name: "City" },
				{ name: "Queens" },
				{ name: "Lehman" },
			]; */
			const {data} = await axios.get(`http://localhost:8080/api/campus`);

			console.log("WE WANT THIS RESPONSE", data);

			console.log("ABOUT TO DISPATCH DATA");
			dispatch(gotAllCampuses(data));
		} catch (error) {
			console.error(error);
		}
	};
};

export const getSingleCampus = (campusName) => {
	console.log("ABOUT TO THUNK FOR SINGLE CAMPUS");
	return async (dispatch) => {
		try {
			const {data} = await axios.get(`http://localhost:8080/api/campus/${campusName}`);
			console.log("WE WANT THIS SINGLE RESPONSE", data);
			console.log("ABOUT TO DISPATCH DATA");
			dispatch(gotSingleCampus(data));
		} catch (error) {
			console.error(error);
		}
	}
}

// thunk to get single student by id
export const getSingleStudent = (id) => {
	console.log("ABOUT TO THUNK TO GET SINGLE STUDENT");
	return async(dispatch) => {
		try {
			const {data} = await axios.get(`http://localhost:8080/api/student/${id}`)
			console.log("WE WANT THIS SINGLE RESPONSE: " + data.student);
			console.log("ABOUT TO DISPATCH DATA");
			dispatch(gotSingleStudent(data.student));
		} catch (error) {
			console.error(error);
		}
	}
}
// think to post a student to student table in database
export const postSingleStudent = (studentObj) => {
	console.log("ABOUT TO THUNK TO ADD SINGLE STUDENT");
	return async (dispatch) => {
		try {
			await axios.post(`http://localhost:8080/api/student`, studentObj)
			.then(response => {
				console.log(response)
			})
		} catch (error) {
			console.error(error);
		}
	}
}

const rootReducer = (state = initialState, action) => {
	console.log("REDUCER IS PROCESSING DISPATCHED ACTION");
	console.log("state", state);
	console.log("action", action);
	switch (action.type) {
		case GOT_ALL_CAMPUSES:
			return { ...state, campuses: action.payload };
		case GOT_SINGLE_CAMPUS:
			return {...state, campus : action.payload};
		case GOT_SINGLE_STUDENT:
			return {...state, student: action.payload};
		default:
			return state;
	}
};

export default rootReducer;
