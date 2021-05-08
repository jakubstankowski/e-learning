import React, {Fragment, useContext} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import {NavLink} from "../routing/NavLink";
import AuthContext from "../../context/auth/authContext";


export function DashboardListItems() {
    const authContext = useContext(AuthContext);
    const {isAdmin} = authContext;

    return (
        <Fragment>
            <NavLink to={'/dashboard'}>
                <ListItem button>
                    <ListItemIcon>
                        <DashboardIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" color="primary"/>
                </ListItem>
            </NavLink>
            {
                isAdmin &&
                <NavLink to={'/dashboard/course/create'}>
                    <ListItem button>
                        <ListItemIcon>
                            <PostAddIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Create Course"/>
                    </ListItem>
                </NavLink>
            }
            <NavLink to={'/dashboard/courses'}>
                <ListItem button>
                    <ListItemIcon>
                        <ListAltOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Courses"/>
                </ListItem>
            </NavLink>
        </Fragment>
    )
}
