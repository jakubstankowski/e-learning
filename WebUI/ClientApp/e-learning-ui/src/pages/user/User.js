import Grid from "@material-ui/core/Grid";
import React, {useContext, useEffect} from "react";
import {Typography} from "@material-ui/core";
import CourseItem from "../../components/courses/CourseItem";
import CoursesContext from "../../context/courses/coursesContext";
import AuthContext from "../../context/auth/authContext";

export default function User() {
    const coursesContext = useContext(CoursesContext);
    const {getUserCourses, courses} = coursesContext;

    const authContext = useContext(AuthContext);
    const {isAuthenticated} = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            getUserCourses();
        }
    }, [isAuthenticated]);

    return (
        <section>
            <Typography variant="h5" component="h2">
                Welcome to user courses!
            </Typography>
            <Grid container spacing={4}>
                {
                    courses.map((course) =>
                        <CourseItem
                            course={course}
                            key={course.id}/>
                    )
                }
            </Grid>
        </section>
    )
}
