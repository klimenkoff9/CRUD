import React from "react";

import { connect } from 'react-redux';
import { getAllStudents } from '../../../../redux/reducers/index.js';

import PrintAllStudents from '../PrintAllStudents/PrintAllStudents.jsx';

class AllStudentsArray extends React.Component {
    async componentDidMount() {
    console.log('component did mount');
    await this.props.getAllStudents();
    console.log("we good");
  }
  render() {
    console.log(this.props.students);
    return (
      <div>
        {this.props.students.map((student, index) => {
          return (
            <PrintAllStudents
              key={index}
              firstName = {student.firstName}
              lastName = {student.lastName}
              studentImage = {student.imageUrl}
              campusName = "Brooklyn"
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
    students: state.students,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log('Map dispatching to props..');
  return {
    getAllStudents: () => dispatch(getAllStudents()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllStudentsArray);
