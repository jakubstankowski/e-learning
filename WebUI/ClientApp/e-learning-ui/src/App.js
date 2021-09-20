import './App.css';
import React, {useEffect} from "react";
import {Router} from "@reach/router";
import Course from "./components/courses/Course";
import CreateCourse from "./components/courses/CreateCourse";
import CreateLesson from "./components/lessons/CreateLesson";
import EditCourse from "./components/courses/EditCourse";
import EditLesson from "./components/lessons/EditLesson";
import CoursesState from "./context/courses/CoursesState";
import LessonsState from "./context/lessons/LessonsState";
import BasketState from './context/basket/BasketState';
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AuthState from "./context/auth/AuthState";
import DashboardLayout from "./components/layout/DashboardLayout";
import HomeLayout from "./components/layout/HomeLayout";
import Home from "./components/pages/Home";
import Lesson from "./components/lessons/Lesson";
import Dashboard from "./components/dashboard/Dashboard";
import UserLayout from "./components/layout/UserLayout";
import UserCourses from "./components/pages/UserCourses";
import UserProfile from "./components/user/UserProfile";
import DashboardCourses from "./components/pages/DashboardCourses";
import Basket from "./components/pages/Basket";

function App() {
    return (
        <AuthState>
            <CoursesState>
                <BasketState>
                    <LessonsState>
                        <Router>
                            <HomeLayout path="/">
                                <Home path="/"/>
                                <Course path="/course/:courseId"/>
                                <Lesson path="/course/:courseId/lesson/:lessonId"/>
                                <Login path="/login"/>
                                <Register path="/register"/>
                                <Basket path="/basket"/>
                            </HomeLayout>
                            <DashboardLayout path="/dashboard">
                                <Dashboard path="/"/>
                                <CreateCourse path="/course/create"/>
                                <EditCourse path="/courses/:courseId/edit"/>
                                <DashboardCourses path="/courses"/>
                                <Course path="/course/:courseId"/>
                                <Lesson path="/course/:courseId/lesson/:lessonId"/>
                                <CreateLesson path="/course/:courseId/lesson/create"/>
                                <EditLesson path="/course/:courseId/lesson/:lessonId/edit"/>
                            </DashboardLayout>
                            <UserLayout path="/user">
                                <UserCourses path="/my-courses"/>
                                <UserProfile path="/profile"/>
                            </UserLayout>
                        </Router>
                    </LessonsState>
                </BasketState>
            </CoursesState>
        </AuthState>
    );
}

export default App;
