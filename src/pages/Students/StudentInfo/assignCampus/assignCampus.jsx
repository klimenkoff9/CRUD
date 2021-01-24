import React, { Component } from 'react';
import { getAllCampuses } from "../../../../redux/reducers";
import axios from 'axios'
import { connect } from "react-redux";

class AssignCampus extends Component {

    state = {
        campusId: ''
    }
    async componentDidMount () {
        console.log( "AssignCampus component mounted" );
        await this.props.getAllCampuses();
        console.log( "AssignCampus reteived all campuses" )
    }
    handleSubmit = () =>{
        axios.put(`http://localhost:8080/api/student/${this.props.studentId}`, {campusId : this.state.campusId});
    }
    render () {
        return (
            <div>
                <select id = "campuses" value = {this.state.campusId} onChange = {e => this.setState({campusId : e.target.value})}>
                    {
                        this.props.campuses.map( ( item, index ) => {
                            return (
                                <option key = {index} value = {item.id} >{item.name}</option>
                            )
                        })
                    }
                </select>
                <button onClick={() => this.handleSubmit()}>Change Campus</button>
            </div>
        )
    }
}

const mapStateToProps = ( state ) => {
    console.log( "MAP STATE TO PROPS: ASSIGN CAMPUS" );
    return {
        campuses: state.campuses,
    }
}

const mapDispatchToProps = dispatch => {
    console.log( "MAP DISPATCH TO PROPS: ASSIGN CAMPUS" );
    return {
        getAllCampuses: () => dispatch( getAllCampuses() )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( AssignCampus );