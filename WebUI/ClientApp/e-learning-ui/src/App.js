import './App.css';
import React, {Fragment} from 'react';
import {Router} from "@reach/router";
import Course from "./pages/courses/Course";
import CreateCourse from "./pages/courses/CreateCourse";
import CreateLesson from "./components/lessons/CreateLesson";
import EditCourse from "./pages/courses/EditCourse";
import EditLesson from "./components/lessons/EditLesson";
import CoursesState from "./context/courses/CoursesState";
import LessonsState from "./context/lessons/LessonsState";
import BasketState from './context/basket/BasketState';
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AuthState from "./context/auth/AuthState";
import Home from "./pages/Home";
import Lesson from "./components/lessons/Lesson";
import Dashboard from "./components/dashboard/Dashboard";
import Basket from "./pages/basket/Basket";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import {Container} from "@material-ui/core";

function App() {
    return (
        <AuthState>
            <CoursesState>
                <BasketState>
                    <LessonsState>
                        <Header title="E-Learning"/>
                        <Container maxWidth="lg"
                                   className="container">
                            <Router>
                                <Home path="/"/>
                                <Course path="/course/:courseId"/>
                                <Lesson path="/course/:courseId/lesson/:lessonId"/>
                                <CreateCourse path="/course/create"/>
                                <EditCourse path="/course/:courseId/edit"/>
                                <CreateLesson path="/course/:courseId/lesson/create"/>
                                <EditLesson path="/course/:courseId/lesson/:lessonId/edit"/>
                                <Login path="/login"/>
                                <Register path="/register"/>
                                <Basket path="/basket"/>
                                <Dashboard path="/dashboard"/>
                            </Router>
                        </Container>
                        <Footer title="Stantech"/>
                    </LessonsState>
                </BasketState>
            </CoursesState>
        </AuthState>
    );
}

export default App;
