/* import React, { Component } from 'react';
import { getSingleCampus } from "../../../../../redux/reducers";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class CampusCard extends Component {
    constructor ( props ) {
        super( props )

        this.state = {
            id: this.props.id,
            imageUrl: '',
            students: [],
            campusName: ''
        }
    }

    async componentDidMount () {
        console.log( `CampusCard component mounted with id ${this.state.id}` );
        await this.props.getSingleCampus( this.state.id );
        // ITS HAS TO MAP TO STATE OR ELSE VALUES WILL BE UNDEFINED
        /* this.props.campus.map( ( item ) => {
            this.setState( {
                campusName: item.name,
                campusId: item.id,
                imageUrl: item.imageUrl,
                students: item.students
            } )
        } ) 
    }
    render () {
        return (
            <div>
                <div className="campus-card">
                    {/* <img src={ this.state.imageUrl } width="180px" height="120px"></img>
                    <Link to={ `/campuses/${this.props.id}` }><h3>{ this.state.campusName }</h3></Link>
                    <p>{ this.state.students.length } Students</p> 
                    <h1>CAMPUSID: { this.props.id }</h1>
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
        getSingleCampus: ( id ) => dispatch( getSingleCampus( id ) )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( CampusCard ); */