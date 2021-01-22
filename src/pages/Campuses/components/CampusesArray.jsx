import React from "react";

import { connect } from 'react-redux';
import { getAllCampuses } from '../../../redux/reducers/index.js';

import Campus from "./CampusArray/components/NewCampus"

class CampusesArray extends React.Component {
  async componentDidMount () {
    console.log( 'component did mount' );
    await this.props.getAllCampuses();
    console.log( "we gucci" );
  }
  render () {
    console.log( this.props.getAllCampuses );
    return (
      <div>
        {this.props.campusesList.map( ( campus, index ) => {
          return (
            <Campus
              key={ index }
              studentsNumber={ index + 1 }
              campusName={ campus.name }
              img = {campus.imageUrl}
            />
          );
        } ) }
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  console.log( 'Map state to props..' );
  return {
    campusesList: state.campuses,
  };
};

const mapDispatchToProps = ( dispatch ) => {
  console.log( 'Map dispatching to props..' );
  return {
    getAllCampuses: () => dispatch( getAllCampuses() ),
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( CampusesArray );
