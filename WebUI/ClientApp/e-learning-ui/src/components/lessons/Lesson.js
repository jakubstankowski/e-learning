import React, {Fragment, Component} from "react";


class Lesson extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                lesson id: {this.props.match.params.lessonId}
            </div>
        )
    }


}

export default Lesson;
