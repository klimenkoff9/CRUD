import React from "react";
import { connect } from "react-redux";
import { getSingleCampus } from "../../../../redux/reducers/index";
import { withRouter } from "react-router-dom";
import axios from "axios";

import ShowCampusInfo from "./components/ShowCampusInfo"

class CampusesInfo extends React.Component {
  async componentDidMount() {
    console.log("component did mount");
    console.log(this.props.campusName);
    try {
      await this.props.getSingleCampus(this.props.campusName);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
      console.log(this.props.campus)
    return (
      <div>
        {this.props.campus.map((campusInfo, index) => {
          return (
            <ShowCampusInfo
              key={index}
              id={campusInfo.id}
              studentsNumber={index + 1}
              campusName={campusInfo.name}
              campusAddress={campusInfo.address}
              campusDescription={campusInfo.description}
              handleDelete={this.handleDelete}
              history = {this.props.history}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("Map state to props..");
  return {
    campus: state.campus,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("Map dispatching to props..");
  return {
    getSingleCampus: (name) => dispatch(getSingleCampus(name)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampusesInfo);
