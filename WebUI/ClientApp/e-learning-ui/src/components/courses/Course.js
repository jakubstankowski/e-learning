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
                console.log('response: ', response);
                /*this.setState({
                    holidayOffer: {
                        ...response.data
                    }
                });*/
            })
            .catch((e) => {
                console.error('error', e);
            })
    }

    render() {
        return (
            <div>
                course !
            </div>
        )

    }


}


export default Course;
