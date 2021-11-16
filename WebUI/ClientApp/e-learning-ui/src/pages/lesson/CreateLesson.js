import * as React from "react";
import {Button} from "@material-ui/core";
import {TextField, Checkboxes} from 'mui-rff';
import {Form} from 'react-final-form'
import Typography from "@material-ui/core/Typography";
import {useContext, useState} from "react";
import LessonsContext from "../../context/lessons/lessonsContext";
import Container from "@material-ui/core/Container";
import {navigate, useParams} from "@reach/router";
import LessonsForm from "../../components/lessons/LessonsForm";


export default function CreateLesson() {
    const lessonsContext = useContext(LessonsContext);
    const {postLesson} = lessonsContext;

    const {courseId} = useParams();

    const [title, setTitle] = useState('test-title');

    const onChange = e =>
        setTitle(e.target.value);


    const onSubmit = (values) => {
        postLesson(values)
            .then(() => {
                navigate(`/course/${courseId}`);
            })
    };

    const validate = (values) => {
        const errors = {};

        if (!values.title) {
            errors.title = 'Required';
        }

        if (!values.description) {
            errors.description = 'Required';
        }

        if (!values.videoUrl) {
            errors.videoUrl = 'Required';
        }

        if (!values.courseId) {
            errors.courseId = 'Required';
        }

        return errors;
    };

    return (
        <Container component="main" maxWidth="xs">
            <article className="form-body">
                <Typography component="h1" variant="h5">
                    Create Lesson
                </Typography>
                <LessonsForm/>
            </article>
        </Container>
    )

}
