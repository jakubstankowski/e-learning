import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Container} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    pos: {
        marginBottom: 12,
    },
});


function CourseItem(props) {
    const classes = useStyles();
    const {title, description, price} = props.course;

    return (
        <Container>
            <Grid item xs={4} spacing={3}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {price} $
                        </Typography>
                        <Typography variant="body2" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Container>
    )
}

export default CourseItem;
