import React from "react";

const Campus = (props) => (
  <div className="container">
    <div className="pokemonCard">
      <div className="campusName">{props.campusName}</div>
      <div className="studentsNumber">{props.studentsNumber} students</div>
      {/* <div className="campusImage">{props.campusImage}</div> */}
    </div>
    <br />
  </div>
);

export default Campus;
