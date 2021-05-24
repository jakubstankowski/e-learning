import React from "react";
import Header from "./Header";
import {Container} from "@material-ui/core";
import Footer from "./Footer";
import {makeStyles} from "@material-ui/core/styles";


const sections = [
    {title: 'Technology', url: '#'},
    {title: 'Design', url: '#'},
    {title: 'Culture', url: '#'},
    {title: 'Business', url: '#'},
    {title: 'Politics', url: '#'},
    {title: 'Opinion', url: '#'},
    {title: 'Science', url: '#'},
    {title: 'Health', url: '#'},
    {title: 'Style', url: '#'},
    {title: 'Travel', url: '#'},
];

const useStyles = makeStyles((theme) => ({
    homeContainer: {
        minHeight: '90vh'
    },
}));


export default function HomeLayout({children}) {
    const classes = useStyles();

    return (
        <main>
            <Header title="stanlearn" sections={sections}/>
            <Container className={classes.homeContainer}>
                {children}
            </Container>
            <Footer title="Footer" description="Something here to give the footer a purpose!"/>
        </main>
    )
}
