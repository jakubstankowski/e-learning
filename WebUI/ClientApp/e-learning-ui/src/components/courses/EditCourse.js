import React, {Fragment, Component, useEffect} from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Lessons from "../lessons/Lessons";
import {Field, Form} from "react-final-form";
import {Button, Grid, Paper} from "@material-ui/core";
import {TextField} from "final-form-material-ui";


function EditCourse({getCourse, updateCourse, deleteLesson, course, lessons, match, history}) {
    useEffect(() => {
        getCourse(match.params.courseId);

       // console.log('match: ', match);
    }, []);

    const onSubmit = (course) => {
        updateCourse(match.params.courseId, course)
            .then(() => {
                history.push('/');
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
        if (!values.price) {
            errors.price = 'Required';
        }
        return errors;
    };


    return (
        <section className='form-container'>
            <Typography variant="h5" component="h2">
                Edit Course <strong>{course.title}</strong> ID: <strong>{course.id}</strong>
            </Typography>
            <Form
                initialValues={{
                    id: course.id,
                    title: course.title,
                    description: course.description,
                    price: course.price
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
                                        name="price"
                                        component={TextField}
                                        type="number"
                                        label="Price"
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
            <Lessons
                deleteLesson={deleteLesson}
                lessons={lessons}/>
        </section>
    )

}

EditCourse.propTypes = {
    course: PropTypes.object.isRequired,
    lessons: PropTypes.array.isRequired,
    getCourse: PropTypes.func.isRequired,
    updateCourse: PropTypes.func.isRequired,
    deleteLesson: PropTypes.func.isRequired
}

export default EditCourse;
