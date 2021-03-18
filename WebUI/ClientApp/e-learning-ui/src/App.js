import './App.css';
import Header from "./components/layout/Header";
import React from "react";
import Container from "@material-ui/core/Container";
import Courses from "./components/courses/Courses";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Course from "./components/courses/Course";
import axios from "axios";


class App extends React.Component {
    state = {
        courses: [],
        course: {}
    };

    componentDidMount() {
        this.getCourses();
    }


    getCourses = async () => {
        const res = axios.get('https://localhost:44367/api/courses');
        this.setState({courses: res.data});
    }

    getCourse = async (id) => {
        const res = await axios.get(`https://localhost:44367/api/courses/${id}`);
        this.setState({course: res.data});
    }

    render() {
        const {courses, course} = this.state;

        return (
            <Router>
                <div>
                    <Header/>
                    <Container>
                        <Switch>
                            <Route
                                path="/"
                                exact render={props => (
                                <Courses
                                    {...props}
                                    courses={courses}
                                />
                            )}/>
                            <Route
                                exact
                                path="/course/:id"
                                render={props => (
                                    <Course
                                        {...props}
                                        getCourse={this.getCourse}
                                        course={course}
                                    />
                                )}
                            />
                        </Switch>
                    </Container>
                </div>
            </Router>
        );
    }

}

export default App;
