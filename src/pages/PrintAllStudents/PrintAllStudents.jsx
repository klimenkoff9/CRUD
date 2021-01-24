import React from "react";

const PrintAllStudents = ( props ) => {
  return (
    <div className="container">
    {console.log("Hello World")}
      <div className="campusCard">
        {console.log("give me my image"+ props.image)}
        {console.log(`this is the props ${props}`)}
        <div className="studentName">{props.firstName} {props.lastName}</div>
        <div className="campusName">ID : { props.campusName }</div>
        <div className="studentImage"><img src={props.studentImage} width="180" height="150" alt="student"/></div>
      </div>
      <br/>
    </div>
  );

};

export default PrintAllStudents;