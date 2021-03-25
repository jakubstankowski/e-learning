import * as React from "react";


class CreateLesson extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            videoUrl: "",
            courseId: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('this state: ', this.state);
    }


    render() {
        return (
            <article className="text-center">
                <h3>
                    Create Lesson
                </h3>
            </article>
        )
    }

}

export default CreateLesson;
