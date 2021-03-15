import axios from "axios";
import React from "react";

class Course extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            course: []
        };

    }

    componentDidMount() {
        axios
            .get(`https://localhost:44367/api/courses/${this.props.match.params.id}`)
            .then((response) => {
                this.setCourse(response.data);

                console.log('course: ', this.state.course.lessons)


            })
            .catch((e) => {
                console.error('error', e);
            })
    }

    setCourse(data) {
        this.setState({
            course: data
        })
    }


    render() {
        return (
            <div>
                title: {this.state.course.title}
            </div>

        )

    }


}


export default Course;
