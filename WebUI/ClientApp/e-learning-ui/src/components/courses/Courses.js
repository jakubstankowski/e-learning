import * as React from "react";
import Grid from "@material-ui/core/Grid";
import CourseItem from "./CourseItem";
import {useContext, useEffect} from "react";
import CoursesContext from '../../context/courses/coursesContext';
import Spinner from "../Spinner";
import AuthContext from "../../context/auth/authContext";


export default function Courses(props) {
    const coursesContext = useContext(CoursesContext);

    const {type, showAddToCartButton} = props;

    const {getAdminCourses, getHomeCourses, getUserCourses, courses, loading} = coursesContext;

    const authContext = useContext(AuthContext);

    const {isAuthenticated} = authContext;

    useEffect(() => {
        switch (type) {
            case 'home':
                getHomeCourses();
                break;
            case 'user':
                getUserCourses();
                break;
            case 'admin':
                if (isAuthenticated) {
                    getAdminCourses();
                }
                break;
            default:
            // code block
        }

    }, [isAuthenticated]);

    if (loading) return <Spinner/>

    return (
        <Grid container spacing={4}>
            {
                courses.map((course) =>
                    <CourseItem
                        showAddToCartButton={showAddToCartButton}
                        course={course}
                        key={course.id}/>
                )
            }
        </Grid>
    )
}

