import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

class Header extends React.Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                        E-Learning
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header;
