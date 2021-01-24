import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class CampusForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      name: "",
      address: "",
      description: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

updateCampus = async () => {
      try {
        await axios.put(`http://localhost:8080/api/campus/${this.props.id}`, {
        name: this.state.name,
        imageURL: this.state.image,
        address: this.state.address,
        description: this.state.description
      })
      } catch (error) {
          console.error(error)
      }
  }

  render() {
    return (
     <section>
        <form onSubmit={this.updateCampus}>
               <div className = "form-group">
                   <div className="col-7">
                   <label htmlFor = "campusName"></label>
                   <input name ="name" type = "text" className="form-control form-control-lg" onChange={this.handleChange} placeholder="Campus Name"></input>
                   </div>  
               </div>
               <div className = "form-group">
                   <div className="col-7">
                   <label htmlFor = "location"></label>
                   <input name ="address" type = "text" className="form-control form-control-lg" onChange={this.handleChange} placeholder="Location"></input>
                   </div>  
               </div>
               <div className = "form-group">
                   <div className="col-7">
                   <label htmlFor = "imageUrl"></label>
                   <input name ="image" type = "text" className="form-control form-control-lg" onChange={this.handleChange} placeholder="Campus Image URL"></input>
                   </div>  
               </div>
               <div className = "form-group">
                   <div className="col-7">
                   <label htmlFor = "description"></label>
                   <input name ="description" type = "text" className="form-control form-control-lg" onChange={this.handleChange} placeholder="Description"></input>
                   </div>  
               </div>  
               <div className = "text-center"> 
             <button type="submit" className = "btn btn-primary"> Add Campus</button>
             </div> 
             </form> 
     </section>
    );
  }
}
export default CampusForm;
