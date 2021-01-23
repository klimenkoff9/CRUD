import React from "react";

import { Link } from 'react-router-dom';

const Campus = ( props ) => {
  return (
    <div className="container">
      <div className="campusCard">
        {console.log(`this is the props ${props}`)}
        <div className="campusName"><Link to={ `/campuses/${props.id}` }>{ props.campusName }</Link></div>
        <div className="campusId">id : { props.id }</div>
        <div className="studentsNumber">{ props.studentsNumber } students</div>
        <div className="campusImage">{ props.campusImage }</div>
      </div>
      <br/>
    </div>
  )

};

export default Campus;
