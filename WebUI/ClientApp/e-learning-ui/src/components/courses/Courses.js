import * as React from "react";
import axios from "axios";

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
                console.log('res: ', res);
            })
            .catch((error) => console.error('error:', error));
    }

    render() {
        return (
            <pre>

           </pre>
        )

    }
}


export default Courses;
