import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";
import CourseItem from "./CourseItem";
import Grid from "@material-ui/core/Grid";
import LessonItem from "../lessons/LessonItem";
import Typography from "@material-ui/core/Typography";
import {Container} from "@material-ui/core";

class Course extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            course: [],
            lessons: []
        };

    }

    componentDidMount() {
        axios
            .get(`https://localhost:44367/api/courses/${this.props.match.params.id}`)
            .then((response) => {
                this.setCourse(response.data);
            })
            .catch((e) => {
                console.error('error', e);
            })
    }

    setCourse(data) {
        this.setState({
            course: {
                id: data.id,
                description: data.description,
                price: data.price,
                title: data.title
            },
            lessons: data.lessons
        })
    }


    render() {
        return (
            <Container>
                <Typography variant="h5" component="h2">
                    {this.state.course.title}
                </Typography>
                <Grid container spacing={1}>
                    {
                        this.state.lessons.map((lesson) =>
                            <LessonItem key={lesson.id}
                                        lesson={lesson}/>
                        )
                    }
                </Grid>
            </Container>

        )

    }


}


export default Course;
