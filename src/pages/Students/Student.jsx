import React from 'react';
import StudentInfo from "./components/StudentInfo"


const Student = (props) => {
    const { match: { params: { StudentId } } } = props;
    return (
        <div>
            <StudentInfo StudentId = {StudentId} />
        </div>
    )
}

export default Student;