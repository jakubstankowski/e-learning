import * as React from "react";
import Grid from "@material-ui/core/Grid";
import CourseItem from "./CourseItem";
import {useContext, useEffect} from "react";
import CoursesContext from '../../context/courses/coursesContext';
import Spinner from "../Spinner";


export default function Courses(props) {
    const coursesContext = useContext(CoursesContext);

    const {showAddToCartButton} = props;

    const {loading, courses} = coursesContext;

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

