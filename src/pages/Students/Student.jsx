import React from 'react';
import { Link } from "react-router-dom";

import "./student.css"

const Student = ( props ) => {
    return (
        <div className = "student-card">
            <img src={ props.imageUrl } alt="student-profile" width = "100px" height = "80px"></img>
            <Link to = {`/student/${props.StudentId}`}><p>{ props.firstName } { props.lastName }</p></Link>
            <p>{ props.campusname }</p>
        </div>
    )
}

export default Student;