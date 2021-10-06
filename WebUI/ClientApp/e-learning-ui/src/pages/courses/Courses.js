import * as React from "react";
import Grid from "@material-ui/core/Grid";
import CourseItem from "./CourseItem";
import {useContext, useEffect} from "react";
import CoursesContext from '../../context/courses/coursesContext';
import Spinner from "../../components/layout/Spinner";
import AuthContext from "../../context/auth/authContext";


export default function Courses() {
    const coursesContext = useContext(CoursesContext);

    const {getCourses, courses, loading} = coursesContext;

    const authContext = useContext(AuthContext);

    const {isAuthenticated} = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            getCourses();
        }

    }, [isAuthenticated]);

    if (loading) return <Spinner/>

    return (
        <Grid container spacing={4}>
            {
                courses.map((course) =>
                    <CourseItem
                        course={course}
                        key={course.id}/>
                )
            }
        </Grid>
    )
}

