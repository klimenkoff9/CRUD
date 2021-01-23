import React from "react";

import CampusInfo from "./components/CampusInfo/CampusInfo";

const Campuses = ( props ) => {

  const { match: { params: { id } } } = props;

  return (
    <div className="Contact">
      <article>
        <CampusInfo campusId={ id } />
      </article>
    </div>
  );
};

export default Campuses;