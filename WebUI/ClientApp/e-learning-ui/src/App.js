import './App.css';
import React from 'react';
import {Router} from "@reach/router";
import Course from "./pages/course/Course";
import CreateCourse from "./pages/course/CreateCourse";
import EditCourse from "./pages/course/EditCourse";
import CoursesState from "./context/courses/CoursesState";
import LessonsState from "./context/lessons/LessonsState";
import BasketState from './context/basket/BasketState';
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AuthState from "./context/auth/AuthState";
import Home from "./pages/home/Home";
import Lesson from "./pages/lesson/Lesson";
import Dashboard from "./pages/Dashboard";
import Basket from "./pages/basket/Basket";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NotFound from "./pages/NotFound";
import UserCourses from "./pages/user/UserCourses";
import OrderState from "./context/order/OrderState";
import Order from "./pages/order/Order";
import Layout from "./components/layout/Layout";
import Checkout from "./pages/checkout/Checkout";
import LessonsFrom from './components/lessons/LessonsForm';
import LessonsForm from "./components/lessons/LessonsForm";


function App() {
    return (
        <AuthState>
            <CoursesState>
                <BasketState>
                    <OrderState>
                        <LessonsState>
                            <Header title="E-Learning"/>
                            <Router>
                                <Layout path="/">
                                    <Home path="/"/>
                                    <Course path="/course/:courseId"/>
                                    <Lesson path="/course/:courseId/lesson/:lessonId"/>
                                    <CreateCourse path="/course/create"/>
                                    <EditCourse path="/course/:courseId/edit"/>
                                    <LessonsForm path="/course/:courseId/lesson/create"/>
                                    <LessonsForm path="/course/:courseId/lesson/:lessonId/edit"/>
                                    <Login path="/login"/>
                                    <Register path="/register"/>
                                    <Basket path="/basket"/>
                                    <Checkout path="/checkout"/>
                                    <UserCourses path="/user/my-courses"/>
                                    <Dashboard path="/dashboard"/>
                                    <Order path="/order"/>
                                    <NotFound path="*"/>
                                </Layout>
                            </Router>
                            <Footer title="Stantech"/>
                        </LessonsState>
                    </OrderState>
                </BasketState>
            </CoursesState>
        </AuthState>
    );
}

export default App;
