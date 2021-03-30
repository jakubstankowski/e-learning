import * as React from "react";
import Typography from "@material-ui/core/Typography";
import {Grid, Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";


class Admin extends React.Component {

    render() {
        return (
            <article style={{padding: 16}}>
                <Typography variant="h5" component="h2">
                    Admin mode
                </Typography>
                <Grid container alignItems="flex-start" spacing={2}>
                    <Link to="/admin/course/create" style={{textDecoration: 'none'}}>
                                <Button variant="contained" color="primary">
                                    Create new course
                                </Button>
                    </Link>
                    <Link to="/admin/course/create" style={{textDecoration: 'none'}}>
                        <Button variant="contained" color="primary">
                            Create new lesson
                        </Button>
                    </Link>
                </Grid>
            </article>
        )
    }
}


export default Admin;
