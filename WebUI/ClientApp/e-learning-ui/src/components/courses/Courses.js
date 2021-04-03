import * as React from "react";
import Grid from "@material-ui/core/Grid";
import CourseItem from "./CourseItem";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';


class Courses extends React.Component {
    static propTypes = {
        courses: PropTypes.array.isRequired,
        deleteCourse: PropTypes.func.isRequired
    };


    handleDeleteCourse = (id) => {
        console.log('id:', id);
    };


    render() {
        return (
            <article>
                <h3>Courses:</h3>
                <Grid container spacing={2}>

                    {
                        this.props.courses.map((course, i) =>
                            <Link to={`/course/${course.id}`}
                                  style={{textDecoration: 'none'}}
                                  key={i}>
                                <CourseItem key={i}
                                            course={course}/>
                                <Button variant="contained"
                                        color="primary"
                                        onClick={this.handleDeleteCourse(course.id)}
                                >
                                    Delete
                                </Button>
                            </Link>
                        )
                    }
                </Grid>
            </article>
        )
    }
}


export default Courses;
