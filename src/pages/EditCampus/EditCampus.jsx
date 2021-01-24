import React from "react";

import CampusForm from "./components/Form/CampusForm.jsx";
import StudentsOnCampus from "../ShowCampus/components/StudentsOnCampus/StudentsOnCampus"


const EditCampus = ( props ) => {

  const { match: { params: { id } } } = props; 
  console.log(id);
  return (
    <div className="Contact">
      <article>
      <h1>Edit Campus Info</h1>
        <CampusForm id={id} />
        <StudentsOnCampus id={id} />
      </article>
    </div>
  );
};

export default EditCampus;