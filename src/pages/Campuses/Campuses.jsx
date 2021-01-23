import React from "react";
import AddCampus from "./components/AddCampus/AddCampus.jsx";
import CampusesArray from "./components/CampusArray/CampusesArray";

const Campuses = () => {
  return (
    <div className="Contact">
      <article>
        <CampusesArray />
        <AddCampus />
      </article>
    </div>
  );
};

export default Campuses;