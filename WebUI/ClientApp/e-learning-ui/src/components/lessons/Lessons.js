import React, {useContext, useEffect} from "react";
import LessonItem from "./LessonItem";
import {useParams} from "@reach/router";
import LessonsContext from "../../context/lessons/lessonsContext";
import Spinner from "../spinner/Spinner";
import Grid from "@material-ui/core/Grid";
import AuthContext from "../../context/auth/authContext";

export default function Lessons() {
    const lessonsContext = useContext(LessonsContext);
    const {getCourseLessons, lessons, loading} = lessonsContext;

    const authContext = useContext(AuthContext);
    const {isAuthenticated} = authContext;

    const {courseId} = useParams();

    useEffect(() => {
        if (isAuthenticated) {
            getCourseLessons(courseId);
        }

        // eslint-disable-next-line
    }, [isAuthenticated]);


    if (loading) return <Spinner/>

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
