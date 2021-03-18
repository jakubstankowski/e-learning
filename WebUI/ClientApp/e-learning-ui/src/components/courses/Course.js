import axios from "axios";
import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import CourseItem from "./CourseItem";
import Grid from "@material-ui/core/Grid";
import LessonItem from "../lessons/LessonItem";
import Typography from "@material-ui/core/Typography";
import {Container} from "@material-ui/core";

class Course extends React.Component {
    componentDidMount() {
       this.props.getCourse(this.props.match.params.id);
    }


    render() {
        const {course} = this.props.course;
        return (
            <Fragment>
                title: {course.title}
               {/* <Typography variant="h5" component="h2">
                    {this.state.course.title}
                </Typography>
                <Grid container spacing={1}>
                    {
                        this.state.lessons.map((lesson) =>
                            <LessonItem key={lesson.id}
                                        lesson={lesson}/>
                        )
                    }
                </Grid>*/}
            </Fragment>

        )

    }


}


export default Course;
