import * as React from "react";
import Grid from "@material-ui/core/Grid";
import CourseItem from "./CourseItem";
import {useContext, useEffect} from "react";
import CoursesContext from '../../context/courses/coursesContext';
import Spinner from "../spinner/Spinner";
import {Typography} from "@material-ui/core";


export default function Courses(props) {
    const coursesContext = useContext(CoursesContext);

    const {showAddToCartButton} = props;

    const {loading, courses, error} = coursesContext;


    useEffect(() => {
        // eslint-disable-next-line
    }, []);


    if (loading) return <Spinner size={120}/>

    if (error) return <Typography variant="h4" className="all-center">
        {error}
    </Typography>

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

