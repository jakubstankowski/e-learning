import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

export default function Header() {
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
            </Toolbar>
        </AppBar>
    )

}

