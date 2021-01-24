import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCampuses, getSingleCampus, getSingleStudent } from '../../../redux/reducers';
import { Link } from 'react-router-dom';

import "./studentInfo.css";

class StudentInfo extends Component {


    async componentDidMount () {
        console.log( 'component did mount' );
        console.log( "props of component" + this.props );
        const { match: { params: { StudentId } } } = this.props;
        console.log( `this is the Student name ${StudentId}` );
        await this.props.getSingleStudent( StudentId );
        console.log( `THE STUDENT OBJECT I RETRIEVED ${this.props.student.firstName}` )
        this.setState( {
            studentId: StudentId,
            firstName: this.props.student.firstName,
            lastName: this.props.student.lastName,
            gpa: this.props.student.gpa,
            email: this.props.student.email,
            imageUrl: this.props.student.imageUrl,
            campusId: this.props.student.campusId
        } )
        await this.props.getSingleCampus( this.state.campusId );
        this.props.campus.map( ( item ) => {
            this.setState( {
                campusName: item.name,
                campusUrl: item.imageUrl,
                numberOfStudents: item.students
            } )
        } )
    }

    render () {
        return (
            <div>
                <div className="row">
                    <div className="column">
                        <img src={ this.state.imageUrl } width="400px" height="300px"></img>
                    </div>
                    <div className="column">
                        <h1>ID: { this.state.studentId } | { this.state.firstName } { this.state.lastName }</h1>
                        <h3>{ this.state.email }</h3>
                        <h3>{ this.state.gpa }</h3>
                    </div>
                </div>
                <br></br>
                <div className="row2">
                    <button>EDIT</button>
                    <button>DELETE</button>
                </div>
                <br></br>
                {this.state.campusName ?
                    <div>
                        <h1>This student is registered to a campus</h1>
                        <div className="campus-card">
                            <img src={ this.state.campusUrl } width="180px" height="120px"></img>
                            <Link to={ `/campuses/${this.state.campusId}` }><h3>{ this.state.campusName }</h3></Link>
                            <p>{ this.state.numberOfStudents.length } Students</p>
                        </div>
                    </div> :
                    <div className="no-campus">
                        <h1>This student is not registered to a campus</h1>
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