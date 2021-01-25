import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { withRouter } from "react-router-dom";


class AddCampus extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '', 
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      async handleSubmit(event) {
        event.preventDefault();
        try {
        await axios.post('http://localhost:8080/api/campus', {
          name: this.state.value,
        })
        this.props.history.goBack();
        } catch (error) {
         console.error(error); 
        } 
      } 

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
               <div className = "form-group">
                   <div className="col-7">
                   <label htmlFor = "campusname"></label>
                   <input type = "username" className="form-control form-control-lg" onChange={this.handleChange} placeholder="Campus Name"></input>
                   </div>  
               </div>  
               <div className = "text-center"> 
             <button type="submit" className = "btn btn-primary"> Add Campus</button>
             </div> 
             </form>

             
        
        );
    }
}

export default withRouter(AddCampus);