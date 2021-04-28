import React, {useContext, useEffect} from "react";
import Lessons from "../lessons/Lessons";
import {useParams} from "@reach/router";
import CoursesContext from "../../context/courses/coursesContext";
import Spinner from "../layout/Spinner";
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from '@material-ui/core/styles';
import CourseDescription from "./CourseDescription";
import LessonVideo from "../lessons/LessonVideo";
import Typography from "@material-ui/core/Typography";

export default function Course({match}) {
    const coursesContext = useContext(CoursesContext);

    const {getCourse, course, loading} = coursesContext;

    const {courseId} = useParams();

    useEffect(() => {
        getCourse(courseId);
    }, []);

    const useStyles = makeStyles((theme) => ({
        course: {
            marginTop: '1rem',
            textFloat: 'center'
        }
    }));

    const classes = useStyles();

    if (loading) return <Spinner/>

    return (
        <Container className={classes.course}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {course.title}
            </Typography>
            <Lessons/>
        </Container>
    )

}

