import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getSingleCampus } from '../../../../redux/reducers/index';

import Student from "../../../Students/Student.jsx";
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
            addStudent: true
        }
    }

    async componentDidMount () {
        console.log( 'component did mount' );
        console.log( "props of component" + this.props );
        const { match: { params: { id } } } = this.props;
        console.log( `this is the campus id: ${id}` );
        await this.props.getSingleCampus( id )
        console.log( `this is the campus data ${id}` );
        this.props.campus.map( ( item ) => {
            this.setState( {
                id: id,
                campusName: item.name,
                address: item.address,
                imageUrl: item.imageUrl,
                description: item.description,
                students: item.students
            } )
        } )
    }

    handleDelete = async () => {
        console.log( this.props.history );
        try {
            await axios.get( `http://localhost:8080/api/campus/${this.state.id}/delete` );
            this.props.history.push( "/campuses/" );
        } catch ( error ) {
            console.log( error );
        }
    };
    /* CREATED A LINK TO RENDER THE ADD STUDENT COMPONENT WITH CAMPUS ID TO PASS AS PROPS TO ADD STUDENT COMPONENT. IF USED ELSEWHERE, CREATE A DIFFERENT ROUTE */
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
                <br></br>
                <div className="row2">
                    <h3>{ this.state.address }</h3>
                    <button>EDIT</button>
                    <button onClick={ () => this.handleDelete() }>DELETE</button>
                </div>
                <br></br>
                <h1>Students On Campus</h1>
                { ( this.state.students.length > 0 ? <div className="student-on-campus">
                    <Link to = {`/AddStudent/${this.state.id}`}><button>ADD STUDENT</button></Link>
                    <div>
                        { this.state.students.map( ( student, index ) => {
                            return (
                                <Student
                                    key={ index }
                                    StudentId={ student.id }
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
                        <br></br>
                        <Link to = {`/AddStudent/${this.state.id}`}><button>ADD STUDENT</button></Link>
                    </div >
                )
                } { console.log( this.state.students ) }
            </div >
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
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( CampusInfo );