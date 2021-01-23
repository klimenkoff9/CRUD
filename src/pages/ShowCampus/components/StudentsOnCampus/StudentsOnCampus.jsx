import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getSingleCampus, postSingleStudent } from '../../../../redux/reducers/index';

import Student from "../../../Students/Student.jsx"
import "./campusInfo.css";

class CampusInfo extends Component {

    constructor ( props ) {
        super( props );
        this.state = {
            students: [],
            addStudent: false,
            studentName: "",
            email: "",
            gpa: 0
        }
    }

    async componentDidMount () {
       
    }

    handleAddStudent = () => {
        console.log("about to add student")
        this.setState( {
            addStudent: !this.state.addStudent
        } )
    }

    handleAddStudentSubmit = () => {
        let nameArr = this.state.studentName.split( " " );
        let obj = {
            firstName: nameArr[ 0 ],
            lastName: nameArr[ 1 ],
            email: this.state.email,
            gpa: this.state.gpa,
            campusId: this.state.id
        }
        this.setState( {
            addStudent: false
        } )
        this.props.postSingleStudent(obj);
    }

    render () {
        return (
            <div>
                <h1>Students On Campus</h1>
                {this.state.addStudent ?
                    <div>
                        <form>
                            <label>
                                Student Name
                                <input type="text" placeholder={ "firstname lastname" } name="studentName" onChange={ e => this.setState( { [ e.target.name ]: e.target.value } ) }></input>
                            </label>
                            <label>
                                Email
                                <input type="text" placeholder={ "firstlast@email.com" } name="email" onChange={ e => this.setState( { [ e.target.name ]: e.target.value } ) }></input>
                            </label>
                            <label>
                                GPA
                                <input type="decimal" placeholder={ "0-4" } name="gpa" onChange={ e => this.setState( { [ e.target.name ]: e.target.value } ) }></input>
                            </label>

                        </form>
                        <button onClick={ this.handleAddStudentSubmit }>Add Student</button>
                        <button onClick={ e => this.setState( { addStudent: false } ) }>Cancel</button>
                    </div> :
                    ( this.state.students.length > 0 ? <div className="student-on-campus">

                        <button onClick={ this.handleAddStudent }>Add Student</button>
                        <div>
                            { this.state.students.map( ( student, index ) => {
                                return (
                                    <Student
                                        key = {index}
                                        StudentId = {student.id}
                                        campusId={ this.state.id }
                                        campusname={ this.state.campusName }
                                        firstName={ student.firstName }
                                        lastName={ student.lastName }
                                        imageUrl={ student.imageUrl }
                                        gpa={ student.gpa }
                                        email={ student.email }
                                    />
                                )
                            } ) }
                        </div>
                    </div> :
                        <div className="no-student-on-campus">
                            <h3>There are no students currently registered to this campus</h3>
                            <button onClick={ this.handleAddStudent }>Add Student</button>
                        </div>
                    ) }
                {console.log( this.state.students ) }
            </div>
        )
    }
}
const mapStateToProps = ( state ) => {
    console.log( 'Map state to props..' );
    return {
        campus: state.campus,
    };
};

const mapDispatchToProps = ( dispatch ) => {
    console.log( 'Map dispatching to props..' );
    return {
        postSingleStudent : (studentObj) => dispatch(postSingleStudent(studentObj)),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( CampusInfo );