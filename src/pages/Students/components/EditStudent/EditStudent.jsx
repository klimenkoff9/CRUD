import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { withRouter } from "react-router-dom";

class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      gpa: 0.0,
      imageUrl: "",
      email: ""
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { match: { params: { id } } } = this.props; 
    try {
        await axios.put(`http://localhost:8080/api/student/${id}`, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        gpa: this.state.gpa,
        imageUrl: this.state.imageUrl,
        email: this.state.email,
        });
        this.props.history.goBack();
      } catch (error) {
          console.error(error)
      }
    
  
}

  render() {
    return (
     <section>
        <form onSubmit={this.handleSubmit}>
               <div className = "form-group">
                   <div className="col-7">
                   <label htmlFor = "campusName"></label>
                   <input name ="firstName" type = "text" className="form-control form-control-lg" onChange={this.handleChange} placeholder="First" required ></input>
                   </div>  
               </div>
               <div className = "form-group">
                   <div className="col-7">
                   <label htmlFor = "location"></label>
                   <input name ="lastName" type = "text" className="form-control form-control-lg" onChange={this.handleChange} placeholder="Last" required></input>
                   </div>  
               </div>
               <div className = "form-group">
                   <div className="col-7">
                   <label htmlFor = "imageUrl"></label>
                   <input name ="gpa" type = "number" className="form-control form-control-lg" onChange={this.handleChange} placeholder="GPA" min="0.0" max="4.0" step=".01"></input>
                   </div>  
               </div>
               <div className = "form-group">
                   <div className="col-7">
                   <label htmlFor = "imageUrl"></label>
                   <input name ="imageUrl" type = "text" className="form-control form-control-lg" onChange={this.handleChange} placeholder="imageUrl"></input>
                   </div>  
               </div>  
               <div className = "form-group">
                   <div className="col-7">
                   <label htmlFor = "email"></label>
                   <input name ="email" type = "text" className="form-control form-control-lg" onChange={this.handleChange} placeholder="email"></input>
                   </div>  
               </div>  
               <div className = "text-center"> 
             <button type="submit" className = "btn btn-primary"> Edit Student</button>
             </div> 
             </form> 
     </section>
    );
  }
}
export default withRouter(StudentForm);
