import axios from "axios";
import React, {Fragment, Component} from "react";
import {Link} from "react-router-dom";
import CourseItem from "./CourseItem";
import Grid from "@material-ui/core/Grid";
import LessonItem from "../lessons/LessonItem";
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import {Container} from "@material-ui/core";

class Course extends Component {
    componentDidMount() {
        this.props.getCourse(this.props.match.params.id);
    }

    static propTypes = {
        course: PropTypes.object.isRequired,
        getCourse: PropTypes.func.isRequired
    };

    render() {
        const {title} = this.props.course;
        return (
            <Fragment>
                title: {title}
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
