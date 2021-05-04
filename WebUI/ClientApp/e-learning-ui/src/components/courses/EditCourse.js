import React, {useContext, useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import {Field, Form} from "react-final-form";
import {Button, Container, Grid, Paper} from "@material-ui/core";
import {TextField} from "final-form-material-ui";
import CoursesContext from "../../context/courses/coursesContext";
import Spinner from "../layout/Spinner";
import Lessons from "../lessons/Lessons";
import AuthContext from "../../context/auth/authContext";
import {useParams} from "@reach/router";
import {makeStyles} from "@material-ui/core/styles";


export default function EditCourse({history}) {
    const coursesContext = useContext(CoursesContext);

    const {getCourse, course, updateCourse, loading} = coursesContext;

    const authContext = useContext(AuthContext);
    const {isAuthenticated} = authContext;

    const {courseId} = useParams();

    useEffect(() => {
        if (isAuthenticated) {
            getCourse(courseId);
        }
        // eslint-disable-next-line
    }, [isAuthenticated]);

    const onSubmit = (course) => {
        updateCourse(courseId, course)
            .then(() => {
                history.push('/dashboard/courses');
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

    const useStyles = makeStyles((theme) => ({
        editCourse: {
            textFloat: 'center'
        },
        lessons: {
            marginTop: '2rem'
        }
    }));

    const classes = useStyles();

    if (loading) return <Spinner/>;

    const {title, id, description, price} = course;

    return (
        <section className={classes.editCourse}>
            <Typography variant="h5" component="h2">
                Edit Course <strong>{title}</strong> ID: <strong>{id}</strong>
            </Typography>
            <Form
                initialValues={{
                    id: id,
                    title: title,
                    description: description,
                    price: price
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
                                <Grid item xs={4}>
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
            <Container className={classes.lessons}>
                <Lessons/>
            </Container>
        </section>
    )

}

