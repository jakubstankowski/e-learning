import React, {Fragment, useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import Lessons from "../lessons/Lessons";
import {Link, Route, Switch} from "react-router-dom";
import Lesson from "../lessons/Lesson";
import Button from "@material-ui/core/Button";

function Course({getCourse, getLesson, deleteLesson, lessons, lesson, course, match}) {

    useEffect(() => {
        getCourse(match.params.courseId);
        // eslint-disable-next-line
    }, []);


    return (
        <Fragment>
            <Typography variant="h5" component="h2">
                Course <strong>{course.title}</strong> ID: <strong>{course.id}</strong>
            </Typography>
            <Link to={`/admin/course/${course.id}/edit`}
                  style={{textDecoration: 'none'}}
            >
                <Button variant="contained"
                        style={{marginTop: '1rem', width: '100%'}}
                        color="primary"
                >
                    Edit Course
                </Button>
            </Link>
            <Switch>
                <Route
                    path="/course/:courseId"
                    exact render={props => (
                    <Lessons
                        {...props}
                        deleteLesson={deleteLesson}
                        lessons={lessons}/>
                )}/>
                <Route
                    path="/course/:courseId/lesson/:lessonId"
                    render={props => (
                        <Lesson
                            {...props}
                            getLesson={getLesson}
                            lesson={lesson}
                        />
                    )}/>
            </Switch>
        </Fragment>
    )

}

Course.propTypes = {
    course: PropTypes.object.isRequired,
    lessons: PropTypes.array.isRequired,
    getCourse: PropTypes.func.isRequired
}


export default Course;
