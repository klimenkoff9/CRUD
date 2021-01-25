import React from "react";
import { Link } from 'react-router-dom';

const AddStudent = (props) => {
  console.log(props.path);
  return (
    <div className="campuses">
      <article>
      <Link to={`${props.path}/addstudent`}><button>Add Student</button></Link>
      </article>
    </div>
  );
};

export default AddStudent;