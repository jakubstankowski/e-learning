import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PostAddIcon from '@material-ui/icons/PostAdd';
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import {NavLink} from "../routing/NavLink";

export const mainListItems = (
    <div>
        <NavLink to={'/dashboard'}>
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard" color="primary"/>
            </ListItem>
        </NavLink>
        <NavLink to={'/dashboard/course/create'}>
            <ListItem button>
                <ListItemIcon>
                    <PostAddIcon/>
                </ListItemIcon>
                <ListItemText primary="Create Course"/>
            </ListItem>
        </NavLink>
        <NavLink to={'/dashboard/courses'}>
            <ListItem button>
                <ListItemIcon>
                    <ListAltOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary="Courses"/>
            </ListItem>
        </NavLink>
        <NavLink to={'/dashboard/lesson/create'}>
            <ListItem button>
                <ListItemIcon>
                    <VideoCallOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary="Create Lesson"/>
            </ListItem>
        </NavLink>
        <NavLink to={'/dashboard/lesson/create'}>
            <ListItem button>
                <ListItemIcon>
                    <VideocamOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary="Lessons"/>
            </ListItem>
        </NavLink>
    </div>
);
