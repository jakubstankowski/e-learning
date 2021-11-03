import React, {useContext, useEffect} from "react";
import {Typography} from "@material-ui/core";
import CoursesContext from "../../context/courses/coursesContext";
import AuthContext from "../../context/auth/authContext";
import Courses from "../../components/courses/Courses";

export default function UserCourses() {
    const coursesContext = useContext(CoursesContext);
    const {getUserCourses, courses, resetCourses} = coursesContext;

    const authContext = useContext(AuthContext);
    const {isAuthenticated} = authContext;

    useEffect(() => {
        resetCourses();

        if (isAuthenticated) {
            getUserCourses();
        }
    }, [isAuthenticated]);

    return (
        <section>
            <Typography variant="h5" component="h2">
                Welcome to user courses!
            </Typography>
            <Courses/>
        </section>
    )
}
