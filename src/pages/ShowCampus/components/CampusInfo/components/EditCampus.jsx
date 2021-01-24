import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import StudentList from './studentlist.jsx'
import { connect } from 'react-redux';
import { getSingleCampus, postSingleStudent } from '../../../../redux/reducers/index';


class editCampus extends Component{
    constructor(props){
        super(props);
        this.state ={
            id : 0,
            image: "",
            name:"",
            location:"",
            description:"",
            testArray:["bob","mary","joe","betty","sally","fred","chris","larry"],
            studentArr:[]
        }
    }
    async componentDidMount () {
        console.log( 'component did mount' );
        console.log( "props of component" + this.props );
        //const { match: { params: { 1 } } } = this.props;
        console.log( `this is the campus id: ${1}` );
        await this.props.getSingleCampus( 1 )
        console.log( `this is the campus data ${1}` );
        this.props.campus.map( ( item ) => {
            this.setState( {
                id: 1,
                name: item.name,
                location: item.address,
                image: item.imageUrl,
                description: item.description,
                studentArr: item.students
            } )
        } )
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit=(e)=>{
        alert("state: "+this.state.image+"\n" +
            this.state.name+"\n"
            +this.state.location+"\n"+this.state.description+"\n student arr: "+this.state.studentArr);
        this.updateCampus();
        //clear state
        // this.setState({image:"",
        // name:"",
        // location:"",
        // description:""})
        e.preventDefault();
    }
    async updateCampus(){
        const campus = await axios.put(`http://localhost:8080/api/campus/1`,{
            name: this.state.name,
            imageURL: this.state.image,
            address: this.state.location
        
        })
        .then(function (response) {
            console.log(response);
        })
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

            <StudentList student = {this.state.studentArr}/>
        </div> 
    )}
}
const mapStateToProps = ( state ) => {
    console.log( 'Map state to props..' );
    return {
        campus: state.campus,
    };
};

const mapDispatchToProps = ( dispatch ) => {
    console.log( 'Map dispatching to props..' );
    return {
        getSingleCampus: ( name ) => dispatch( getSingleCampus( name ) ),
        postSingleStudent : (studentObj) => dispatch(postSingleStudent(studentObj)),
    };
};
export default connect( mapStateToProps, mapDispatchToProps )(editCampus);