import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import {Link} from "@reach/router";


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

export default function CourseItem(props) {
    const classes = useStyles();
    const {id, title, price, imageUrl} = props.course;

    return (
        <Grid item xs={12} md={4} className={classes.courseItem}>

            <CardActionArea>
                <Link to={`/course/${id}`}
                      style={{textDecoration: 'none'}}
                >
                    <CardMedia
                        className={classes.cardMedia}
                        image={imageUrl}
                        title="net core"
                    />
                    <Card className={classes.card}>
                        <article className={classes.cardDetails}>
                            <CardContent>
                                <Typography component="h2" variant="h5">
                                    {title}
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    {price} $
                                </Typography>
                            </CardContent>
                        </article>
                    </Card>
                </Link>
            </CardActionArea>
        </Grid>
    )
}

