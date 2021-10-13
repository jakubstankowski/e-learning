import * as React from "react";
import {Button} from "@material-ui/core";
import {Form} from 'react-final-form'
import Typography from "@material-ui/core/Typography";
import {useContext} from "react";
import CoursesContext from "../../context/courses/coursesContext";
import {TextField} from 'mui-rff';
import Container from "@material-ui/core/Container";
import {navigate} from "@reach/router";


export default function CreateCourse() {
    const coursesContext = useContext(CoursesContext);

    const {postCourse} = coursesContext;

    const onSubmit = (values) => {
        postCourse(values)
            .then(() => {
                navigate('/courses');
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

        if(!values.imageUrl){
            errors.imageUrl = 'Required';
        }

        return errors;
    };

    return (
        <Container component="main" maxWidth="xs">
            <article className="form-body">
                <Typography variant="h5" component="h2">
                    Create Course
                </Typography>
                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    render={({handleSubmit, submitting}) => (
                        <form onSubmit={handleSubmit} noValidate className="form">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                name="title"
                                fullWidth
                                label="Title"
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                name="description"
                                fullWidth
                                label="Description"
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                type="number"
                                name="price"
                                fullWidth
                                label="Price"
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                type="text"
                                name="imageUrl"
                                fullWidth
                                label="Image Url"
                            />
                            <Button type="submit"
                                    className="form-button"
                                    color="primary"
                                    disabled={submitting}
                                    variant="contained">
                                Create
                            </Button>
                        </form>
                    )}
                />
            </article>
        </Container>
    )
}

