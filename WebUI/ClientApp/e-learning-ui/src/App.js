import './App.css';
import React, {useContext} from "react";
import {Router} from "@reach/router";
import Courses from "./components/courses/Courses";
import Course from "./components/courses/Course";
import CreateCourse from "./components/courses/CreateCourse";
import CreateLesson from "./components/lessons/CreateLesson";
import EditCourse from "./components/courses/EditCourse";
import EditLesson from "./components/lessons/EditLesson";
import CoursesState from "./context/courses/CoursesState";
import LessonsState from "./context/lessons/LessonsState";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AuthState from "./context/auth/AuthState";
import Dashboard from "./components/layout/Dashboard";
import MainLayout from "./components/layout/MainLayout";
import Lessons from "./components/lessons/Lessons";
import Home from "./components/pages/Home";

function App() {
    return (
        <AuthState>
            <CoursesState>
                <LessonsState>
                    <Router>
                        <MainLayout path="/">
                            <Home path="/"/>
                            <Course path="/course/:courseId"/>
                            <Login path="/login"/>
                            <Register path="/register"/>
                        </MainLayout>
                        <Dashboard path="/dashboard">
                            <CreateCourse path="/"/>
                        </Dashboard>
                    </Router>
                    {/* <Router>
                        <Header/>
                            <Switch>

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
                    </Router>*/}
                </LessonsState>
            </CoursesState>
        </AuthState>
    );

}

export default App;
