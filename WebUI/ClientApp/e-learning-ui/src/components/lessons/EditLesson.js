import * as React from "react";
import Typography from "@material-ui/core/Typography";
import {Field, Form} from "react-final-form";
import {Button, Grid, Paper} from "@material-ui/core";
import {TextField} from "final-form-material-ui";
import {useContext, useEffect} from "react";
import LessonsContext from "../../context/lessons/lessonsContext";
import Spinner from "../layout/Spinner";
import {navigate, useParams} from "@reach/router";
import AuthContext from "../../context/auth/authContext";

export default function EditLesson() {
    const lessonsContext = useContext(LessonsContext);

    const {getLesson, updateLesson, lesson, loading} = lessonsContext;

    const authContext = useContext(AuthContext);
    const {isAuthenticated} = authContext;

    const {lessonId, courseId} = useParams();

    useEffect(() => {
        if (isAuthenticated) {
            getLesson(lessonId);
        }
        // eslint-disable-next-line
    }, [isAuthenticated]);

    if (loading) return <Spinner/>

    const {id, title, description, videoUrl} = lesson;

    const onSubmit = (lesson) => {
        updateLesson(lessonId, lesson)
            .then(() => {
                navigate(`/course/${courseId}/lesson/${lessonId}`);
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
        <section className='form-container'>
            <Typography variant="h5" component="h2">
                Edit Lesson <strong>{title}</strong> ID: <strong>{id}</strong>
            </Typography>
            <Form
                initialValues={{
                    id: id,
                    title: title,
                    description: description,
                    videoUrl: videoUrl,
                    courseId: courseId
                }}
                onSubmit={onSubmit}
                validate={validate}
                render={({handleSubmit, submitting}) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <Paper style={{padding: 16}}>
                            <Grid container alignItems="flex-start" spacing={2}>
                                <Grid item xs={12}>
                                    <Field
                                        fullWidth
                                        required
                                        name="title"
                                        component={TextField}
                                        type="text"
                                        label="Title"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        fullWidth
                                        required
                                        name="description"
                                        component={TextField}
                                        type="text"
                                        label="Description"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        fullWidth
                                        required
                                        name="videoUrl"
                                        component={TextField}
                                        type="text"
                                        label="Video URL"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        fullWidth
                                        required
                                        name="courseId"
                                        component={TextField}
                                        type="number"
                                        label="Course ID"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit"
                                            className="form-button"
                                            color="primary"
                                            disabled={submitting}
                                            variant="contained">
                                        Save
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </form>
                )}
            />
        </section>
    )

}
