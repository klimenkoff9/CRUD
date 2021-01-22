//imports
import axios from "axios";

//Action Types
import { GOT_ALL_CAMPUSES, GOT_SINGLE_CAMPUS } from "./actionTypes";

//Initial State-- Look at stateful components and transfer over
const initialState = {
	campuses: [],
	campus : []
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

const rootReducer = (state = initialState, action) => {
	console.log("REDUCER IS PROCESSING DISPATCHED ACTION");
	console.log("state", state);
	console.log("action", action);
	switch (action.type) {
		case GOT_ALL_CAMPUSES:
			return { ...state, campuses: action.payload };
		case GOT_SINGLE_CAMPUS:
			return {...state, campus : action.payload};
		default:
			return state;
	}
};

export default rootReducer;
