import React, {useContext, useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import {Field, Form} from "react-final-form";
import {Button, Container, Grid, Paper} from "@material-ui/core";
import {TextField} from "final-form-material-ui";
import CoursesContext from "../../context/courses/coursesContext";
import Spinner from "../../components/spinner/Spinner";
import Lessons from "../../components/lessons/Lessons";
import AuthContext from "../../context/auth/authContext";
import {navigate, useParams} from "@reach/router";
import {makeStyles} from "@material-ui/core/styles";


export default function EditCourse() {
    const coursesContext = useContext(CoursesContext);

    const {getCourse, course, updateCourse, loading, lessons} = coursesContext;

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
                navigate('/dashboard');
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

        if (!values.imageUrl) {
            errors.imageUrl = 'Required';
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

    const {title, id, description, price, imageUrl} = course;

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
                    price: price,
                    imageUrl: imageUrl,
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
                                    <Field
                                        fullWidth
                                        required
                                        name="imageUrl"
                                        component={TextField}
                                        type="text"
                                        label="Image Url"
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
            {
                lessons && lessons.length > 0 &&
                <Container className={classes.lessons}>
                    <Lessons lessons={lessons}/>
                </Container>
            }

        </section>
    )

}

