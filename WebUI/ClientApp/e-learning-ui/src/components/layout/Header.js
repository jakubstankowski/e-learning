import React, {Fragment, useContext, useEffect} from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
/*
import {Link} from "react-router-dom";
*/
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
          {/*  <Link to="/admin/course/create">
                <Button>
                    Create new course
                </Button>
            </Link>
            <Link to="/admin/lesson/create">
                <Button>
                    Create new lesson
                </Button>
            </Link>*/}
            <Button onClick={onLogout}>
                Logout
            </Button>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
          {/*  <Link to="/register">
                <Button>
                    Register
                </Button>
            </Link>
            <Link to="/login">
                <Button>
                    Login
                </Button>
            </Link>*/}
        </Fragment>
    );

    return (
        <AppBar position="static" className='navbar'>
            <Toolbar variant="dense">
               {/* <Link to="/">
                    <Typography variant="h6" color="inherit">
                        E-Learning
                    </Typography>
                </Link>*/}
                {isAuthenticated ? authLinks : guestLinks}
            </Toolbar>
        </AppBar>
    )

}

