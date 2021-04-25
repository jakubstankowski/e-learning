import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Hidden from "@material-ui/core/Hidden";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        overflow: 'auto',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    courseItem: {
        padding: theme.spacing(3),
    }
}));

export default function CourseItem(props) {
    const classes = useStyles();
    const {id, title, description, price} = props.course;

    return (
        <Grid item xs={12} md={4} className={classes.courseItem}>
            <CardActionArea component="a" href="#">
                <Card className={classes.card}>
                    <article className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {title} id: {id}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {description}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {price} $
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                Continue reading...
                            </Typography>
                        </CardContent>
                    </article>
                    <Hidden xsDown>
                        <CardMedia className={classes.cardMedia} image='https://jakzostacprogramista.net/wp-content/uploads/2019/12/netcorelogo-1360x765.png' title="net core" />
                    </Hidden>
                </Card>
            </CardActionArea>
        </Grid>
    )
}

