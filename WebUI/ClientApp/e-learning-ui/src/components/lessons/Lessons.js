import Typography from "@material-ui/core/Typography";
import React from "react";
import LessonItem from "./LessonItem";
import {Link} from "react-router-dom";

function Lessons({lessons}) {
    return (
        <article>
            <Typography variant="h5" component="h2">
                Lessons:
            </Typography>
            <ul>
                {
                    lessons.map((lesson, i) =>
                        <Link to={`/course/1/lesson/${lesson.id}`} style={{textDecoration: 'none'}} key={i}>
                            <LessonItem key={i}
                                        lesson={lesson}/>
                        </Link>
                    )
                }
            </ul>
        </article>
    )
}

export default Lessons;
