import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import {Link} from "@reach/router";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

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
    const {title, id, courseId} = props.lesson;

    return (
        <Grid item xs={12} md={4} className={classes.courseItem}>
            <CardActionArea>
                <Link to={`/course/${courseId}/lesson/${id}`}
                      style={{textDecoration: 'none'}}
                >
                    <Card className={classes.card}>
                        <article className={classes.cardDetails}>
                            <CardContent>
                                <Typography component="h2" variant="h5">
                                    {title}
                                </Typography>
                            </CardContent>
                        </article>
                    </Card>
                </Link>
            </CardActionArea>
        </Grid>
    )
}
