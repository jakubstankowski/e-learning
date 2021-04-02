import * as React from "react";
import {Button, Grid, Paper} from "@material-ui/core";
import {TextField} from 'final-form-material-ui';
import PropTypes from 'prop-types';
import {Form, Field} from 'react-final-form'


class CreateCourse extends React.Component {
    static propTypes = {
        postCourse: PropTypes.func.isRequired
    };

    onSubmit = (values) => {
        this.props.postCourse(values);
        this.props.history.push('/');
    };

    validate = (values) => {
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


    render() {
        return (
            <article className='form-container'>
                <h3>
                    Create Course
                </h3>
                <Form
                    onSubmit={this.onSubmit}
                    validate={this.validate}
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
            </article>
        )
    }

}

export default CreateCourse;
