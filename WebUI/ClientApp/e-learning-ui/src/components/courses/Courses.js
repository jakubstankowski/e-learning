import * as React from "react";
import Grid from "@material-ui/core/Grid";
import CourseItem from "./CourseItem";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {useContext, useEffect} from "react";
import CoursesContext from '../../context/courses/coursesContext';
import Spinner from "../layout/Spinner";

function Courses() {
    const coursesContext = useContext(CoursesContext);

    const {getCourses, deleteCourse, courses, loading} = coursesContext;

    useEffect(() => {
        getCourses();
        // eslint-disable-next-line
    }, [])

    if (loading) return <Spinner/>

    return (
        <section>
            <Typography variant="h5" component="h2">
                Courses:
            </Typography>
            <Grid container spacing={2}>

                {
                    courses.map((course, i) =>
                        <article key={i}>
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
                        </article>
                    )
                }
            </Grid>
        </section>
    )
}

export default Courses;
