import React from 'react';
import Student from '../../../Student';
import { connect } from "react-redux";
import { getSingleCampus } from '../../../../../redux/reducers';
import axios from 'axios';

class StudentCampus extends React.Component {

    constructor ( props ) {
        super( props )

        this.state = {
            id : 0,
            imageUrl : '',
            students: [],
            name: ''
        }
    }

    async componentDidMount() {
        console.log(`props for studentcampus component ${this.props.id}`);
        await this.props.getSingleCampus(this.props.id);
        this.props.campus.map((item) => {
            this.setState({
                id: item.id,
                name: item.name,
                imageUrl: item.imageUrl,
                students: item.students
            })
        })
    }
    render(){
        return(
            <div>
                <h1>HELLO FROM STUDENT CAMPUS COMPONENT| ID : {this.props.id}</h1>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        campus: state.campus
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSingleCampus: (id) => dispatch( getSingleCampus(id) )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentCampus);