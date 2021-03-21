import * as React from "react";
import Grid from "@material-ui/core/Grid";
import CourseItem from "./CourseItem";
import {Link} from "react-router-dom";
import {Container} from "@material-ui/core";

function Courses({courses}) {
    return (
        <article>
            <h3>Courses:</h3>
            <Grid container spacing={1}>

                    {
                        courses.map((course, i) =>
                            <Link to={`/course/${course.id}`} style={{textDecoration: 'none'}} key={i}>
                                <CourseItem key={i}
                                            course={course}/>
                            </Link>
                        )
                    }
            </Grid>
        </article>
    )
}


export default Courses;
