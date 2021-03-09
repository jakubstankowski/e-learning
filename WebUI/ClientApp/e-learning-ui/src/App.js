import './App.css';
import Header from "./components/layout/Header";
import React from "react";
import Container from "@material-ui/core/Container";
import Courses from "./components/courses/Courses";


function App() {
    return (
        <div>
            <Header/>
            <Container maxWidth="sm">
                <Courses/>
            </Container>
        </div>
    );
}

export default App;
