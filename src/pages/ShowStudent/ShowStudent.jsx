import React from "react";

import StudentInfo from "./Students/StudentInfo/studentinfo.jsx";

const ShowStudent = ( props ) => {

        const {match: {params: { studentId }}} = props;
        console.log(studentId);
        return (
            <div className="Contact">
                <article>
                    <StudentInfo studentId={studentId} />
                </article>
            </div>
        );
};

export default ShowStudent;