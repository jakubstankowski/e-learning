import Courses from "../../components/courses/Courses";
import Grid from "@material-ui/core/Grid";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

export default function User() {
    const classes = useStyles();
    return (
        <section>
            <Typography variant="h5" component="h2">
                Welcome to user courses!
            </Typography>
            <Grid container spacing={4} className={classes.mainGrid}>
                <Courses
                    type="user"
                />
            </Grid>
        </section>
    )
}
