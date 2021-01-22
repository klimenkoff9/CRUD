import React from "react";

import { connect } from 'react-redux';
import { getAllCampuses } from '../../redux/reducers/index.js';

import Campus from "./components/Campus"

class Campuses extends React.Component {
    async componentDidMount() {
    console.log('component did mount');
    await this.props.getAllCampuses();
    console.log("we gucci");
  }
  render() {
    console.log(this.props.getAllCampuses);
    return (
      <div>
        {this.props.getAllCampuses.map((campus, index) => {
          return (
            <Campus
              key={index}
              studentsNumber={index + 1}
              campusName={campus.name}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Map state to props..');
  return {
    getAllCampuses: state.campuses,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log('Map dispatching to props..');
  return {
    getAllCampuses: () => dispatch(getAllCampuses()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
