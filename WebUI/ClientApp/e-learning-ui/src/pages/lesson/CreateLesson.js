import LessonsForm from "../../components/lessons/LessonsForm";
import React from "react";
import {Typography} from "@material-ui/core";

export default function CreateLesson() {


    return (
        <>
            <Typography variant="h3" className="text-center">
                Create New Lesson
            </Typography>
            <LessonsForm mode="create"/>
        </>
    )
}
