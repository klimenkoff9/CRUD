import React from "react";

import CampusInfo from "./components/CampusInfo/CampusInfo";

const Campuses = (props) => {

const { match: { params: { CampusName } } } = props;

  return (
    <div className="Contact">
      <article>
        <CampusInfo campusName={CampusName}/>
      </article>
    </div>
  );
};

export default Campuses;