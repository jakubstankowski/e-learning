import axios from "axios";


class Lesson extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lesson: [],
        }
    }

    componentDidMount() {
        axios
            .get(`https://localhost:44367/api/lesson/${this.props.match.params.id}`)
            .then((response) => {
                console.log('response: ', response.data);
            })
            .catch((e) => {
                console.error('error', e);
            })
    }


}

export default Lesson;
