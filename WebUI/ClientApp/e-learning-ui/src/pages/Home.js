import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import HomeBillboard from "../components/home/HomeBillboard";
import Grid from "@material-ui/core/Grid";
import HomeCourses from "./HomeCourses";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));


export default function Home() {
    const classes = useStyles();
    return (
        <section>
            <Grid container spacing={4} className={classes.mainGrid}>
                <HomeCourses/>
            </Grid>
        </section>
    )
}
