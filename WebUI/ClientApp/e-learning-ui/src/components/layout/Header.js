import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import {Link} from '@reach/router';

const useStyles = makeStyles((theme) => ({
    link:{
      textDecoration: 'none'
    },
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    loginButton: {
        marginRight: '1rem'
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));

export default function Header(props) {
    const classes = useStyles();
    const {sections, title} = props;

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    <Link to={'/'}>
                        {title}
                    </Link>
                </Typography>
                <Button variant="outlined" size="small" className={classes.loginButton}>
                    <Link to={'/login'}>
                        Login
                    </Link>
                </Button>
                <Button variant="outlined" size="small">
                    <Link to={'/register'}>
                        Register
                    </Link>
                </Button>
            </Toolbar>
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                {sections.map((section) => (
                    <Link
                        color="inherit"
                        noWrap
                        key={section.title}
                        variant="body2"
                        to={section.url}
                        className={classes.toolbarLink}
                    >
                        {section.title}
                    </Link>
                ))}
            </Toolbar>
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};


/*
import React, {Fragment, useContext, useEffect} from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {Link, Redirect} from "@reach/router";

import {Button} from "@material-ui/core";
import AuthContext from '../../context/auth/authContext';


export default function Header() {
    const authContext = useContext(AuthContext);

    const {isAuthenticated, logout, user, loadUser} = authContext;

    useEffect(() => {
        loadUser();



        // eslint-disable-next-line
    }, [isAuthenticated]);

    const onLogout = () => {
        logout();
    };

    const authLinks = (
        <Fragment>
            <Link to="/dashboard/course/create">
                <Button>
                    Create new course
                </Button>
            </Link>
            <Link to="/dashboard/lesson/create">
                <Button>
                    Create new lesson
                </Button>
            </Link>
            <Link to="/dashboard">
                <Button>
                   Dashboard
                </Button>
            </Link>
            <Button onClick={onLogout}>
                Logout
            </Button>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <Link to="/register">
                <Button>
                    Register
                </Button>
            </Link>
            <Link to="/login">
                <Button>
                    Login
                </Button>
            </Link>
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
                {isAuthenticated ? authLinks : guestLinks}
            </Toolbar>
        </AppBar>
    )

}

*/
