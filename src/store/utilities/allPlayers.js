import axios from 'axios';

// ACTION TYPES;
const FETCH_ALL_PLAYERS = "FETCH_ALL_PLAYERS";

// ACTION CREATORS;
const fetchAllPlayers = players => {
  return {
    type: FETCH_ALL_PLAYERS,
    payload: players
  }
}

// THUNK CREATORS;
export const fetchAllPlayersThunk = () => dispatch => {
  return axios
    .get('/api/players')
    .then(res => res.data)
    .then(players => dispatch(fetchAllPlayers(players)))
    .catch(err => console.log(err))
}

// REDUCER;
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_PLAYERS:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;
