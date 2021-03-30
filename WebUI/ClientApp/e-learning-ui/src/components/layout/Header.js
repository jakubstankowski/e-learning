import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <Typography variant="h6" color="inherit">
                            E-Learning
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header;
