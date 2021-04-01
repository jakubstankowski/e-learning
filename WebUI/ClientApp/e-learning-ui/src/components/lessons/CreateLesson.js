import * as React from "react";
import {Button, Grid, Paper} from "@material-ui/core";
import {TextField} from 'final-form-material-ui';
import PropTypes from 'prop-types';
import {Form, Field} from 'react-final-form'


class CreateLesson extends React.Component {
    static propTypes = {
        postLesson: PropTypes.func.isRequired
    };


    state = {
        title: "",
        description: "",
        videoUrl: "",
        courseId: ''
    }


    onSubmit = (values) => {
       /* this.props.postLesson(values);
        this.props.history.push(`/course/${values.courseId}`);*/

        console.log('values: ', values);
    };

    validate = (values) => {
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

    render() {
        return (
            <article style={{padding: 16, margin: 'auto', maxWidth: 600}}>
                <h3>
                    Create Lesson
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
                                                style={{width: '100%', marginTop: '1rem'}}
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

export default CreateLesson;
