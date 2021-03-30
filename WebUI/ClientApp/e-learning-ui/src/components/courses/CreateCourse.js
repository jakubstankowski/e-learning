import * as React from "react";
import {Button, TextField} from "@material-ui/core";
import PropTypes from 'prop-types';
import {Form, Field} from 'react-final-form'
import Grid from "@material-ui/core/Grid";


class CreateCourse extends React.Component {
    state = {
        title: '',
        description: '',
        price: ''
    }

    static propTypes = {
        postCourse: PropTypes.func.isRequired
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.postCourse(this.state);
        this.setState({title: '', description: '', price: ''});
        this.props.history.push('/');
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    validate = (values) => {
        console.log('values: ', values);

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
            <article style={{padding: 16, margin: 'auto', maxWidth: 400}}>
                <h3>
                    Create Course
                </h3>
                <Form
                    onSubmit={this.onSubmit}
                    validate={this.validate}
                    render={({handleSubmit, submitting}) => (
                        <form onSubmit={handleSubmit}>
                            <Grid container alignItems="flex-start" spacing={2}>
                                <Grid item md={12}>
                                    <Field
                                        fullWidth
                                        required
                                        name="title"
                                        component={TextField}
                                        type="text"
                                        label="Title"
                                    />
                                </Grid>
                                <Grid item md={12}>
                                    <Field
                                        fullWidth
                                        required
                                        name="description"
                                        component={TextField}
                                        type="text"
                                        label="Description"
                                    />
                                </Grid>
                                <Grid item md={12}>
                                    <Field
                                        fullWidth
                                        required
                                        name="price"
                                        component={TextField}
                                        type="number"
                                        label="Price"
                                    />
                                </Grid>
                                <Grid item md={12}>
                                    <Button type="submit"
                                            style={{width: '100%', marginTop: '1rem'}}
                                            variant="contained"
                                            disabled={submitting}
                                            color="primary">
                                        Create
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                />
            </article>
        )
    }

}

export default CreateCourse;
