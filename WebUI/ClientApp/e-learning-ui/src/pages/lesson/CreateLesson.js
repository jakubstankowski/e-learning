import * as React from "react";
import {Button} from "@material-ui/core";
import {TextField, Checkboxes} from 'mui-rff';
import {Form} from 'react-final-form'
import Typography from "@material-ui/core/Typography";
import {useContext} from "react";
import LessonsContext from "../../context/lessons/lessonsContext";
import Container from "@material-ui/core/Container";
import {navigate, useParams} from "@reach/router";


export default function CreateLesson() {
    const lessonsContext = useContext(LessonsContext);

    const {postLesson} = lessonsContext;

    const {courseId} = useParams();

    const onSubmit = (values) => {
        postLesson(values)
            .then(() => {
                navigate(`/course/${courseId}`);
            })
    };

    const formShape  = {
        
    }

    const checkboxData = [
        {label: 'Yes it is', value: true},
        {label: 'No is not', value: false}
    ];

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
                <Form
                    initialValues={{
                        courseId: courseId
                    }}
                    onSubmit={onSubmit}
                    validate={validate}
                    render={({handleSubmit, submitting}) => (
                        <form onSubmit={handleSubmit} noValidate className="form">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                name="title"
                                fullWidth
                                label="Title"
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                name="description"
                                fullWidth
                                label="Description"
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                name="videoUrl"
                                fullWidth
                                label="Video URL"
                            />
                            <Checkboxes
                                label="Select if lessons is demo"
                                name="isDemo"
                                required={true}
                                data={checkboxData}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                disabled={true}
                                type="number"
                                name="courseId"
                                fullWidth
                                label="Course ID"
                            />
                            <Button type="submit"
                                    color="primary"
                                    className="form-button"
                                    disabled={submitting}
                                    variant="contained">
                                Create
                            </Button>
                        </form>
                    )}
                />
            </article>
        </Container>
    )

}
