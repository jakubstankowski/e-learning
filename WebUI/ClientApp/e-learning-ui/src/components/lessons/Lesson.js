import React, {Component} from "react";
import PropTypes from "prop-types";


class Lesson extends Component {
    componentDidMount() {
        this.props.getLesson(this.props.match.params.lessonId);
    }

    static propTypes = {
        lesson: PropTypes.object.isRequired,
        getLesson: PropTypes.func.isRequired
    };

    render() {
        const {title} = this.props.lesson;

        return (
            <article>
                lesson title: {title}
            </article>
        )
    }


}

export default Lesson;
