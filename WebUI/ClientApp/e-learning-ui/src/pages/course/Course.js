import React, {useContext, useEffect} from "react";
import Lessons from "../../components/lessons/Lessons";
import {Link, useParams} from "@reach/router";
import CoursesContext from "../../context/courses/coursesContext";
import Spinner from "../../components/spinner/Spinner";
import {Container} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import AuthContext from "../../context/auth/authContext";
import Button from "@material-ui/core/Button";

export default function Course() {
    const coursesContext = useContext(CoursesContext);
    const {getCourse, course, loading, deleteCourse, error} = coursesContext;

    const authContext = useContext(AuthContext);
    const {isAdmin} = authContext;

    const {courseId} = useParams();

    useEffect(() => {
        getCourse(courseId);
        // eslint-disable-next-line
    }, []);

    const useStyles = makeStyles((theme) => ({
        course: {
            marginTop: '1rem',
            textFloat: 'center'
        },
        lessons: {
            marginTop: '2rem'
        }
    }));

    const classes = useStyles();

    if (loading) return <Spinner size={120}/>

    const {title, lessons} = course;

    return (
        <Container className={classes.course}>
            <Typography component="h4" variant="h3">
                {title}
            </Typography>
            {
                isAdmin &&
                <article>
                    <Link to={`/course/${courseId}/edit`}
                          style={{textDecoration: 'none'}}
                    >
                        <Button color="primary" variant="contained">
                            Edit
                        </Button>
                    </Link>
                    <Button color="secondary"
                            onClick={() => deleteCourse(courseId)}
                            variant="contained">
                        Delete
                    </Button>
                    <Link to={`/course/${courseId}/lesson/create`}
                          style={{textDecoration: 'none'}}
                    >
                        <Button color="primary" variant="contained">
                            Create New Lesson
                        </Button>
                    </Link>
                </article>
            }
            {
                lessons && lessons.length > 0 &&
                <Container className={classes.lessons}>
                    <Lessons lessons={lessons}/>
                </Container>
            }

        </Container>
    )

}

