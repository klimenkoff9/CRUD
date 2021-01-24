import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getAllCampuses, getSingleCampus, getSingleStudent } from '../../../redux/reducers';
import { Link } from 'react-router-dom';

import "./studentInfo.css";
import AssignCampus from '../StudentInfo/assignCampus/assignCampus';
import CampusCard from "./campusCard";

class StudentInfo extends Component {

    constructor ( props ) {

        super( props )

        this.state = {
            studentId: 0,
            firstName: "",
            lastName: "",
            gpa: 0,
            email: "",
            imageUrl: "",
            campusId: 0,
            campusName: "",
            campusUrl: "",
            numberOfStudents: 0,
            inCampus: false
        }
    }

    async componentDidMount () {
        console.log( 'component did mount' );
        console.log( "props of component" + this.props );
        const { match: { params: { StudentId } } } = this.props;
        console.log( `this is the Student name ${StudentId}` );
        await this.props.getSingleStudent( StudentId );
        console.log( `THE STUDENT OBJECT I RETRIEVED ${this.props.student.firstName}` )
        this.setState( {
            studentId: StudentId
        })
        await this.props.getSingleCampus( this.props.student.campusId );
        // NEEDS TO MAP THROUGH CAMPUS OR ELSE VALUES BECOME UNDEFINED (LINES 43-49)
        this.props.campus.map( ( item ) => {
            this.setState( {
                campusName: item.name,
                campusUrl: item.imageUrl,
                numberOfStudents: item.students
            } )
        } )
        console.log(this.state.campusName)
    }

    handleDelete = () => {
        try {
            axios.delete( `http://localhost:8080/api/student/${this.state.studentId}` );
            this.props.history.push( `/campuses/${this.state.campusId}` );
        } catch ( error ) {
            console.log( error )
        }
    }
    render () {
        return (
            <div>
                <div className="row">
                    <div className="column">
                        <img src={ this.props.student.imageUrl } width="400px" height="300px"></img>
                    </div>
                    <div className="column">
                        <h1>ID: { this.state.studentId } | { this.props.student.firstName } { this.props.student.lastName }</h1>
                        <h3>{ this.props.student.email }</h3>
                        <h3>{ this.props.student.gpa }</h3>
                    </div>
                </div>
                <br></br>
                <div className="row2">
                    <button>EDIT</button>
                    <button onClick={ () => this.handleDelete() }>DELETE</button>
                </div>
                <br></br>
                {this.state.campusName ?
                    <div>
                        <h1>This student is registered to a campus</h1>
                        <CampusCard id = {this.props.student.campusId} />
                        <AssignCampus studentId={ this.state.studentId } />
                    </div> :
                    <div className="no-campus">
                        <h1>This student is not registered to a campus</h1>
                        <AssignCampus studentId={ this.state.studentId } />
                    </div>
                }

            </div>
        )
    }
}

const mapStateToProps = ( state ) => {
    console.log( 'Map state to props..' );
    return {
        student: state.student,
        campus: state.campus,
    };
}

const mapDispatchToProps = ( dispatch ) => {
    console.log( 'Map dispatching to props..' );
    return {
        getSingleStudent: ( id ) => dispatch( getSingleStudent( id ) ),
        getSingleCampus: ( id ) => dispatch( getSingleCampus( id ) ),
        getAllCampuses: () => dispatch( getAllCampuses() ),
    };
}
export default connect( mapStateToProps, mapDispatchToProps )( StudentInfo );