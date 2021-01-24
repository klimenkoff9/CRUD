import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { connect } from "react-redux";
import { postSingleStudent } from "../../../redux/reducers/index";
import { withRouter } from "react-router-dom";

class AddStudent extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (e) => {
    const {
      match: {
        params: { campusID },
      },
    } = this.props;
    let obj = {};
    if ((campusID === ":campusID")) {
      obj = {
        firstName: this.state.firstName,
        lastName: this.state.lastName
      };
    } else {
      obj = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        campusId: campusID,
      };
    }
    console.log(obj);
    await this.props.postSingleStudent(obj);
    this.props.history.goBack();
  };

  render() {
    console.log(this.props.campusID);
    return (
      <form>
        <div className="form-group">
          <div className="col-7">
            <label htmlFor="campusname" />
            <input
              name="firstName"
              type="text"
              className="form-control form-control-lg"
              onChange={this.handleChange}
              placeholder="First Name"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-7">
            <label htmlFor="campusname" />
            <input
              name="lastName"
              type="text"
              className="form-control form-control-lg"
              onChange={this.handleChange}
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={this.handleSubmit}
            type="button"
            className="btn btn-primary"
          >
            {" "}
            Add Student{" "}
          </button>
        </div>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  console.log("MAP DISPATCH TO PROPS: ADD STUDENT");
  return {
    postSingleStudent: (student) => dispatch(postSingleStudent(student)),
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AddStudent)
);
