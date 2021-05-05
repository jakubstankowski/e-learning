import React, {useContext, useEffect} from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import {Link, useParams} from "@reach/router";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AuthContext from "../../context/auth/authContext";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        overflow: 'auto',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        height: 260,
        padding: theme.spacing(3),
    },
    courseItem: {
        padding: theme.spacing(3),
    }
}));

export default function LessonItem(props) {
    const classes = useStyles();
    const {title, id, deleteLesson} = props.lesson;

    const authContext = useContext(AuthContext);
    const {isAuthenticated} = authContext;

    const {courseId} = useParams();

    useEffect(() => {
        // eslint-disable-next-line
    }, [isAuthenticated]);

    return (
        <Grid item xs={12} md={4} className={classes.courseItem}>
            <Card className={classes.card}>
                <CardActionArea>
                    <Link to={`/course/${courseId}/lesson/${id}`}
                          style={{textDecoration: 'none'}}
                    >
                        <article className={classes.cardDetails}>
                            <CardContent>
                                <Typography component="h2" variant="h5">
                                    {title}
                                </Typography>
                            </CardContent>
                        </article>
                        {
                            isAuthenticated &&
                            <CardActions>
                                <Link to={`/dashboard/course/${courseId}/lesson/${id}/edit`}
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
                            </CardActions>
                        }
                    </Link>
                </CardActionArea>
            </Card>
        </Grid>
    )
}
