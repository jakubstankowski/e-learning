import React, {Fragment, useContext, useEffect} from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import AuthContext from '../../context/auth/authContext';


export default function Header() {
    const authContext = useContext(AuthContext);

    const {isAuthenticated, logout, user, loadUser} = authContext;

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, []);

    const onLogout = () => {
        logout();
    };

    const authLinks = (
        <Fragment>
            <li>Hello {user && user.email}</li>
            <li>
                <Button onClick={onLogout}>
                    Logout
                </Button>
            </li>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </Fragment>
    );

    return (
        <AppBar position="static" className='navbar'>
            <Toolbar variant="dense">
                <Link to="/">
                    <Typography variant="h6" color="inherit">
                        E-Learning
                    </Typography>
                </Link>
                <Link to="/admin/course/create">
                    <Button>
                        Create new course
                    </Button>
                </Link>
                <Link to="/admin/lesson/create">
                    <Button>
                        Create new lesson
                    </Button>
                </Link>
                <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
            </Toolbar>
        </AppBar>
    )

}

