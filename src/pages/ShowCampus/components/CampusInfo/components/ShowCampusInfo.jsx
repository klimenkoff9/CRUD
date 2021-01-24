import React from "react";

import { withRouter } from "react-router-dom";
import axios from "axios";

import CampusInfo  from "../../StudentsOnCampus/StudentsOnCampus"
import "./ShowCampusInfo.css";

const ShowCampusInfo = (props) => {
  const handleDelete = async () => {
    console.log(props.history);
    try {
      await axios.get(`http://localhost:8080/api/campus/${props.id}/delete`);
      props.history.push("/campuses");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="column">
          <img
            src={props.campusImage}
            alt="campus image"
            width="400px"
            height="300px"
          />
        </div>
        <div className="column">
          <h1>
            ID: {props.id} | {props.campusName}
          </h1>
          <p>{props.campusDescription}</p>
        </div>
      </div>
      <div className="row2">
        <h3>{props.campusAddress}</h3>
        <button>EDIT</button>
        <button onClick={() => handleDelete()}>DELETE</button>
      </div>
      <br/>
    </div>
  );
};

export default withRouter(ShowCampusInfo);
