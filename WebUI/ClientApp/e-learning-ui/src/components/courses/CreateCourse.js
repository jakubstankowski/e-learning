import * as React from "react";


class CreateCourse extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            price: null
        }

        this.handleChange = this.handleChange.bind(this);
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
                    Create Course
                </h3>
            </article>
        )
    }

}

export default CreateCourse;
