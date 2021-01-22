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
            campusName: '',
            id: 0,
            address: '',
            imageUrl: '',
            description: '',
            students: [],
            addStudent: false,
            studentName: "",
            email: "",
            gpa: 0
        }
    }

    async componentDidMount () {
        console.log( 'component did mount' );
        console.log( "props of component" + this.props );
        const { match: { params: { CampusName } } } = this.props;
        console.log( `this is the campus name ${CampusName}` );
        await this.props.getSingleCampus( CampusName )
        console.log( `this is the campus data ${CampusName}` );
        this.props.campus.map( ( item ) => {
            this.setState( {
                id: item.id,
                campusName: item.name,
                address: item.address,
                imageUrl: item.imageUrl,
                description: item.description,
                students: item.students
            } )
        } )
    }

    handleAddStudent = () => {
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
                <div className="row">
                    <div className="column">
                        <img src={ this.state.imageUrl } alt="campus image" width="400px" height="300px"></img>
                    </div>
                    <div className="column">
                        <h1>ID: { this.state.id } | { this.state.campusName }</h1>
                        <p>{ this.state.description }</p>
                    </div>
                </div>
                <div className="row2">
                    <h3>{ this.state.address }</h3>
                    <button>EDIT</button>
                    <button>DELETE</button>
                </div>
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
                            <button>Add Student</button>
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
        getSingleCampus: ( name ) => dispatch( getSingleCampus( name ) ),
        postSingleStudent : (studentObj) => dispatch(postSingleStudent(studentObj)),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( CampusInfo );