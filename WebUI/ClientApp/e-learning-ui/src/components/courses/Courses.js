import * as React from "react";

class Courses extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: [
                {
                    'id': 0
                }
            ]
        }

    }

    render() {
        return (
            <pre>
               {this.state.courses}
           </pre>
        )

    }
}


export default Courses;
