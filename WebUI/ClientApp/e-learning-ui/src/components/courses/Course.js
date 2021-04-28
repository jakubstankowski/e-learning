import React, {useContext, useEffect} from "react";
import Lessons from "../lessons/Lessons";
import {useParams} from "@reach/router";
import CoursesContext from "../../context/courses/coursesContext";
import Spinner from "../layout/Spinner";
import {Container} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
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

    const {title} = course;

    return (
        <Container className={classes.course}>
            <Typography component="h4" variant="h3">
                {title}
            </Typography>
            <Lessons/>
        </Container>
    )

}

