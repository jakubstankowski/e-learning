import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import {Fragment} from "react";
import Lessons from "../lessons/Lessons";

class EditCourse extends React.Component {
    componentDidMount() {
        this.props.getCourse(this.props.match.params.courseId);
    }

    static propTypes = {
        course: PropTypes.object.isRequired,
        lessons: PropTypes.array.isRequired,
        getCourse: PropTypes.func.isRequired,
        updateCourse: PropTypes.func.isRequired,
        deleteLesson: PropTypes.func.isRequired
    };

    render() {
        const {title, id} = this.props.course;

        return (
            <section>
                <Typography variant="h5" component="h2">
                    Edit Course <strong>{title}</strong> ID: <strong>{id}</strong>
                </Typography>
                <Lessons
                    {...this.props}
                    deleteLesson={this.props.deleteLesson}
                    lessons={this.props.lessons}/>
            </section>
        )
    }

}


export default EditCourse;
