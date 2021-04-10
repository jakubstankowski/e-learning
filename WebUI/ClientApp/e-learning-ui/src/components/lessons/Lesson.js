import React, {Fragment, Component, useEffect} from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

function Lesson({getLesson, lesson, match}) {
    useEffect(() => {
        getLesson(match.params.lessonId);
    }, [])

    return (
        <section>
            <Typography variant="h5" component="h2">
                Lesson <strong>{lesson.title}</strong>
                ID: <strong>{lesson.id}</strong>,
                Description: <strong>{lesson.description}</strong>,
                videoUrl: <strong>{lesson.videoUrl}</strong>
            </Typography>
            <Link to={`/admin/lesson/${lesson.id}/edit`}>
                <Button
                    variant="contained"
                    color="primary">
                    Edit Lesson
                </Button>
            </Link>
        </section>
    )
}

Lesson.propTypes = {
    lesson: PropTypes.object.isRequired,
    getLesson: PropTypes.func.isRequired
};

export default Lesson;
