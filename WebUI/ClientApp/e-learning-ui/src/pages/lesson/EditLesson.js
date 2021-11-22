import LessonsForm from "../../components/lessons/LessonsForm";
import React, {useContext, useEffect} from "react";
import LessonsContext from "../../context/lessons/lessonsContext";
import {useParams} from "@reach/router";

export default function EditLesson() {
    const {lessonId} = useParams();

    const lessonsContext = useContext(LessonsContext);
    const {loading, getLesson, lesson} = lessonsContext;

    useEffect(() => {
        getLesson(lessonId);
        // eslint-disable-next-line
    }, []);

    return (
        <>
            edit lesson
            {
                !loading && lesson &&
                <LessonsForm lesson={lesson}/>
            }
        </>
    )
}
