import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class AddCampus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '', 
            address: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeA = this.handleChangeA.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleChangeA(event) {
        this.setState({address: event.target.value});
      }
    
      async handleSubmit(event) {
        alert('The Campus ' + this.state.value + " at " + this.state.address + " has been added.");
        event.preventDefault();
        console.log('Updating Database');
        const res = await axios.post('http://localhost:8080/api/campus', {
            name: this.state.value,
            address: this.state.address
        })
        .then(function (response) {
            console.log(response);
        })
        console.log('Database Updated');
      } 

    render(){
        return (
            
            <form onSubmit={this.handleSubmit}>
               <div class = "form-group">

                   <div class="col-7">
                   <label for = "campusname"></label>
                   <input type = "username" class="form-control form-control-lg" id="exampleInputPassword1" onChange={this.handleChange} placeholder="Campus Name"></input>
                   </div>  

                   <div class="col-7">
                   <label for = "address"></label>
                   <input type = "username" class="form-control form-control-lg" id="exampleInputPassword1" onChange={this.handleChangeA} placeholder="Campus Address"></input>
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