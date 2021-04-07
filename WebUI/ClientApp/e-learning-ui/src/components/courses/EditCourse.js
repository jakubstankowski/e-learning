import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Lessons from "../lessons/Lessons";
import {Field, Form} from "react-final-form";
import {Button, Grid, Paper} from "@material-ui/core";
import {TextField} from "final-form-material-ui";

class EditCourse extends React.Component {
    componentDidMount() {
        this.props.getCourse(this.props.match.params.courseId);
    }

    static propTypes = {
        course: PropTypes.object.isRequired,
        lessons: PropTypes.array.isRequired,
        getCourse: PropTypes.func.isRequired,
        updateCourse: PropTypes.func.isRequired,
        deleteLesson: PropTypes.func.isRequired,
        updateLesson: PropTypes.func.isRequired
    };

    onSubmit = (course) => {
        this.props.updateCourse(this.props.match.params.courseId, course)
            .then(() => {
                this.props.history.push('/');
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
        if (!values.price) {
            errors.price = 'Required';
        }
        return errors;
    };


    render() {
        const {id, title, description, price} = this.props.course;

        return (
            <section className='form-container'>
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
                                            Save
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </form>
                    )}
                />
                <Lessons
                    {...this.props}
                    deleteLesson={this.props.deleteLesson}
                    updateLesson={this.props.updateLesson}
                    lessons={this.props.lessons}/>
            </section>
        )
    }

}


export default EditCourse;
