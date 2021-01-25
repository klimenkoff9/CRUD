import React from 'react';
import Student from '../../../Student';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getSingleCampus, getSingleStudent } from '../../../../../redux/reducers';
import axios from 'axios';

class StudentCampus extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            campusId: '',
            campusName: '',
            campusUrl: '',
            numberOfStudents: []
        }
    }
    async componentDidMount () {
        await this.props.getSingleStudent( this.props.StudentId );
        this.setState({
            campusId : this.props.student.campusId
        })
        await this.props.getSingleCampus( this.props.student.campusId );
        this.props.campus.map( ( item ) => {
            this.setState( {
                campusName: item.name,
                campusUrl: item.imageUrl,
                numberOfStudents: item.students
            } )
        } )
        console.log( "the campus id for this student" + this.props.student.campusId );
    }

    render () {
        const { firstName, lastName, imageUrl, email, gpa, id, campusId } = this.props.student;
        return (
            <div width = "340px">
                {this.state.campusId ?
                    <div>
                        <h1>This student is registered to a campus</h1>
                        <div className="campus-card">
                            <img src={ this.state.campusUrl } width="280px" height="220px"></img>
                            <Link to={ `/campuses/${this.state.campusId}` }><h2>{ this.state.campusName }</h2></Link>
                            <h4>{ this.state.numberOfStudents.length } Students</h4>
                        </div>
                    </div> :
                    <div className="no-campus">
                        <h1>This student is not registered to a campus</h1>
                    </div>
                }
                <br></br>
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
    };
}
export default connect( mapStateToProps, mapDispatchToProps )( StudentCampus );