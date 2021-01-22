import axios from 'axios';

// ACTION TYPES;
const FETCH_ALL_CAMPUSES = "FETCH_ALL_CAMPUSES";

const initialState = {
  campuses : []
}

// ACTION CREATORS;
const fetchAllCampuses = campuses => {
  return {
    type: FETCH_ALL_CAMPUSES,
    payload: campuses
  }
}

// THUNK CREATORS;
export const fetchAllCampusesThunk = () => dispatch => {
  return axios
    .get('localhost:8080/api/campus/') // our api
    .then(res => res.data)
    .then(campuses => dispatch(fetchAllCampuses(campuses)))
    .catch(err => console.log(err))
}

// REDUCER;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_CAMPUSES:
      return {... state, campuses: action.payload};
    default:
      return state;
  }
}

export default reducer;
