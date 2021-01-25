import React from "react";

import { connect } from 'react-redux';
import { getAllCampuses } from '../../../../redux/reducers/index.js';

import Campus from "../NewCampus/NewCampus"
import "./CampusesArray.css"

class Campuses extends React.Component {
    async componentDidMount() {
    console.log('component did mount');
    await this.props.getAllCampuses();
    console.log("we gucci");
  }

  render() {
    console.log(this.props.getAllCampuses);
    return (
      <div style={{marginLeft:500}}className="row">
        {this.props.campusesList.map((campus, index) => {
          {{if(index%2===0)
          return (
            <div className ="column">
            <Campus
              key={index}
              id = {campus.id}
              studentsNumber={campus.students.length}
              campusName={campus.name}
              campusAddress = {campus.address}
              campusDescription = {campus.description}
              campusImage ={campus.imageUrl}
            />
            </div>
          );    
        else{
          return (
            <div className="column">
            <Campus
              key={index}
              id = {campus.id}
              studentsNumber={campus.students.length}
              campusName={campus.name}
              campusAddress = {campus.address}
              campusDescription = {campus.description}
              campusImage ={campus.imageUrl}
            />
            </div>
          );
        }}}
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Map state to props..');
  return {
    campusesList: state.campuses,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log('Map dispatching to props..');
  return {
    getAllCampuses: () => dispatch(getAllCampuses()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
