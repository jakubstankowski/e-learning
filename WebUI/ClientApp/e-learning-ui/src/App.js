import './App.css';
import Header from "./components/layout/Header";
import React from "react";
import Container from "@material-ui/core/Container";
import Courses from "./components/courses/Courses";
import Router from "react-router-dom";
import Route from "react-router-dom";


function App() {
    return (
        <Router>
            <div>
                <Header/>
                <Container>
                    <Route path="/" exact component={Courses}/>
                </Container>
            </div>
        </Router>

    );
}

export default App;
