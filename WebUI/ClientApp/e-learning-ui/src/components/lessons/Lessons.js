import Typography from "@material-ui/core/Typography";
import React, {useContext, useEffect} from "react";
import LessonItem from "./LessonItem";
/*
import {Link} from "react-router-dom";
*/
import {Button} from "@material-ui/core";
import LessonsContext from "../../context/lessons/lessonsContext";
import CoursesContext from "../../context/courses/coursesContext";
import Spinner from "../layout/Spinner";

export default function Lessons({match}) {
    const lessonsContext = useContext(LessonsContext);
    const {getCourseLessons, deleteLesson, lessons, loading} = lessonsContext;

    useEffect(() => {
       getCourseLessons(match.params.courseId);
        // eslint-disable-next-line
    }, []);


    if (loading) return <Spinner/>

    return (
        <section>
            <Typography variant="h5" component="h2">
                Lessons:
            </Typography>
            <ul>
                {
                    lessons.map((lesson, i) =>
                        <article key={i}>
                           {/* <Link to={`/course/${match.params.courseId}/lesson/${lesson.id}`}>
                                <LessonItem key={i}
                                            lesson={lesson}/>
                            </Link>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => deleteLesson(lesson.id)}>
                                Delete
                            </Button>
                            <Link to={`/admin/lesson/${lesson.id}/edit`}>
                                <Button
                                    variant="contained"
                                    color="primary">
                                    Edit
                                </Button>
                            </Link>*/}
                        </article>
                    )
                }
            </ul>
        </section>
    )
}
