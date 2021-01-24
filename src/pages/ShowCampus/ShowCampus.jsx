import React from "react";

import CampusInfo from "./components/CampusInfo/CampusInfo";
import StudentsOnCampus from "./components/StudentsOnCampus/StudentsOnCampus"

const Campuses = ( props ) => {

  const { match: { params: { id } } } = props; 
  console.log(id);
  return (
    <div className="Contact">
      <article>
        <CampusInfo id={id} />
        <StudentsOnCampus id={id} />
      </article>
    </div>
  );
};

export default Campuses;