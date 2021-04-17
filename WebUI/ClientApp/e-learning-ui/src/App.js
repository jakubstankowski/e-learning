import './App.css';
import Header from "./components/layout/Header";
import React from "react";
import Container from "@material-ui/core/Container";
import Courses from "./components/courses/Courses";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Course from "./components/courses/Course";
import Admin from "./components/admin/Admin";
import CreateCourse from "./components/courses/CreateCourse";
import CreateLesson from "./components/lessons/CreateLesson";
import EditCourse from "./components/courses/EditCourse";
import EditLesson from "./components/lessons/EditLesson";
import CoursesState from "./context/courses/CoursesState";
import LessonsState from "./context/lessons/LessonsState";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";


function App() {
    return (
        <CoursesState>
            <LessonsState>
                <Router>
                    <Header/>
                    <Container>
                        <Switch>
                            <Route
                                path="/"
                                exact
                                component={Courses}
                            />
                            <Route
                                path="/course/:courseId"
                                component={Course}
                            />
                            <Route
                                exact
                                path="/admin"
                                component={Admin}
                            />
                            <Route
                                exact
                                path="/admin/course/create"
                                component={CreateCourse}
                            />
                            <Route
                                exact
                                path="/admin/course/:courseId/edit"
                                component={EditCourse}
                            />
                            <Route
                                exact
                                path="/admin/lesson/:lessonId/edit"
                                component={EditLesson}
                            />
                            <Route
                                exact
                                path="/admin/lesson/create"
                                component={CreateLesson}
                            />
                            <Route exact path='/register' component={Register}/>
                            <Route exact path='/login' component={Login}/>
                        </Switch>
                    </Container>
                </Router>
            </LessonsState>
        </CoursesState>
    );

}

export default App;
