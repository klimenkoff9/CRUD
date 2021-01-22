import React from "react";

import { Switch, Route, Link } from 'react-router-dom';

import CampusInfo from "../components/Campus-info/campusInfo"

const Campus = ( props ) => {
  return (
    <div className="container">
      <div className="campusCard">
        {console.log(`this is the props ${props}`)}
        <div className="campusName"><Link to={ `/campuses/${props.campusName}` }>{ props.campusName }</Link></div>
        <div className="campusId">id : { props.id }</div>
        <div className="studentsNumber">{ props.studentsNumber } students</div>
        <div className="campusImage">{ props.campusImage }</div>
      </div>
      <br/>
    </div>
  )

};

export default Campus;
