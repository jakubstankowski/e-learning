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
        course: {},
        lessons: [],
        lesson: {}
    };

    componentDidMount() {
        this.getCourses();
    }


    getCourses = async () => {
        const res = await axios.get('https://localhost:44367/api/courses');
        this.setState({
            courses: res.data
        });
    }

    getCourse = async (id) => {
        const res = await axios.get(`https://localhost:44367/api/courses/${id}`);
        this.setState({
            course: {
                id: res.data.id,
                description: res.data.description,
                price: res.data.price,
                title: res.data.title
            },
            lessons: res.data.lessons
        });
    }

    getLesson = async (id) => {
        const res = await axios.get(`https://localhost:44367/api/lesson/${id}`);
        this.setState({
            lesson: res.data
        });
    }


    render() {
        const {courses, course, lessons} = this.state;

        return (
            <Router>
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
                                        getLesson={this.getLesson}
                                        course={course}
                                        lessons={lessons}
                                    />
                                )}
                            />
                        </Switch>
                    </Container>
            </Router>
        );
    }

}

export default App;
