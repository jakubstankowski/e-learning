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
import AuthState from "./context/auth/AuthState";
import PrivateRoute from './components/routing/PrivateRoute';
import Dashboard from "./components/layout/Dashboard";


function App() {
    return (
        <AuthState>
            <CoursesState>
                <LessonsState>
                    <Router>
                      {/*  <Header/>*/}
                            <Switch>
                                <Route
                                    path="/"
                                    exact
                                    component={Courses}
                                />
                                <Route
                                    path="/dashboard"
                                    exact
                                    component={Dashboard}
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
                                <PrivateRoute
                                    exact
                                    path="/admin/course/create"
                                    component={CreateCourse}
                                />
                                <PrivateRoute
                                    exact
                                    path="/admin/course/:courseId/edit"
                                    component={EditCourse}
                                />
                                <PrivateRoute
                                    exact
                                    path="/admin/lesson/:lessonId/edit"
                                    component={EditLesson}
                                />
                                <PrivateRoute
                                    exact
                                    path="/admin/lesson/create"
                                    component={CreateLesson}
                                />
                                <Route
                                    exact
                                    path='/register'
                                    component={Register}/>
                                <Route
                                    exact
                                    path='/login'
                                    component={Login}/>
                            </Switch>
                    </Router>
                </LessonsState>
            </CoursesState>
        </AuthState>
    );

}

export default App;
