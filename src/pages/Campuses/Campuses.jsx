import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchAllCampusesThunk, FETCH_ALL_CAMPUSES } from "../../store/utilities/allCampuses";

class Campuses extends Component {
  render () {
    return (
      <div>
        <h1>Hello Campuses</h1>
      </div>
    )
  }
};

const matchStateToProps = (state) => {
  console.log( `MATCH STATE TO PROPS` );
  return{
    campuses : state.campuses
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(`MAP DISPATCH TO PROPS`);
  return {
    getAllCampuses : () => dispatch(fetchAllCampusesThunk())
  }
}



export default connect( matchStateToProps, mapDispatchToProps )( Campuses );
