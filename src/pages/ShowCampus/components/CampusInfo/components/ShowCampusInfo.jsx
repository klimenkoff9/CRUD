import React from "react";

import { withRouter, Link } from "react-router-dom";
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
      <center>
      <div id ="top"className="row">
      
        <div className="column">
          <img
            src={props.campusImage}
            alt="campus image"
            width="400px"
            height="300px"
          />
          <h3>{props.campusAddress}</h3>
          <Link to={`/campuses/${props.id}/edit`}><button className="btn btn-primary">EDIT</button></Link>
          <button className="btn btn-primary btn-outline-danger"onClick={() => handleDelete()}>DELETE</button>
        </div>
            
        <div id ="topRight"className="column">
          <h1>
            ID: {props.id} | {props.campusName}
          </h1>
          <p>{props.campusDescription}</p>
        </div>
        
      </div>
      </center>
    
      <br></br>

    </div>
  );
};

export default withRouter(ShowCampusInfo);
