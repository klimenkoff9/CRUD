import React from 'react';
import './styles/AllPlayersView.css';
import PropTypes from 'prop-types';

const AllPlayersView = props => {
  return (
    <div className="all-players">
      {props.allPlayers.map(player => (
        <div key={player.id}>
          <h1>{player.firstName}</h1>
        </div>
      ))}
    </div>
  );
};

AllPlayersView.propTypes = {
  allPlayers: PropTypes.array.isRequired
};

export default AllPlayersView;
