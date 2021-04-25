import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import MainFeaturedPost from "../layout/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import Main from "../layout/Main";
import Sidebar from "../layout/Sidebar";
import FeaturedPost from "../layout/FeaturedPost";
import Courses from "../courses/Courses";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));


const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
};

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
];

const posts = ['post1, post2, post3'];

const sidebar = {
    title: 'About',
    description:
        'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
        {title: 'March 2020', url: '#'},
        {title: 'February 2020', url: '#'},
        {title: 'January 2020', url: '#'},
        {title: 'November 1999', url: '#'},
        {title: 'October 1999', url: '#'},
        {title: 'September 1999', url: '#'},
        {title: 'August 1999', url: '#'},
        {title: 'July 1999', url: '#'},
        {title: 'June 1999', url: '#'},
        {title: 'May 1999', url: '#'},
        {title: 'April 1999', url: '#'},
    ],
    social: [
        {name: 'GitHub', icon: 'test'},
        {name: 'Twitter', icon: 'test'},
        {name: 'Facebook', icon: 'test'},
    ],
};

export default function Home({children}) {
    const classes = useStyles();
    return (
        <>
            <CssBaseline/>
            <main>
                <MainFeaturedPost post={mainFeaturedPost}/>
                <Grid container spacing={4}>
                    {/*{featuredPosts.map((post) => (
                        <FeaturedPost key={post.title} post={post}/>
                    ))}*/}
                    <Courses/>
                </Grid>
                <Grid container spacing={5} className={classes.mainGrid}>
                    <Main title="From the firehose" posts={posts}/>
                    <Sidebar
                        title={sidebar.title}
                        description={sidebar.description}
                        archives={sidebar.archives}
                        social={sidebar.social}
                    />
                </Grid>
            </main>
        </>
    )
}
