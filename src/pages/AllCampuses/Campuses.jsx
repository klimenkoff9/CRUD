import React from "react";
import { Link } from 'react-router-dom';
import CampusesArray from "./components/CampusArray/CampusesArray";

const Campuses = () => {
  return (
    <div className="campuses">
      <article>
      <Link to = '/addcampus'><button>Add Campus</button> </Link>
        <CampusesArray />
      </article>
    </div>
  );
};

export default Campuses;