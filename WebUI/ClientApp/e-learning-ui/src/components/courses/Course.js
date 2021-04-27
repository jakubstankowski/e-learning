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

export default function Course({match}) {
    const coursesContext = useContext(CoursesContext);

    const {getCourse, course, loading} = coursesContext;

    const {courseId} = useParams();

    useEffect(() => {
        getCourse(courseId);
    }, []);

    const useStyles = makeStyles((theme) => ({
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        course: {
            marginTop: '1rem'
        }
    }));

    const classes = useStyles();

    if (loading) return <Spinner/>

    return (
        <Container className={classes.course}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper className={classes.paper}>
                        <LessonVideo/>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper className={classes.paper}>
                        <Lessons/>
                    </Paper>
                </Grid>
            </Grid>
            <CourseDescription/>
        </Container>
    )

}

