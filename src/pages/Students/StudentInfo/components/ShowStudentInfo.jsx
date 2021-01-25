import React from "react";

import { withRouter, Link } from "react-router-dom";
import axios from "axios";

import "./ShowStudentInfo.css";

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
      <center>
      <div className ="card">
        <img id ="profile"src={props.imageUrl} width="400px" height="300px" alt="student"/>
        <div className="container">
          <h3>{props.firstName} {props.lastName}</h3>
          <h4>Email: {props.email}</h4>
          <h4>GPA: {props.gpa}</h4>
        </div>

      </div>
        <div>
        <button className="btn btn-primary">EDIT</button>
        <button className="btn btn-primary btn-outline-danger"onClick={handleDelete}>DELETE</button>
      </div>
      </center>
    </div>
    
  );
};

export default withRouter(ShowStudentInfo);
