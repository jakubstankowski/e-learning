import React, {Fragment, useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from '@reach/router';
import AuthContext from '../../context/auth/authContext';


const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none'
    },
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        color: theme.palette.primary
    },
    headerButton: {
        margin: '1rem'
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

    const authContext = useContext(AuthContext);
    const {logout, loadUser, isAuthenticated, isAdmin} = authContext;

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, [isAuthenticated]);


    const authLinks = (
        <Fragment>
            <Link to="/user/my-courses">
                <Button variant="outlined" size="small" className={classes.headerButton} color="primary">
                    My Courses
                </Button>
            </Link>
            <Button variant="outlined" size="small" className={classes.headerButton} onClick={logout} color="primary">
                Logout
            </Button>
        </Fragment>
    );

    const adminAuthLinks = (
        <Fragment>
            <Link to="/dashboard">
                <Button variant="outlined" size="small" className={classes.headerButton} color="primary">
                    Dashboard
                </Button>
            </Link>
            <Button variant="outlined" size="small" className={classes.headerButton} onClick={logout} color="primary">
                Logout
            </Button>
        </Fragment>
    );

    let basicLinks = (
        <Fragment>
            <Link to="/register">
                <Button variant="outlined" size="small" className={classes.headerButton} color="primary">
                    Register
                </Button>
            </Link>
            <Link to="/login">
                <Button variant="outlined" size="small" className={classes.headerButton} color="primary">
                    Login
                </Button>
            </Link>
        </Fragment>
    );

    if (isAuthenticated && isAdmin) {
        basicLinks = adminAuthLinks;
    } else if (isAuthenticated && !isAdmin) {
        basicLinks = authLinks;
    }

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar} color="primary">
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    className={classes.toolbarTitle}
                >
                    <Link to={'/'}>
                        {title}
                    </Link>
                </Typography>
                {
                    basicLinks
                }
                <Link to="/basket">
                    <Button variant="outlined" size="small" className={classes.headerButton} color="primary">
                        Basket
                    </Button>
                </Link>
            </Toolbar>
            {
                sections.length >= 0 &&
                <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                    {sections.map((section) => (
                        <Link
                            color="inherit"
                            key={section.title}
                            variant="body2"
                            to={section.url}
                            className={classes.toolbarLink}
                        >
                            {section.title}
                        </Link>
                    ))}
                </Toolbar>
            }

        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};
