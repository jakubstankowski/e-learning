import React, {useContext, useEffect} from "react";
import LessonItem from "./LessonItem";
import {Link, useParams} from "@reach/router";
import {Button} from "@material-ui/core";
import LessonsContext from "../../context/lessons/lessonsContext";
import Spinner from "../layout/Spinner";
import Grid from "@material-ui/core/Grid";

export default function Lessons() {
    const lessonsContext = useContext(LessonsContext);
    const {getCourseLessons, deleteLesson, lessons, loading} = lessonsContext;

    const {courseId} = useParams();

    useEffect(() => {
        getCourseLessons(courseId);
        // eslint-disable-next-line
    }, []);


    if (loading) return <Spinner/>

    return (
        <Grid container spacing={4}>
            {
                lessons.map((lesson) =>
                    <LessonItem key={lesson.id}
                                lesson={lesson}/>
                )
            }
        </Grid>
    )
}
