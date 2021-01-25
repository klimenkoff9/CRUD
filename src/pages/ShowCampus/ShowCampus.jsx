import React from "react";

import CampusInfo from "./components/CampusInfo/CampusInfo";
import StudentsOnCampus from "./components/StudentsOnCampus/StudentsOnCampus"
import AddStudent from "../AddStudent/AddStudent.jsx"

const Campuses = ( props ) => {

  const { match: { params: { id } } } = props; 
  const path = window.location.pathname;
  console.log(id);
  return (
    <div className="Contact">
      <article>
        <CampusInfo id={id} />
        <AddStudent path={path}/>
        <StudentsOnCampus id={id} />
      </article>
    </div>
  );
};

export default Campuses;