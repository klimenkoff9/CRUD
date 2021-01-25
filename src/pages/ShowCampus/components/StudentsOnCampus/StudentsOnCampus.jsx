import React, { Component } from "react";
import { connect } from "react-redux";
import { getStudentsByCampus } from "../../../../redux/reducers/index";

import PrintAllStudents from '../../../PrintAllStudents/PrintAllStudents';
class StudentsOnCampus extends Component {

  async componentDidMount() {
    console.log("component did mount");
    console.log(this.props.id);
    try {
    await this.props.getStudentsByCampus(this.props.id);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    console.log(this.props.id);
    if (this.props.studentsByCampus.length === 0) {
        console.log("HelloWorld");
        return (
            <h3>No students assigned to this campus</h3>
        );
    } else {
    return (
      <div>
      {console.log(this.props.studentsByCampus)}
        {this.props.studentsByCampus.map((student, index) => {
          return (
            <PrintAllStudents
              key={index}
              id ={student.id}
              campusId = {student.campusId}
              firstName={student.firstName}
              lastName={student.lastName}
              studentImage={student.imageUrl}
              campusId={this.props.id}
            />
          );
        })}
      </div>
    );
    }
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
    getStudentsByCampus: (id) => dispatch(getStudentsByCampus(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentsOnCampus);
