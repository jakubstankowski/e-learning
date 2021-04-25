import * as React from "react";
import Grid from "@material-ui/core/Grid";
import CourseItem from "./CourseItem";
import {useContext, useEffect} from "react";
import CoursesContext from '../../context/courses/coursesContext';
import Spinner from "../layout/Spinner";

export default function Courses() {
    const coursesContext = useContext(CoursesContext);

    const {getCourses, deleteCourse, courses, loading} = coursesContext;

    useEffect(() => {
        getCourses();
        // eslint-disable-next-line
    }, [])

    if (loading) return <Spinner/>

    return (
        <Grid container spacing={4}>
            {
                courses.map((course) =>
                        <CourseItem course={course} key={course.id}/>
                    /*<article key={course.id}>
                        <Link to={`/course/${course.id}`}
                              style={{textDecoration: 'none'}}
                        >
                            <CourseItem key={i}
                                        course={course}/>
                        </Link>
                        <Button variant="contained"
                                style={{marginTop: '1rem', width: '100%'}}
                                color="primary"
                                onClick={() => deleteCourse(course.id)}
                        >
                            Delete
                        </Button>
                        <Link to={`/admin/course/${course.id}/edit`}
                              style={{textDecoration: 'none'}}
                        >
                            <Button variant="contained"
                                    style={{marginTop: '1rem', width: '100%'}}
                                    color="primary"
                            >
                                Edit
                            </Button>
                        </Link>
                    </article>*/
                )
            }
        </Grid>
    )
}

