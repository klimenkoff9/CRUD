import React from "react";
import Form from 'react-bootstrap/Form';
import Button from'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
class AddCampus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('The Campus ' + this.state.value + " has been added.");
        event.preventDefault();
      } 

    render(){
        return (
            
            <form onSubmit={this.handleSubmit}>
               <div class = "form-group">
                   <div class="col-7">
                   <label for = "campusname"> Campus Name </label>
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

export default AddCampus;