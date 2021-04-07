import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import {Field, Form} from "react-final-form";
import {Button, Grid, Paper} from "@material-ui/core";
import {TextField} from "final-form-material-ui";

class EditLesson extends React.Component {
    componentDidMount() {
        this.props.getLesson(this.props.match.params.lessonId);
    }

    static propTypes = {
        lesson: PropTypes.object.isRequired,
        getLesson: PropTypes.func.isRequired,
        updateLesson: PropTypes.func.isRequired,
    };

    onSubmit = (lesson) => {
        this.props.updateLesson(this.props.match.params.lessonId, lesson)
            .then(() => {
                this.props.history.push(`/course/${lesson.courseId}/lesson/${this.props.match.params.lessonId}`);
            })
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
        const {id, title, description, videoUrl, courseId} = this.props.lesson;

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

}


export default EditLesson;
