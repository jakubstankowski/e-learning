import React from "react";
import Header from "./Header";
import {Container} from "@material-ui/core";

export default function MainLayout({children}) {
    return (
        <section>
            <Header/>
            <Container>
                {children}
            </Container>
        </section>
    )
}
