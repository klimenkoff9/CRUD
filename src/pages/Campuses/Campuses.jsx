import React from "react";
import AddCampus from "./components/AddCampus";
import CampusesArray from "./components/CampusArray/CampusesArray";

const Campuses = () => {
  return (
    <div className="Contact">
      <article>
      <AddCampus />
        <CampusesArray />
       
      </article>
    </div>
  );
};

export default Campuses;