import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import React, {useContext, useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import {Link} from "@reach/router";
import AuthContext from "../../context/auth/authContext";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CoursesContext from "../../context/courses/coursesContext";
import BasketContext from "../../context/basket/basketContext";

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

    const authContext = useContext(AuthContext);
    const {isAuthenticated, isAdmin} = authContext;

    const coursesContext = useContext(CoursesContext);
    const {deleteCourse} = coursesContext;

    const basketContext = useContext(BasketContext);
    const {addItemToBasket} = basketContext;

    useEffect(() => {
        // eslint-disable-next-line
    }, [isAuthenticated, isAdmin]);

    return (
        <Grid item xs={12} md={4} className={classes.courseItem}>
            <Card>
                <CardActionArea className={classes.card}>
                    <Link to={`/course/${id}`}
                          style={{textDecoration: 'none'}}
                    >
                        <CardMedia
                            className={classes.cardMedia}
                            component="img"
                            alt={`${title}-image`}
                            title={title}
                            src={imageUrl}
                        />
                        <article className={classes.cardDetails}>
                            <Typography component="h2" variant="h5">
                                {title} id: {id}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {price} $
                            </Typography>
                        </article>
                    </Link>
                </CardActionArea>
                {
                    props.showAddToCartButton &&
                    <CardActions>
                        <Button onClick={() => addItemToBasket(props.course)}
                                color="secondary"
                                variant="contained">
                            Add To Cart
                        </Button>
                    </CardActions>
                }

                {
                    isAdmin && isAuthenticated &&
                    <CardActions>
                        <Link to={`/course/${id}/edit`}
                              style={{textDecoration: 'none'}}
                        >
                            <Button color="primary" variant="contained">
                                Edit
                            </Button>
                        </Link>
                        <Button color="secondary"
                                onClick={() => deleteCourse(id)}
                                variant="contained">
                            Delete
                        </Button>
                        <Link to={`/course/${id}/lesson/create`}
                              style={{textDecoration: 'none'}}
                        >
                            <Button color="primary" variant="contained">
                                Create New Lesson
                            </Button>
                        </Link>
                    </CardActions>
                }
            </Card>
        </Grid>
    )
}

