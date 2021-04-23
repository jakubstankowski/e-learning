import Typography from "@material-ui/core/Typography";
import React, {useContext, useEffect} from "react";
import LessonItem from "./LessonItem";
import {Link, useParams} from "@reach/router";
import {Button} from "@material-ui/core";
import LessonsContext from "../../context/lessons/lessonsContext";
import Spinner from "../layout/Spinner";

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
        <section>
            <Typography variant="h5" component="h2">
                Lessons:
            </Typography>
            <ul>
                {
                    lessons.map((lesson) =>
                        <article key={lesson.id}>
                            <Link to={`/course/${courseId}/lesson/${lesson.id}`}>
                                <LessonItem key={lesson.id}
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
                            </Link>
                        </article>
                    )
                }
            </ul>
        </section>
    )
}
