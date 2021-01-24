import React, { Component } from 'react';
import { getSingleCampus } from "../../../redux/reducers";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class CampusCard extends Component {

    state = {
        campusId : 0,
        imageUrl : '',
        students : [],
        campusName: ''
    }
    async componentDidMount () {
        console.log( "CampusCard component mounted" );
        await this.props.getSingleCampus(this.props.id);
        console.log( "Campus retreived all campuses" )
        this.props.campus.map((item) => {
            this.setState({
                campusName : item.name,
                campusId: item.id,
                imageUrl : item.imageUrl,
                students: item.students
            })
        })
    }
    render () {
        return (
            <div>
                <div className="campus-card">
                    <img src={ this.state.imageUrl } width="180px" height="120px"></img>
                    <Link to={ `/campuses/${this.props.id}` }><h3>{ this.state.campusName }</h3></Link>
                    <p>{ this.state.students.length } Students</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ( state ) => {
    console.log( "MAP STATE TO PROPS: ASSIGN CAMPUS" );
    return {
        campus: state.campus
    }
}

const mapDispatchToProps = dispatch => {
    console.log( "MAP DISPATCH TO PROPS: ASSIGN CAMPUS" );
    return {
        getSingleCampus: ( id ) => dispatch( getSingleCampus(id) )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( CampusCard );