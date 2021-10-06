import Container from "@material-ui/core/Container";
import React, {useContext, useEffect} from "react";
import CoursesContext from "../context/courses/coursesContext";
import AuthContext from "../context/auth/authContext";
import Spinner from "../components/layout/Spinner";
import CourseItem from "../components/courses/CourseItem";
import Grid from "@material-ui/core/Grid";

export default function DashboardCourses() {

    const coursesContext = useContext(CoursesContext);

    const {getCourses, courses, loading} = coursesContext;

    const authContext = useContext(AuthContext);

    const {isAuthenticated} = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            getCourses();
        }
        // eslint-disable-next-line
    }, [isAuthenticated]);

    if (loading) return <Spinner/>

    return (
        <Container>
            Dashboard Courses
            <Grid container spacing={4}>
                {
                    courses.map((course) =>
                        <CourseItem
                            showAddToCartButton={false}
                            course={course}
                            key={course.id}/>
                    )
                }
            </Grid>
        </Container>
    )

}
