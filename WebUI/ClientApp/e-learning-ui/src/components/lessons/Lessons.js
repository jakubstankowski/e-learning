import Typography from "@material-ui/core/Typography";
import React, {useEffect} from "react";
import LessonItem from "./LessonItem";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {Button} from "@material-ui/core";

function Lessons({deleteLesson, lessons, match}) {
    return (
        <section>
            <Typography variant="h5" component="h2">
                Lessons:
            </Typography>
            <ul>
                {
                    lessons.map((lesson, i) =>
                        <article key={i}>
                            <Link to={`/course/${match.params.courseId}/lesson/${lesson.id}`}>
                                <LessonItem key={i}
                                            lesson={lesson}/>
                            </Link>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => deleteLesson(lesson.id)}>
                                Delete
                            </Button>
                            <Link to={`/admin/lesson/${lesson.id}/edit`}>
                                <Button
                                    variant="contained"
                                    color="primary">
                                    Edit
                                </Button>
                            </Link>
                        </article>
                    )
                }
            </ul>
        </section>
    )
}

Lessons.propTypes = {
    lessons: PropTypes.array.isRequired,
    deleteLesson: PropTypes.func.isRequired
}


export default Lessons;
