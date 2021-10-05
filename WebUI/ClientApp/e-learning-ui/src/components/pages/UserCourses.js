import React, {useContext, useEffect} from "react";
import Spinner from "../layout/Spinner";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CourseItem from "../courses/CourseItem";
import Grid from "@material-ui/core/Grid";
import CoursesContext from "../../context/courses/coursesContext";

export default function UserCourses() {
    const coursesContext = useContext(CoursesContext);
    const {getUserCourses, courses, loading} = coursesContext;

    useEffect(() => {
        getUserCourses();
        // eslint-disable-next-line
    }, []);

    if (loading) return <Spinner/>

    return (
        <Container>
            <Typography>
                Welcome to user courses!
            </Typography>
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
