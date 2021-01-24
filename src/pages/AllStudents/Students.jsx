import React from "react";

import AllStudentsArray from "./components/AllStudentsArray/AllStudentsArray"
import AddStudent from "../AddStudent/AddStudent"

const Students = () => {
  const path = window.location.pathname;
  console.log(path);
  return (
    <div className="students">
      <article>
        <AddStudent path={path}/>
        <AllStudentsArray />
      </article>
    </div>
  );
};

export default Students;