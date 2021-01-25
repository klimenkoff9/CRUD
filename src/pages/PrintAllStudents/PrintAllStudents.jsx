import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './PrintAllStudents.css'
import axios from "axios";
class PrintAllStudents extends React.Component {
  constructor() {
    super();
    this.state = {
      campusName: "",
    };
  }

  componentDidMount = async () => {
    try {
      console.log(this.props.campusId);
      const { data } = await axios.get(
        `http://localhost:8080/api/campus/nostudent/${this.props.campusId}`
      );
      console.log("campus data" + data);
      this.setState({
        ...this.state,
        campusName: data.name,
      });
    } catch (error) {}
  };

  handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/student/${this.props.id}/delete`);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="container">
        <div className="campusCard">
          <div className="studentName">
            {" "}
            Name:{" "}
            <Link to={`/student/${this.props.id}`}>
              {this.props.firstName} {this.props.lastName}
            </Link>
          </div>
          <div className="campusName"> Campus: {this.state.campusName}</div>
          <div className="studentImage">
            <img src={this.props.studentImage} width="180" height="150" alt="student" />
          </div>
        </div>
        <br />
        <div>
        <button onClick={this.handleDelete}>DELETE</button>          
        </div>
      </div>
    );
  }
}

export default PrintAllStudents;
