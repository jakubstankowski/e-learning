import './App.css';
import Header from "./components/layout/Header";
import React from "react";
import Container from "@material-ui/core/Container";
import Courses from "./components/courses/Courses";


function App() {
    return (
        <div>
            <Header/>
            <Container>
                <Courses/>
            </Container>
        </div>
    );
}

export default App;
