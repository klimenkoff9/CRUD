import React from 'react';

import "./student.css"

const Student = ( props ) => {
    return (
        <div className = "student-card">
            <img src={ props.imageUrl } alt="student-profile" width = "100px" height = "80px"></img>
            <p>{ props.firstName } { props.lastName }</p>
            <p>{ props.campusname }</p>
        </div>
    )
}

export default Student;