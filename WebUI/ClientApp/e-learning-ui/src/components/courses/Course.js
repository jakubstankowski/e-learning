import React, {useContext, useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import Lessons from "../lessons/Lessons";
import {Link, Route, Switch} from "react-router-dom";
import Lesson from "../lessons/Lesson";
import Button from "@material-ui/core/Button";
import CoursesContext from "../../context/courses/coursesContext";
import Spinner from "../layout/Spinner";

function Course({match}) {
    const coursesContext = useContext(CoursesContext);

    const {getCourse, course, loading} = coursesContext;

    useEffect(() => {
        getCourse(match.params.courseId);
    }, []);




    if (loading) return <Spinner/>

    return (
        <section>
            <Typography variant="h5" component="h2">
                Course <strong>{course.title}</strong> ID: <strong>{course.id}</strong>
            </Typography>
            <Link to={`/admin/course/${course.id}/edit`}
                  style={{textDecoration: 'none'}}
            >
                <Button variant="contained"
                        style={{marginTop: '1rem', width: '100%'}}
                        color="primary"
                >
                    Edit Course
                </Button>
            </Link>
            <Switch>
                <Route
                    exact
                    path="/course/:courseId"
                    component={Lessons}/>
                <Route
                    path="/course/:courseId/lesson/:lessonId"
                    component={Lesson}
                />
            </Switch>
        </section>
    )

}

export default Course;
