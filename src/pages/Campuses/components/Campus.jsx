import React from 'react';

const PokemonCard = (props) => (
  <div className="container">
    <br />
    <div className="campusCard">
      <div className="idNum">number:{props.number}</div>
      <div className="campusName">Campus:{props.name}</div>
    </div>
    <br />
  </div>
);

export default PokemonCard;