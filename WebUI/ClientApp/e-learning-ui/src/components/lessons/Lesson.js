import React, {Component} from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";


class Lesson extends Component {
    componentDidMount() {
        this.props.getLesson(this.props.match.params.lessonId);
    }

    static propTypes = {
        lesson: PropTypes.object.isRequired,
        getLesson: PropTypes.func.isRequired
    };

    render() {
        const {title, id, description, videoUrl} = this.props.lesson;

        return (
            <section>
                <Typography variant="h5" component="h2">
                    Lesson <strong>{title}</strong>
                    ID: <strong>{id}</strong>,
                    Description: <strong>{description}</strong>,
                    videoUrl: <strong>{videoUrl}</strong>
                </Typography>
                <Link to={`/admin/lesson/${id}/edit`}>
                    <Button
                        variant="contained"
                        color="primary">
                        Edit Lesson
                    </Button>
                </Link>
            </section>
        )
    }


}

export default Lesson;
