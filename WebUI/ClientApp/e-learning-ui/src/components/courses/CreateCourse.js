import * as React from "react";
import {Button, Grid, Paper} from "@material-ui/core";
import {TextField} from 'final-form-material-ui';
import PropTypes from 'prop-types';
import {Form, Field} from 'react-final-form'
import Typography from "@material-ui/core/Typography";


function CreateCourse({postCourse, history}) {

    const onSubmit = (values) => {
        postCourse(values)
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
                Create Course
            </Typography>
            <Form
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
                                        Create
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

CreateCourse.propTypes = {
    postCourse: PropTypes.func.isRequired
};

export default CreateCourse;
