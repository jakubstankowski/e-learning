import React, {Component} from "react";
import PropTypes from "prop-types";


class Lesson extends Component {
    componentDidMount() {
        this.props.getLesson(this.props.match.params.lessonId);

        alert('lesson id: ' +  this.props.match.params.lessonId);
    }

    static propTypes = {
        lesson: PropTypes.object.isRequired,
        getLesson: PropTypes.func.isRequired
    };

    render() {
        const {title, id} = this.props.lesson;

        return (
            <article>
                lesson title: {title} ID: {id}
            </article>
        )
    }


}

export default Lesson;
