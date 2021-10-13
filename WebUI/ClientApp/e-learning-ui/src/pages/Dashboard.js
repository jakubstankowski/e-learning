import {Container} from "@material-ui/core";
import React from "react";
import Courses from "../components/courses/Courses";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from "@reach/router";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

export default function Dashboard() {
    const classes = useStyles();

    return (
        <Container>
            <Typography variant="h5" component="h2">
                Admin Dashboard
            </Typography>
            <Link to={`/course/create`}
                  style={{textDecoration: 'none', marginTop: '1rem'}}
            >
                <Button color="primary" variant="contained">
                    Create New Course
                </Button>
            </Link>
            <Grid container spacing={4} className={classes.mainGrid}>
                <Courses
                    type="admin"
                />
            </Grid>
        </Container>
    )
}
