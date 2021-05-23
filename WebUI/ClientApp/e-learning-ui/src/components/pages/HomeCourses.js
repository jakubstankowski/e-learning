import {Container} from "@material-ui/core";
import React, {useContext, useEffect} from "react";
import CoursesContext from "../../context/courses/coursesContext";
import Spinner from "../layout/Spinner";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CourseItem from "../courses/CourseItem";

export default function HomeCourses() {
    const coursesContext = useContext(CoursesContext);
    const {getHomeCourses, courses, loading} = coursesContext;

    useEffect(() => {
        getHomeCourses();
    }, []);

    if (loading) return <Spinner/>

    return (
        <Container>
            <Typography>
                Welcome to home courses!
            </Typography>
            <Grid container spacing={4}>
                {
                    courses.map((course) =>
                        <CourseItem
                            showAddToCartButton={true}
                            course={course}
                            key={course.id}/>
                    )
                }

            </Grid>
        </Container>
    )

}
