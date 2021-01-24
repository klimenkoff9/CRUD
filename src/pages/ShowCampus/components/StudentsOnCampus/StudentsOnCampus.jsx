import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getStudentsByCampus } from "../../../../redux/reducers/index";

import PrintAllStudents from '../../../PrintAllStudents/PrintAllStudents';
class StudentsOnCampus extends Component {
  async componentDidMount() {
    console.log("component did mount");
    console.log(this.props.id);
    try {
      await this.props.getStudentsByCampus(3);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
      {console.log(this.props.studentsByCampus)}
        {this.props.studentsByCampus.map((student, index) => {
          return (
            <PrintAllStudents
              key={index}
              firstName={student.firstName}
              lastName={student.lastName}
              studentImage={student.imageUrl}
              campusName="Brooklyn"
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("Map state to props..");
  return {
    studentsByCampus: state.studentsByCampus,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("Map dispatching to props..");
  return {
    getStudentsByCampus: () => dispatch(getStudentsByCampus()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentsOnCampus);
