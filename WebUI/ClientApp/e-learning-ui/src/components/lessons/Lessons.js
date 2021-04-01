import Typography from "@material-ui/core/Typography";
import React from "react";
import LessonItem from "./LessonItem";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';


class Lessons extends React.Component {
    static propTypes = {
        lessons: PropTypes.array.isRequired
    };

    componentDidMount() {
        console.log('props: ', this.props);
    }

    render() {
        return (
            <article>
                <Typography variant="h5" component="h2">
                    Lessons:
                </Typography>
                <ul>
                    {
                        this.props.lessons.map((lesson, i) =>
                            <Link to={`/course/${this.props.match.params.courseId}/lesson/${lesson.id}`} style={{textDecoration: 'none'}} key={i}>
                                <LessonItem key={i}
                                            lesson={lesson}/>
                            </Link>
                        )
                    }
                </ul>
            </article>
        )

    }

}


/*
function Lessons({lessons}) {
    return (
        <article>
            <Typography variant="h5" component="h2">
                Lessons:
            </Typography>
            <ul>
                {
                    lessons.map((lesson, i) =>
                        <Link to={`/course/1/lesson/${lesson.id}`} style={{textDecoration: 'none'}} key={i}>
                            <LessonItem key={i}
                                        lesson={lesson}/>
                        </Link>
                    )
                }
            </ul>
        </article>
    )
}
*/

export default Lessons;
