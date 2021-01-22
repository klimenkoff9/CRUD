import React from "react";

import { connect } from 'react-redux';
import { getAllCampuses } from '../../redux/reducers/index.js';

class Campuses extends React.Component {
    async componentDidMount() {
    console.log('component did mount');
    await this.props.getAllCampuses();
  }
    render() {
    return <h1>Hello Campuses</h1>;
    }
}

const mapStateToProps = (state) => {
  console.log('Map state to props..');
  return {
    campus: state.campusName,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log('Map dispatching to props..');

  return {
    getAllCampuses: () => dispatch(getAllCampuses()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
