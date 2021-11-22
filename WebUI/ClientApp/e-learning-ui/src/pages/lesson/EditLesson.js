import LessonsForm from "../../components/lessons/LessonsForm";
import React, {useContext, useEffect, useState} from "react";
import LessonsContext from "../../context/lessons/lessonsContext";
import {useParams} from "@reach/router";
import Spinner from "../../components/spinner/Spinner";
import {Typography} from "@material-ui/core";

export default function EditLesson() {
    const {lessonId} = useParams();

    const lessonsContext = useContext(LessonsContext);
    const {loading, getLesson, lesson} = lessonsContext;

    const [showLesson, setShowLesson] = useState(false);

    useEffect(() => {
        getLesson(lessonId)
            .then(() => {
                setShowLesson(true);
            })
        // eslint-disable-next-line
    }, []);

    if (loading) return <Spinner/>

    return (
        <>
            <Typography variant="h3" className="text-center">
                Edit Lesson
            </Typography>
            {
                showLesson && <LessonsForm lesson={lesson} mode="edit"/>
            }
        </>
    )
}
