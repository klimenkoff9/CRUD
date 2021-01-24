import axios from 'axios';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { postSingleStudent } from '../../redux/reducers';



class AddStudent extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            campusId: 0,
            firstName: "",
            lastName: "",
            email: "",
            gpa: 0,
            error: {
                text: '',
                gpa: ''
            }
        }
    }
    // DECONSTRUCT THE PROPS FOR ADD STUDENT COMPONENT
    componentDidMount(){
        console.log(this.props)
        const { match: { params: { campusId } } } = this.props;
        console.log(`camous id ${campusId}`);
        this.setState({
            campusId : campusId
        })
        
    }
    // SETS STATE FOR STATE VARIABLES
    handleChange = e => {
        this.setState( {
            [ e.target.name ]: e.target.value
        } )
    }
    // CHECKS THE VALUES OF THE INPUTS, ONLY WHEN THEY ARE FILLED CORRECLTY ARE THEY POSTED INTO DATABASE
    handleAddStudentSubmit = () => {
        if ( isNaN( this.state.gpa ) ) {
            alert( "gpa must be a digit" )
        } else if ( this.state.gpa > 4 || this.state.gpa < 0 ) {
            alert( "gpa must be in range of 0 - 4" )
        }
        else if ( ( this.state.firstName === "" || this.state.lastName === "" || this.state.email === "" ) ) {
            alert( "Please enter all requried input fields" )
        }
        else if (!this.state.email.includes("@")){
            alert("please enter a valid email")
        }
        else {
            console.log("campus id " + this.state.campusId)
            let obj = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                gpa: this.state.gpa,
                campusId: this.state.campusId
            }
            console.log(obj);
            this.props.postSingleStudent( obj );
            this.props.history.push("/")
        }
        
    }
    // FORM TO ADD STUDENT
    render () {
        return (
            <div>
                <form>
                    <label>
                        Student First Name
                        <input type="text" placeholder={ "john" } name="firstName" onChange={ e => this.handleChange( e ) } required></input>
                    </label>
                    <span>{ this.state.error.text }</span>
                    <br></br>
                    <label>
                        Student Last Name
                        <input type="text" placeholder={ "smith" } name="lastName" onChange={ e => this.handleChange( e ) } required></input>
                    </label>
                    <span>{ this.state.error.text }</span>
                    <br></br>
                    <label>
                        Email
                        <input type="text" placeholder={ "johnsmith@email.com" } name="email" onChange={ e => this.handleChange( e ) } required></input>
                    </label>
                    <span>{ this.state.error.text }</span>
                    <br></br>
                    <label>
                        GPA
                        <input type="decimal" placeholder={ "0-4" } name="gpa" onChange={ e => this.handleChange( e ) } required></input>
                    </label>
                    <span>{ this.state.error.gpa }</span>
                    <br></br>
                </form>
                <Link to = "/submitted"><button onClick={ this.handleAddStudentSubmit }>Add Student</button></Link>
                <Link to={ "/" }><button>Cancel</button></Link>
            </div>
        )
    }
}

const mapDispatchToProps = ( dispatch ) => {
    console.log( "MAP DISPATCH TO PROPS: ADD STUDENT" )
    return {
        postSingleStudent: ( studentObj ) => dispatch( postSingleStudent( studentObj ) ),
    }
}
export default connect( null, mapDispatchToProps )( AddStudent );