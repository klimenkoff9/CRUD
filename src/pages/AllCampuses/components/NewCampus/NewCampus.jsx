import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const Campus = ( props ) => {

  const handleDelete = async () => {
    try {
      await axios.get(`http://localhost:8080/api/campus/${props.id}/delete`);
    } catch (error) {
      console.log(error);
    }
  };
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
      <div>
        <button onClick={handleDelete}>DELETE</button>          
      </div>
    </div>
  )

};

export default Campus;
