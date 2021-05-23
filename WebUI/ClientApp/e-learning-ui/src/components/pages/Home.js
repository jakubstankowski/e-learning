import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import HomeBillboard from "../home/HomeBillboard";
import Grid from "@material-ui/core/Grid";
import HomeCourses from "./HomeCourses";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));


const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://i.imgur.com/0NPaOc6.png',
    imgText: 'main image description',
    linkText: 'Continue reading…',
};


export default function Home() {
    const classes = useStyles();
    return (
        <section>
            <CssBaseline/>
            <HomeBillboard post={mainFeaturedPost}/>
            <Grid container spacing={4} className={classes.mainGrid}>
                <HomeCourses/>
            </Grid>
        </section>
    )
}
