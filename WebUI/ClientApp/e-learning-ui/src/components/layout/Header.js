import React, {Fragment, useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from '@reach/router';
import AuthContext from '../../context/auth/authContext';
import BasketContext from "../../context/basket/basketContext";
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


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
    const {title} = props;

    const authContext = useContext(AuthContext);
    const {logout, loadUser, isAuthenticated, isAdmin} = authContext;

    const basketContext = useContext(BasketContext);

    const {basket} = basketContext;

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, [isAuthenticated]);


    const authLinks = (
        <Fragment>
            <Link to="/user">
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
                    <IconButton aria-label="cart">
                        <Badge
                            badgeContent={basket.items && basket.items.length > 0 ? basket.items.length : null}
                            color="secondary">
                            <ShoppingCartIcon/>
                        </Badge>
                    </IconButton>
                </Link>
            </Toolbar>
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};
