import './Auth.css';
import React, {useContext, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import {TextField} from 'mui-rff';
import {Link} from "@reach/router";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {Form} from "react-final-form";
import {validateEmail} from "../../helpers/validateEmail";
import AuthContext from "../../context/auth/authContext";
import {navigate} from "@reach/router"

export default function Login({history}) {
    const authContext = useContext(AuthContext);

    const {login, error, isAuthenticated, isAdmin} = authContext;


    useEffect(() => {
        if (isAuthenticated) {
            console.log('isAdmin? ', isAdmin);
        }

        if (error) {
            //TODO : implement error alert #EL-32
            console.log('error!');
        }
        // eslint-disable-next-line
    }, [isAdmin, error, isAuthenticated, history, ]);


    const onSubmit = (values) => {
        login(values)
            .then((res)=>{
                console.log('res', res);
            })
    };

    const validate = (values) => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Required';
        }

        if (!validateEmail(values.email)) {
            errors.email = 'Email not valid';
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
                    initialValues={{
                        email: 'admin@stanlearn.pl',
                        password: 'Breakingbad_2014'
                    }}
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

                            <Link to={`/register`}>
                                {"Don't have an account? Sign Up"}
                            </Link>

                        </form>
                    )}/>
            </article>
        </Container>
    );
}
