import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
//import Button from 'react-boostrap/Button';

class editCampus extends Component{
    constructor(props){
        super(props);
        this.state ={
            image:"",
            name:"",
            location:"",
            description:""
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit=(e)=>{
        alert("state: "+this.state.image+"\n" +
            this.state.name+"\n"
            +this.state.location+"\n"+this.state.description);

        //clear state
        // this.setState({image:"",
        // name:"",
        // location:"",
        // description:""})
        e.preventDefault();
    }
    render(){
       return( 
       <div>
           <h1>Edit Campus</h1>
            <form onSubmit = {this.onSubmit}>
                <label>Campus Name
                <input type = "text" name="name" value={this.state.name} onChange = {this.handleChange}></input><br/>
                </label>
                
                <label>Campus Location
                <input type = "text" name="location" value={this.state.location} onChange = {this.handleChange}></input><br/>
                </label>
                
                <label> Campus Image URL
                <input type = "text" name = "image" value={this.state.image}  onChange = {this.handleChange}></input><br/>
                </label>
                
                <label> Campus Description
                <input type = "text" name="description" value={this.state.description} onChange = {this.handleChange}></input><br/>
                </label>

                <input type ="submit" value = "Save Changes"/>
            </form>
            <form>
                <label>
                    Students on Campus<br/>
                    <select>
                        {/* drop down list of campus */}
                    </select>
                </label>
            </form>
        </div>
    )}
}
export default editCampus;