import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import StudentList from './studentlist.jsx'


class editCampus extends Component{
    constructor(props){
        super(props);
        this.state ={
            image:"",
            name:"",
            location:"",
            description:"",
            testArray:["bob","mary","joe","betty","sally","fred","chris","larry"]
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
        this.updateCampus();
        //clear state
        // this.setState({image:"",
        // name:"",
        // location:"",
        // description:""})
        e.preventDefault();
    }
    async updateCampus(){
        const campus = await axios.post(`http://localhost8080/api/campus/1`,{name: this.state.name})
        console.log(campus);
    }
    render(){
       return( 
       <div>
           <h1>Edit Campus</h1>

           <Form onSubmit = {this.onSubmit} >
               <Form.Group>
                   <Form.Label>Campus name</Form.Label>
                       <Form.Control  type = "text" name="name" value={this.state.name} onChange = {this.handleChange}/>
               </Form.Group>
               <Form.Group>
                   <Form.Label>Campus Location</Form.Label>
                       <Form.Control  type = "text" name="location" placeholder={this.props.id} value={this.state.location} onChange = {this.handleChange}/>
               </Form.Group>
               <Form.Group>
                   <Form.Label>Campus Image URL</Form.Label>
                       <Form.Control  type = "text" name = "image" value={this.state.image}  onChange = {this.handleChange}/>
               </Form.Group>
               <Form.Group>
                   <Form.Label>Campus Description</Form.Label>
                       <Form.Control  type = "text" name="description" value={this.state.description} onChange = {this.handleChange}/>
               </Form.Group>
               <Button type="submit" > Save Changes </Button>

           </Form>

            <StudentList student = {this.state.testArray}/>
        </div> 
    )}
}
export default editCampus;