import './App.css';
import Header from "./components/layout/Header";
import React from "react";
import Container from "@material-ui/core/Container";
import Courses from "./components/courses/Courses";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Course from "./components/courses/Course";


function App() {
    return (
        <Router>
            <div>
                <Header/>
                <Container>
                    <Route path="/" exact component={Courses}/>
                    <Route path="/course/:id" exact component={Course}/>
                </Container>
            </div>
        </Router>

    );
}

export default App;
