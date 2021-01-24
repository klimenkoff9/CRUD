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
               <div class = "form-group">
                   <div class="col-7">
                   <label for = "campusname"></label>
                   <input type = "username" class="form-control form-control-lg" id="exampleInputPassword1" onChange={this.handleChange} placeholder="Campus Name"></input>
                   </div>  
               </div>  
               <div class = "text-center"> 
             <button type="submit" class = "btn btn-primary"> Add Campus</button>
             </div> 
             </form>

             
        
        );
    }
}

export default withRouter(AddCampus);