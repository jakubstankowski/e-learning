import Typography from "@material-ui/core/Typography";
import React from "react";
import LessonItem from "./LessonItem";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {Button} from "@material-ui/core";


class Lessons extends React.Component {
    static propTypes = {
        lessons: PropTypes.array.isRequired,
        deleteLesson: PropTypes.func.isRequired
    };

    render() {
        return (
            <section>
                <Typography variant="h5" component="h2">
                    Lessons:
                </Typography>
                <ul>
                    {
                        this.props.lessons.map((lesson, i) =>
                            <article key={i}>
                                <Link to={`/course/${this.props.match.params.courseId}/lesson/${lesson.id}`}>
                                    <LessonItem key={i}
                                                lesson={lesson}/>
                                </Link>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => this.props.deleteLesson(lesson.id)}>
                                    Delete
                                </Button>
                                <Link to={`/admin/lesson/${lesson.id}/edit`}>
                                    <Button
                                        variant="contained"
                                        color="primary">
                                        Edit
                                    </Button>
                                </Link>
                            </article>
                        )
                    }
                </ul>
            </section>
        )
    }

}

export default Lessons;
