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
import DashboardLayout from "./components/layout/DashboardLayout";
import MainLayout from "./components/layout/MainLayout";
import Lessons from "./components/lessons/Lessons";
import Home from "./components/pages/Home";
import Lesson from "./components/lessons/Lesson";
import Dashboard from "./components/dashboard/Dashboard";


function App() {
    return (
        <AuthState>
            <CoursesState>
                <LessonsState>
                    <Router>
                        <MainLayout path="/">
                            <Home path="/"/>
                            <Course path="/course/:courseId"/>
                            <Lesson path="/course/:courseId/lesson/:lessonId"/>
                            <Login path="/login"/>
                            <Register path="/register"/>
                        </MainLayout>
                        <DashboardLayout path="/dashboard">
                            <Dashboard path="/"/>
                            <CreateCourse path="/course/create"/>
                            <Courses path={"/courses"}/>
                            <CreateLesson path="/lesson/create"/>
                        </DashboardLayout>
                    </Router>
                </LessonsState>
            </CoursesState>
        </AuthState>
    );

}

export default App;
