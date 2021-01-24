import React from "react";
import { Link } from 'react-router-dom';
import CampusesArray from "./components/CampusArray/CampusesArray";

const Campuses = () => {
  return (
    <div className="campuses">
      <article>
        <CampusesArray />
      </article>
      <Link to = '../addcampus'> Add Campus </Link>
    </div>
  );
};

export default Campuses;