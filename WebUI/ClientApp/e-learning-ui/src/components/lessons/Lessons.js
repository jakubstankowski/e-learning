import React, {useContext, useEffect} from "react";
import LessonItem from "./LessonItem";
import {Link, useParams} from "@reach/router";
import {Button} from "@material-ui/core";
import LessonsContext from "../../context/lessons/lessonsContext";
import Spinner from "../layout/Spinner";
import Grid from "@material-ui/core/Grid";
import AuthContext from "../../context/auth/authContext";

export default function Lessons() {
    const lessonsContext = useContext(LessonsContext);
    const {getCourseLessons, deleteLesson, lessons, loading} = lessonsContext;

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
                lessons.map((lesson) =>
                    <LessonItem key={lesson.id}
                                lesson={lesson}/>
                )
            }
        </Grid>
    )
}
