import React, {Fragment, useContext, useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import Lessons from "../lessons/Lessons";
import {Link, Route, Switch} from "react-router-dom";
import Lesson from "../lessons/Lesson";
import Button from "@material-ui/core/Button";
import CoursesContext from "../../context/courses/coursesContext";
import LessonItem from "../lessons/LessonItem";
import Spinner from "../layout/Spinner";

function Course({getLesson, deleteLesson, lessons, lesson, match}) {
    const coursesContext = useContext(CoursesContext);

    const {getCourse, course, loading} = coursesContext;

    useEffect(() => {
        getCourse(match.params.courseId);
        console.log('course: ', course);
        // eslint-disable-next-line
    }, []);

    if (loading) return <Spinner/>;

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
            lesson:
            {/* <ul>
                {course.lessons.map((lesson, i) =>
                    <LessonItem key={i}
                                lesson={lesson}/>
                )}
            </ul>*/}
            {/*  <ul>
                {
                    course.lessons.map((lesson, i) =>
                    {
                        <li>
                            {lesson}
                        </li>
                    })
                }
            </ul>*/}
            {/*<Switch>
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
            </Switch>*/}
        </Fragment>
    )

}

Course.propTypes = {
    lessons: PropTypes.array.isRequired,
}


export default Course;
