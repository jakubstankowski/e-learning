import Typography from "@material-ui/core/Typography";
import React, {Fragment} from "react";
import Grid from "@material-ui/core/Grid";
import LessonItem from "./LessonItem";
import {Container} from "@material-ui/core";

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
                            <LessonItem key={i}
                                        lesson={lesson}/>
                        )
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default Lessons;
