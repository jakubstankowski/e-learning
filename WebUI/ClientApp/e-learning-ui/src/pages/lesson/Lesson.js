import React, {useContext, useEffect} from "react";
import LessonsContext from "../../context/lessons/lessonsContext";
import Spinner from "../../components/spinner/Spinner";
import {Link, useParams} from "@reach/router";
import {makeStyles} from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import LessonVideo from "../../components/lessons/LessonVideo";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import AuthContext from "../../context/auth/authContext";
import Button from "@material-ui/core/Button";


export default function Lesson() {
    const lessonsContext = useContext(LessonsContext);
    const {getLesson, lesson, loading, deleteLesson} = lessonsContext;

    const authContext = useContext(AuthContext);
    const {isAuthenticated, isAdmin} = authContext;

    const {lessonId, courseId} = useParams();

    useEffect(() => {
        if (isAuthenticated) {
            getLesson(lessonId);
        }
        // eslint-disable-next-line
    }, [lessonId, isAuthenticated])

    const useStyles = makeStyles((theme) => ({
        paper: {
            padding: theme.spacing(2),
            marginTop: '1rem',
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        lesson: {
            marginTop: '1rem'
        }
    }));

    const classes = useStyles();

    if (loading) return <Spinner/>

    const {id, title, description, videoUrl, nextLessonId, previousLessonId} = lesson;

    return (
        <Container className={classes.lesson}>
            <Typography component="h4" variant="h3">
                {title}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper className={classes.paper}>
                        <LessonVideo videoUrl={videoUrl}/>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid container>
                        <Grid item lg={12}>
                            <Paper className={classes.paper}>
                                {description}
                            </Paper>
                        </Grid>
                        <Grid item lg={12}>
                            <Link to={`/course/${courseId}`}>
                                <Paper className={classes.paper}>
                                    <strong>
                                        Back to Lessons list
                                    </strong>
                                </Paper>
                            </Link>
                        </Grid>
                        {
                            nextLessonId &&
                            <Grid item lg={12}>
                                <Link to={`/course/${courseId}/lesson/${nextLessonId}`}>
                                    <Paper className={classes.paper}>
                                        <strong>
                                            Next Lesson
                                        </strong>
                                    </Paper>
                                </Link>
                            </Grid>
                        }

                        {
                            previousLessonId &&
                            <Grid item lg={12}>
                                <Link to={`/course/${courseId}/lesson/${previousLessonId}`}>
                                    <Paper className={classes.paper}>
                                        <strong>
                                            Previous Lesson
                                        </strong>
                                    </Paper>
                                </Link>
                            </Grid>
                        }
                        {
                            isAdmin &&
                            <article>
                                <Link to={`/course/${courseId}/lesson/${id}/edit`}
                                      style={{textDecoration: 'none'}}
                                >
                                    <Button color="primary" variant="contained">
                                        Edit
                                    </Button>
                                </Link>
                                <Button color="secondary"
                                        onClick={() => deleteLesson(id)}
                                        variant="contained">
                                    Delete
                                </Button>
                            </article>
                        }
                    </Grid>

                </Grid>
            </Grid>


        </Container>
    )
}
