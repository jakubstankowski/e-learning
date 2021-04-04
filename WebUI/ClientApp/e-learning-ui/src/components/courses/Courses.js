import * as React from "react";
import Grid from "@material-ui/core/Grid";
import CourseItem from "./CourseItem";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";


class Courses extends React.Component {
    static propTypes = {
        courses: PropTypes.array.isRequired,
        deleteCourse: PropTypes.func.isRequired
    };




      render() {
        return (
            <section>
                <Typography variant="h5" component="h2">
                    Courses:
                </Typography>
                <Grid container spacing={2}>

                    {
                        this.props.courses.map((course, i) =>
                            <article key={i}>
                                course.id: {course.id}
                                <Link to={`/course/${course.id}`}
                                      style={{textDecoration: 'none'}}
                                      >
                                    <CourseItem key={i}
                                                course={course}/>
                                </Link>
                                <Button variant="contained"
                                        style={{marginTop: '1rem', width: '100%'}}
                                        color="primary"
                                        onClick={() => this.props.deleteCourse(course.id) }
                                >
                                    Delete
                                </Button>
                            </article>
                        )
                    }
                </Grid>
            </section>
        )
    }
}


export default Courses;
