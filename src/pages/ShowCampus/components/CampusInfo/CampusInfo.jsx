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
        {this.props.campus.map( ( campusInfo, index ) => {
          return (
            <ShowCampusInfo
              key={ index }
              id={ campusInfo.id }
              campusImage={ campusInfo.imageUrl }
              campusName={ campusInfo.name }
              campusAddress={ campusInfo.address }
              campusDescription={ campusInfo.description } 
            />
          );
        } ) }
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  console.log( "Map state to props.." );
  return {
    campus: state.campus,
  };
};

const mapDispatchToProps = ( dispatch ) => {
  console.log( "Map dispatching to props.." );
  return {
    getSingleCampus: ( name ) => dispatch( getSingleCampus( name ) ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( CampusInfo );
