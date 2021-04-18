import './Auth.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import {TextField} from 'mui-rff';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {Form} from "react-final-form";


export default function Login() {

    const onSubmit = (values) => {
        console.log('values: ', values);
        /* postCourse(values)
             .then(() => {
                 history.push('/');
             })*/
    };

    const validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        }
        if (!values.password) {
            errors.password = 'Required';
        }
        return errors;
    };


    return (
        <Container component="main" maxWidth="xs">
            <article className="paper">
                <Typography component="h1" variant="h5">
                    Sign in
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
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    )}/>
            </article>
        </Container>
    );
}
