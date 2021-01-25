import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleStudent } from '../../../../redux/reducers';

import ShowStudentInfo from "./components/ShowStudentInfo"
import CampusCard from "./components/campusCard"
import Campus from '../../../AllCampuses/components/NewCampus/NewCampus';

class StudentInfo extends Component {


    async componentDidMount () {
        await this.props.getSingleStudent(this.props.StudentId);
        // await this.props.getSingleCampus( this.state.campusId );
        // this.props.campus.map( ( item ) => {
        //     this.setState( {
        //         campusName: item.name,
        //         campusUrl: item.imageUrl,
        //         numberOfStudents: item.students
        //     } )
        // } )
        console.log("the campus id for this student" + this.props.student.campusId);
    }

    render () {
        const { firstName, lastName, imageUrl, email, gpa, id, campusId } = this.props.student;
        return (
            
            <div>
            <ShowStudentInfo 
                firstName = {firstName}
                lastName = {lastName}
                imageUrl = {imageUrl}
                email = {email}
                gpa = {gpa}
                id = {id}
                campusId = {campusId}
                StudentId = {this.props.StudentId}
            />
                {/* {this.props.campusName ?
                    <div>
                        <h1>This student is registered to a campus</h1>
                        <div className="campus-card">
                            <img src={ this.props.campusUrl } width="180px" height="120px"></img>
                            <Link to={ `/campuses/${this.props.campusId}` }><h3>{ this.props.campusName }</h3></Link>
                            <p>{ this.state.numberOfStudents.length } Students</p>
                        </div>
                    </div> :
                    <div className="no-campus">
                        <h1>This student is not registered to a campus</h1>
                    </div>
                } */}
            <br></br>
            </div>
        )
    }
}

const mapStateToProps = ( state ) => {
    console.log( 'Map state to props..' );
    return {
        student: state.student,
        // campus: state.campus,
    };
}

const mapDispatchToProps = ( dispatch ) => {
    console.log( 'Map dispatching to props..' );
    return {
        getSingleStudent: ( id ) => dispatch( getSingleStudent( id ) ),
        // getSingleCampus: ( id ) => dispatch( getSingleCampus( id ) ),
        // getAllCampuses: () => dispatch( getAllCampuses() ),
    };
}
export default connect( mapStateToProps, mapDispatchToProps )( StudentInfo );