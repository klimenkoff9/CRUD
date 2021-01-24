import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class student extends Component{
    constructor(props){
        super(props);
        this.state ={
            studentAdd:"temp",
            studentArray: this.props.student
        }
    }

    onSubmit =(e) =>{
        
        this.setState=({
            studentAdd: "test"
        })
        alert(this.state.studentAdd)
        e.preventDefault()
    } 
    handleChange=(e)=>{  
        let name = this.props.student[e.target.value];
        {console.log(this.props.student[e.target.value])}
        {console.log(this.state.studentArray[e.target.value])}
        this.setState=({
            studentAdd: name
        })
        {console.log(this.state.studentAdd)}   
        
    }
    render(){
        return(   
            <Form onSubmit={this.onSubmit}>
                <Form.Group>
                    <Form.Label>Students on Campus</Form.Label>
                        <Form.Control as="select" onChange={this.handleChange}>             
                            {this.props.student.map((student,index)=>{                  
                                return <option value ={index}>{index} {student.firstName}</option>
                            })}
                        </Form.Control>                 
                </Form.Group>
                <Button type="submit">Add to Campus</Button>     
            </Form>
        );
    }
}
export default student;