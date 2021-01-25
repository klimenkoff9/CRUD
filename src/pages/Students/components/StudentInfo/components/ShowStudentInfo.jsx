import React from "react";

import { withRouter, Link } from "react-router-dom";
import axios from "axios";

import "./ShowStudentInfo.css";
import StudentCampus from "./StudentCampus"

const ShowStudentInfo = (props) => {

  const handleDelete = async () => {
    console.log(props.history);
    try {
      await axios.delete(`http://localhost:8080/api/student/${props.id}/delete`);
      props.history.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div>
      <div className="row">
        <div className="column">
          <img src={props.imageUrl} width="400px" height="300px" alt="student"/>
        </div>
        <div className="column">
          <h1>
           Campus ID: {props.campusId} | {props.firstName} {props.lastName}
          </h1>
          <h3>Email: {props.email}</h3>
          <h3>GPA: {props.gpa}</h3>
        </div>
      </div>
      <br />
      <div className="row2">
        <Link to={`/student/${props.StudentId}/edit`}><button>EDIT</button></Link>
        <button onClick={handleDelete}>DELETE</button>
      </div>
      <br></br>
      <StudentCampus id = {props.campusId}/>
    </div>
  );
};

export default withRouter(ShowStudentInfo);
