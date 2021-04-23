import React, {useContext, useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import {Button} from "@material-ui/core";
import LessonsContext from "../../context/lessons/lessonsContext";
import Spinner from "../layout/Spinner";
import {Link, useParams} from "@reach/router";

export default function Lesson({match}) {
    const lessonsContext = useContext(LessonsContext);
    const {getLesson, lesson, loading} = lessonsContext;

    const {lessonId} = useParams();

    useEffect(() => {
        getLesson(lessonId);

        if (loading) {
            alert('loading!');
        }

        // eslint-disable-next-line
    }, [loading])

    if (loading) return <Spinner/>

    return (
        <section>
            <Typography variant="h5" component="h2">
                Lesson <strong>{lesson.title}</strong>
                ID: <strong>{lesson.id}</strong>,
                Description: <strong>{lesson.description}</strong>,
                videoUrl: <strong>{lesson.videoUrl}</strong>
            </Typography>
            <Link to={`/admin/lesson/${lesson.id}/edit`}>
                <Button
                    variant="contained"
                    color="primary">
                    Edit Lesson
                </Button>
            </Link>
        </section>
    )
}
