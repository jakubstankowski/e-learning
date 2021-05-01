import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PostAddIcon from '@material-ui/icons/PostAdd';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import {PostAdd} from "@material-ui/icons";

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PostAddIcon />
            </ListItemIcon>
            <ListItemText primary="Create Course" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
               <VideoCallIcon/>
            </ListItemIcon>
            <ListItemText primary="Create Lesson" />
        </ListItem>
    </div>
);
