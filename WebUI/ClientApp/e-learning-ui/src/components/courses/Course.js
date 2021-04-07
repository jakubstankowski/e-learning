import React, {Fragment, Component} from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import Lessons from "../lessons/Lessons";
import {Link, Route, Switch} from "react-router-dom";
import Lesson from "../lessons/Lesson";
import Button from "@material-ui/core/Button";

class Course extends Component {
    componentDidMount() {
        this.props.getCourse(this.props.match.params.courseId);
    }

    static propTypes = {
        course: PropTypes.object.isRequired,
        lessons: PropTypes.array.isRequired,
        getCourse: PropTypes.func.isRequired
    };

    render() {
        const {title, id} = this.props.course;

        return (
            <Fragment>
                <Typography variant="h5" component="h2">
                    Course <strong>{title}</strong> ID: <strong>{id}</strong>
                </Typography>
                <Link to={`/admin/course/${id}/edit`}
                      style={{textDecoration: 'none'}}
                >
                    <Button variant="contained"
                            style={{marginTop: '1rem', width: '100%'}}
                            color="primary"
                    >
                        Edit Course
                    </Button>
                </Link>
                <Switch>
                    <Route
                        path="/course/:courseId"
                        exact render={props => (
                        <Lessons
                            {...props}
                            deleteLesson={this.props.deleteLesson}
                            lessons={this.props.lessons}/>
                    )}/>
                    <Route
                        path="/course/:courseId/lesson/:lessonId"
                        render={props => (
                            <Lesson
                                {...props}
                                getLesson={this.props.getLesson}
                                lesson={this.props.lesson}
                            />
                        )}/>
                </Switch>
            </Fragment>
        )

    }


}


export default Course;
