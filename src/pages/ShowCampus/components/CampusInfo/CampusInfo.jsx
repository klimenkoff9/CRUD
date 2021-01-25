import React from "react";
import { connect } from "react-redux";
import { getSingleCampus } from "../../../../redux/reducers/index";

import ShowCampusInfo from "./components/ShowCampusInfo"

class CampusInfo extends React.Component {

  async componentDidMount () {
    console.log( "component did mount" );
    console.log( this.props.id );
    try {
      await this.props.getSingleCampus(this.props.id);
    } catch ( error ) {
      console.error( error );
    }
  }

  render () {
    console.log( this.props.campus )
    return (
      <div>
            <ShowCampusInfo
              id={ this.props.campusInfo.id }
              campusImage={ this.props.campusInfo.imageUrl }
              campusName={ this.props.campusInfo.name }
              campusAddress={ this.props.campusInfo.address }
              campusDescription={ this.props.campusInfo.description } 
            />
          );
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  console.log( "Map state to props.." );
  return {
    campusInfo: state.campus,
  };
};

const mapDispatchToProps = ( dispatch ) => {
  console.log( "Map dispatching to props.." );
  return {
    getSingleCampus: ( id ) => dispatch( getSingleCampus( id ) ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( CampusInfo );
