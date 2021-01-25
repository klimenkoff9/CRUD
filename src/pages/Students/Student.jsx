import React from 'react';
import StudentInfo from "./components/StudentInfo/StudentInfo"
import StudentCampus from "../Students/components/StudentInfo/components/StudentCampus"
import AssignCampus from "../Students/components/StudentInfo/components/assignCampus/assignCampus"
const Student = (props) => {
    const { match: { params: { StudentId } } } = props;
    return (
        <div>
            <StudentInfo StudentId = {StudentId} />
            <StudentCampus StudentId = {StudentId}/>
            <AssignCampus StudentId = {StudentId}/>
        </div>
    )
}

export default Student;