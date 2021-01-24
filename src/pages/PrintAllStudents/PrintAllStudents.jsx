import React, {useEffect} from "react";
import {Link} from "react-router-dom";

import { connect } from 'react-redux';
import { getSingleCampus } from '../../redux/reducers/index';
import { render } from "react-dom";

class PrintAllStudents extends React.Component {

  componentDidMount = async () => {
    await this.props.getSingleCampus(this.props.campusId)
    console.log(this.props.campus);
  }
  
  render() {
  return (
    <div className="container">
    {console.log("Hello World")}
      <div className="campusCard">
        <div className="studentName"> Name: <Link to={`/student/${this.props.id}`}>{this.props.firstName} {this.props.lastName}</Link></div>
        <div className="campusName"> Campus: {this.props.campus.name }</div>
        <div className="studentImage"><img src={this.props.studentImage}  alt="student"/></div>
        
      </div>
      <br/>
    </div>
  );
};

}



const mapStateToProps = ( state ) => {
    console.log( 'Map state to props..' );
    return {
        campus: state.campus,
    };
}

const mapDispatchToProps = ( dispatch ) => {
    console.log( 'Map dispatching to props..' );
    return {
      getSingleCampus: ( id ) => dispatch( getSingleCampus( id ) ),
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (PrintAllStudents);