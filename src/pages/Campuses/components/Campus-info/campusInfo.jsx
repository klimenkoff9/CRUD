import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleCampus } from '../../../../redux/reducers/index';

import "./campusInfo.css";

class CampusInfo extends Component {

    constructor ( props ) {
        super( props );
        this.state = {
            campusName: '',
            address: '',
            imageUrl: '',
            description: '',
            students: []
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
                campusName: item.name,
                address: item.address,
                imageUrl: item.imageUrl,
                description: item.description,
                students: item.students
            } )
        } )
    }
    render () {

        return (
            <div>
                <div className="row">
                    <div className="column">
                        <img src={ this.state.imageUrl } alt="campus image" width="400px" height="300px"></img>
                    </div>
                    <div className="column">
                        <h1>{ this.state.campusName }</h1>
                        <p>{ this.state.description }</p>
                    </div>
                </div>
                <div className="row2">
                    <h3>{ this.state.address }</h3>
                    <button>EDIT</button>
                    <button>DELETE</button>
                </div>
                {this.state.student > 0 ? <div className="student-on-campus">
                    <h1>Students On Campus</h1>
                    <button>Add Student</button>
                   {/*  <div>
                        {this.state.students.map((student, index) => {
                            <Student 
                                firstName = {student.firstName}
                                lastName = {student.lastName}
                                imageUrl = {student.imageUrl}
                                gpa = {student.gpa}
                                email = {student.email}
                            />
                        })}
                    </div> */}
                </div> :  <div className="no-student-on-campus">
                    <h1>Students On Campus</h1>
                    <h3>There are no students currently registered to this campus</h3>
                    <button>Add Student</button>
                </div> }
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
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( CampusInfo );