import React from "react";
import Header from "./Header";
import {Container} from "@material-ui/core";
import Footer from "./Footer";


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


export default function HomeLayout({children}) {
    return (
        <main>
            <Header title="stanlearn" sections={sections}/>
            <Container>
                {children}
            </Container>
            <Footer title="Footer" description="Something here to give the footer a purpose!"/>
        </main>
    )
}
