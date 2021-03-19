import React, {Fragment, Component} from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import Lessons from "../lessons/Lessons";
import {Route, Switch} from "react-router-dom";
import Courses from "./Courses";
import Lesson from "../lessons/Lesson";

class Course extends Component {
    componentDidMount() {
        this.props.getCourse(this.props.match.params.id);
    }

    static propTypes = {
        course: PropTypes.object.isRequired,
        lessons: PropTypes.array.isRequired,
        getCourse: PropTypes.func.isRequired
    };

    render() {
        const {id, title} = this.props.course;
        return (
            <Fragment>
                <Typography variant="h5" component="h2">
                    Course {title}, id: {id}
                </Typography>
                <Switch>
                    <Route
                        path="/course/:id"
                        exact render={props => (
                        <Lessons
                            lessons={this.props.lessons}/>
                    )}/>
                    <Route
                        exact
                        path="/course/:id/lesson/:id"
                        component={Lesson}
                    />
                </Switch>
            </Fragment>
        )

    }


}


export default Course;
