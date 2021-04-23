import React, {useContext, useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import Lessons from "../lessons/Lessons";
import {Field, Form} from "react-final-form";
import {Button, Grid, Paper} from "@material-ui/core";
import {TextField} from "final-form-material-ui";
/*
import {Route} from "react-router-dom";
*/
import CoursesContext from "../../context/courses/coursesContext";
import Spinner from "../layout/Spinner";


export default function EditCourse({match, history}) {
    const coursesContext = useContext(CoursesContext);

    const {getCourse, course, updateCourse, loading} = coursesContext;

    useEffect(() => {
        getCourse(match.params.courseId);
        // eslint-disable-next-line
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

    if (loading) return <Spinner/>;

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
           {/* <Route component={Lessons}/>*/}
        </section>
    )

}

