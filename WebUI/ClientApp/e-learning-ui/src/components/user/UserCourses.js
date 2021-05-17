import React, {useContext, useEffect} from "react";
import UserContext from '../../context/user/userContext';
import AuthContext from "../../context/auth/authContext";
import Spinner from "../layout/Spinner";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CourseItem from "../courses/CourseItem";
import Grid from "@material-ui/core/Grid";

export default function UserCourses() {
    const userContext = useContext(UserContext);
    const {getUserCourses, courses, loading} = userContext;

    const authContext = useContext(AuthContext);
    const {isAuthenticated, userId} = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            getUserCourses(userId);
        }

    }, [isAuthenticated]);

    if (loading) return <Spinner/>

    return (
        <Container>
            <Typography>
                Welcome to user courses!
            </Typography>
            <Grid container spacing={4}>
                {
                    courses.map((course) =>
                        <CourseItem
                            course={course}
                            key={course.id}/>
                    )
                }
            </Grid>
        </Container>
    )

}
