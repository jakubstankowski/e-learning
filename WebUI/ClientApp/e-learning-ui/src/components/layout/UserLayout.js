import React from "react";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Header from "./Header";



const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        color: theme.palette.primary.light
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

export default function UserLayout({children}) {
    const classes = useStyles();

    return (
        <article>
            <Header title="stanlearn" sections={[]}/>
            <main className={classes.content}>
                <Container maxWidth="lg">
                     {children}
                </Container>
            </main>
        </article>
    )

}
