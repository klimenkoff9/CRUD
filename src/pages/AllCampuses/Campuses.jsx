import React from "react";
import { Link } from 'react-router-dom';
import CampusesArray from "./components/CampusArray/CampusesArray";
import'bootstrap/dist/css/bootstrap.css';

const Campuses = () => {
  return (
    <div className="campuses">
      <article>
      <Link to = '/addcampus'><center><button type ="button" class ="btn btn-primary">Add Campus</button></center> </Link>
        <CampusesArray />
      </article>
    </div>
  );
};

export default Campuses;