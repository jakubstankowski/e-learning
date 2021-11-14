import React, {useContext} from "react";
import LessonItem from "./LessonItem";
import LessonsContext from "../../context/lessons/lessonsContext";
import Spinner from "../spinner/Spinner";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";

export default function Lessons(props) {
    const lessonsContext = useContext(LessonsContext);
    const {loading, error} = lessonsContext;
    const {lessons} = props;

    if (loading) return <Spinner/>

    if (error) return <Typography variant="h4" className="all-center">
        {error}
    </Typography>

    return (
        <Grid container spacing={4}>
            {
                lessons.map((lesson, i) =>
                    <LessonItem lesson={lesson} key={lesson.id}/>
                )
            }
        </Grid>
    )
}
