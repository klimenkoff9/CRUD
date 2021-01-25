import React from "react";
import { Link } from 'react-router-dom';
import'bootstrap/dist/css/bootstrap.css';

const AddStudent = (props) => {
  console.log(props.path);
  return (
    <div className="campuses">
      <article>
        <center>
      <Link to={`${props.path}/addstudent`}><button type = "button" className="btn btn-primary" >Add Student</button></Link>
        </center>
      </article>
    </div>
  );
};

export default AddStudent;