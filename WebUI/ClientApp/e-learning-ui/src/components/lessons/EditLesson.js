import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import {Fragment} from "react";
import Lessons from "../lessons/Lessons";
import {Field, Form} from "react-final-form";
import {Button, Grid, Paper} from "@material-ui/core";
import {TextField} from "final-form-material-ui";

class EditLesson extends React.Component {
    componentDidMount() {
        this.props.getLesson(this.props.match.params.lessonId);
    }

    static propTypes = {
        lesson: PropTypes.object.isRequired,
        getLesson: PropTypes.func.isRequired,
        updateLesson: PropTypes.func.isRequired,
    };

    render() {
        const {title, description, videoUrl, courseId} = this.props.lesson;
        return (
            <section className='form-container'>
                {title} {description} {videoUrl} {courseId}
            </section>
        )
    }

}


export default EditLesson;
