import React from "react";

const PrintAllStudents = ( props ) => {
  return (
    <div className="container">
    {console.log("Hello World")}
      <div className="campusCard">
        {console.log(`this is the props ${props}`)}
        <div className="studentName">{props.firstName} {props.lastName}</div>
        <div className="campusName">id : { props.campusName }</div>
        <div className="studentImage"><img src={props.image}  alt="student"/></div>
      </div>
      <br/>
    </div>
  );

};

export default PrintAllStudents;