import {Container} from "@material-ui/core";
import React, {useContext, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import {Link} from "@reach/router";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CourseItem from "../components/courses/CourseItem";
import CoursesContext from "../context/courses/coursesContext";
import AuthContext from "../context/auth/authContext";


export default function Dashboard() {
    const coursesContext = useContext(CoursesContext);
    const {getAdminCourses, courses} = coursesContext;

    const authContext = useContext(AuthContext);
    const {isAuthenticated} = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            getAdminCourses();
        }
    }, [isAuthenticated]);

    return (
        <Container>
            <Typography variant="h5" component="h2">
                Admin Dashboard
            </Typography>
            <Link to={`/course/create`}
                  style={{textDecoration: 'none', marginTop: '1rem'}}
            >
                <Button color="primary" variant="contained">
                    Create New Course
                </Button>
            </Link>
            <Grid container spacing={4}>
                {
                    courses.map((course) =>
                        <CourseItem
                            course={course}
                            key={course.id}/>
                    )
                }
            </Grid>
        </Container>
    )
}
