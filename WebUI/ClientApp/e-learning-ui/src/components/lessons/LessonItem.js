import React from "react";


export default function LessonItem(props) {
    const {title, id} = props.lesson;
    return (
        <li>
           lesson: {title} id: {id}
        </li>
    )
}
