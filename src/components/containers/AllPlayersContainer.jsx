import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllPlayersThunk } from '../../thunks';
import { AllPlayersView } from '../views';

// Smart container;
class AllPlayersContainer extends Component {
  componentDidMount() {
    this.props.fetchAllPlayers();
  }

  render() {
    return <AllPlayersView allPlayers={this.props.allPlayers} />
  }
}

// Map state to props;
const mapState = state => {
  return {
    allPlayers: state.allPlayers
  }
}

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    fetchAllPlayers: () => dispatch(fetchAllPlayersThunk())
  }
}

// Type check props;
AllPlayersContainer.propTypes = {
  allPlayers: PropTypes.array.isRequired,
  fetchAllPlayers: PropTypes.func.isRequired
}

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllPlayersContainer);
