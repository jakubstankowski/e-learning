import React, {useContext, useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import Lessons from "../lessons/Lessons";
import {Link, useParams, Router} from "@reach/router";
import Lesson from "../lessons/Lesson";
import Button from "@material-ui/core/Button";
import CoursesContext from "../../context/courses/coursesContext";
import Spinner from "../layout/Spinner";
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from '@material-ui/core/styles';
import CourseVideo from "./CourseVideo";

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
                        <CourseVideo/>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper className={classes.paper}>
                        <Lessons/>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )

}

