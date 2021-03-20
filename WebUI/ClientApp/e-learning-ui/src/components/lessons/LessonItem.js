import React from "react";


function LessonItem(props) {
    const {title, id} = props.lesson;
    return (
        <li>
           lesson: {title} id: {id}
        </li>
    )
}


export default LessonItem;
