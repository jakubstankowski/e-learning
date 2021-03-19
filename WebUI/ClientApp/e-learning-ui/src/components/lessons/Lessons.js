import Typography from "@material-ui/core/Typography";
import React, {Fragment} from "react";
import Grid from "@material-ui/core/Grid";
import LessonItem from "./LessonItem";
import {Container} from "@material-ui/core";
import {Link} from "react-router-dom";

function Lessons({lessons}) {
    return (
        <div>

            <Typography variant="h5" component="h2">
                Lessons:
            </Typography>
            <Container>
                <Grid container spacing={1}>
                    {
                        lessons.map((lesson, i) =>
                            <Link to={`/course/1/lesson/${lesson.id}`} style={{textDecoration: 'none'}} key={i}>
                                <LessonItem key={i}
                                            lesson={lesson}/>
                            </Link>
                        )
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default Lessons;
