import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PostAddIcon from '@material-ui/icons/PostAdd';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import {Link} from "@reach/router";


export const mainListItems = (
    <div>
        <Link to={'/dashboard'}>
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
            </ListItem>
        </Link>
        <Link to={'/dashboard/course/create'}>
            <ListItem button>
                <ListItemIcon>
                    <PostAddIcon/>
                </ListItemIcon>
                <ListItemText primary="Create Course"/>
            </ListItem>
        </Link>
        <Link to={'/dashboard/lesson/create'}>
            <ListItem button>
                <ListItemIcon>
                    <VideoCallIcon/>
                </ListItemIcon>
                <ListItemText primary="Create Lesson"/>
            </ListItem>
        </Link>
    </div>
);
