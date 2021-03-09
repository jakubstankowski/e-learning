import * as React from "react";
import axios from "axios";
import Course from "./Course";

class Courses extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: []
        }

    }

    componentDidMount() {
        axios
            .get('https://localhost:44367/api/courses')
            .then((res) => {
                this.setCourses(res.data);
            })
            .catch((error) => console.error('error:', error));
    }

    setCourses(data) {
        this.setState({
            courses: data
        })
    }

    render() {
        return (
            <div>
                <h3>Courses:</h3>
                {
                    this.state.courses.map((course) =>
                        <Course
                            key={course.id}
                            course={course}/>
                    )
                }
            </div>
        )

    }
}


export default Courses;
