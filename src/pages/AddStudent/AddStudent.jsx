import React from "react";
import { Link } from 'react-router-dom';
import'bootstrap/dist/css/bootstrap.css';

const AddStudent = (props) => {
    console.log(props.path)
  return (
    <div className="campuses">
      <article>
      <Link to = {`${props.path}/addstudent/:campusID`}><button type = "button" className="btn btn-primary" >Add Student</button></Link>
      </article>
    </div>
  );
};

export default AddStudent;