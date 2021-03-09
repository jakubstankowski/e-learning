import React from "react";

function Course(props) {
    const {title} = props.course;

    return (
        <p>
            title: {title}
        </p>
    )

}

export default Course;
