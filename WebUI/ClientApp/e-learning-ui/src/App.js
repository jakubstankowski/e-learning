import './App.css';
import Header from "./components/layout/Header";
import React from "react";
import Container from "@material-ui/core/Container";
import Courses from "./components/courses/Courses";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Course from "./components/courses/Course";
import axios from "axios";
import Admin from "./components/admin/Admin";
import CreateCourse from "./components/courses/CreateCourse";
import CreateLesson from "./components/lessons/CreateLesson";
import EditCourse from "./components/courses/EditCourse";
import EditLesson from "./components/lessons/EditLesson";


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

    postCourse = async (course) => {
        const res = await axios.post('https://localhost:44367/api/courses', course)

        this.setState({
            courses: res.data
        });
    }

    postLesson = async (lesson) => {
        const res = await axios.post(`https://localhost:44367/api/lesson`, lesson);

        this.setState({
            lessons: res.data
        });
    }

    deleteCourse = async (id) => {
        const res = await axios.delete(`https://localhost:44367/api/courses/${id}`)

        this.setState({
            courses: res.data
        });
    }

    deleteLesson = async (id) => {
        const res = await axios.delete(`https://localhost:44367/api/lesson/${id}`)

        this.setState({
            lessons: res.data
        });
    }


    updateCourse = async (id, course) => {
        const res = await axios.put(`https://localhost:44367/api/courses/${id}`, course)
        this.setState({
            courses: res.data
        });
    }

    updateLesson = async (id, lesson) => {
        console.log('id: ', id);
        console.log('lesson: ', lesson);
        /*const res = await axios.put(`https://localhost:44367/api/courses/${id}`, course)
        this.setState({
            courses: res.data
        });*/
    }


    render() {
        const {courses, course, lessons, lesson} = this.state;

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
                                deleteCourse={this.deleteCourse}
                            />
                        )}/>
                        <Route
                            path="/course/:courseId"
                            render={props => (
                                <Course
                                    {...props}
                                    getCourse={this.getCourse}
                                    getLesson={this.getLesson}
                                    deleteLesson={this.deleteLesson}
                                    course={course}
                                    lessons={lessons}
                                    lesson={lesson}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/admin"
                            component={Admin}
                        />
                        <Route
                            exact
                            path="/admin/course/create"
                            render={props => (
                                <CreateCourse
                                    {...props}
                                    postCourse={this.postCourse}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/admin/course/:courseId/edit"
                            render={props => (
                                <EditCourse
                                    {...props}
                                    getCourse={this.getCourse}
                                    deleteLesson={this.deleteLesson}
                                    updateCourse={this.updateCourse}
                                    course={course}
                                    lessons={lessons}
                                    lesson={lesson}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/admin/lesson/:lessonId/edit"
                            render={props => (
                                <EditLesson
                                    {...props}
                                    getLesson={this.getLesson}
                                    deleteLesson={this.deleteLesson}
                                    updateLesson={this.updateLesson}
                                    lesson={lesson}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/admin/lesson/create"
                            render={props => (
                                <CreateLesson
                                    {...props}
                                    postLesson={this.postLesson}
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
