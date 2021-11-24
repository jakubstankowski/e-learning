import React, {useContext, useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import {navigate, useParams} from "@reach/router";
import CoursesContext from "../../context/courses/coursesContext";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import CourseItem from "../courses/CourseItem";
import Typography from "@material-ui/core/Typography";
import LessonsContext from "../../context/lessons/lessonsContext";

export default function LessonsForm(props) {
    const {courseId, lessonId} = useParams();

    const {mode} = props;

    const coursesContext = useContext(CoursesContext);
    const {getCourse, course} = coursesContext;

    const lessonsContext = useContext(LessonsContext);
    const {postLesson, updateLesson} = lessonsContext;

    const [lesson, setLesson] = useState({
        title: props.lesson ? props.lesson.title : '',
        description: props.lesson ? props.lesson.description : '',
        videoUrl: props.lesson ? props.lesson.videoUrl : '',
        courseId: props.lesson ? props.lesson.courseId : '',
        isDemo: props.lesson ? props.lesson.isDemo : false,
    });

    const {title, description, videoUrl, isDemo} = lesson;

    useEffect(() => {
        getCourse(courseId);
        // eslint-disable-next-line
    }, []);

    const onChange = e =>
        setLesson({...lesson, [e.target.name]: e.target.value});

    const onChangeCheckbox = () => setLesson({...lesson, isDemo: !isDemo});

    const onSubmit = e => {
        e.preventDefault();

        if (mode === 'create') {
            postLesson(lesson)
                .then(() => {
                    navigate(`/course/${courseId}`);
                });
        } else {
            updateLesson(lessonId, lesson)
                .then(() => {
                    navigate(`/course/${courseId}`);
                });
        }

    };

    return (
        <>
            <Grid container spacing={4}>
                <Grid item lg={6} xs={12} className="all-center">
                    <Typography component="h1" variant="h5" className="mb-2">
                        Course:
                    </Typography>
                    <CourseItem
                        className="w-100 mt-1"
                        showAddToCartButton={false}
                        course={course}
                        key={course.id}/>
                </Grid>
                <Grid item lg={6} xs={12}>
                    <form onSubmit={onSubmit}>
                        <input
                            type='text'
                            placeholder='Title'
                            name='title'
                            className="w-100"
                            value={title}
                            onChange={onChange}
                        />
                        <textarea
                            placeholder='Description'
                            name='description'
                            className="w-100"
                            value={description}
                            onChange={onChange}
                        />
                        <input
                            type='text'
                            placeholder='Video Url'
                            name='videoUrl'
                            className="w-100"
                            value={videoUrl}
                            onChange={onChange}
                        />
                        <FormGroup className="mb-2">
                            <FormControlLabel control={
                                <Checkbox
                                    checked={isDemo}
                                    onChange={onChangeCheckbox}
                                />} label="Check if this is demo lesson"/>
                        </FormGroup>
                        <Button color="secondary"
                                variant="contained" className="w-100" type="submit">
                            {mode === 'create' ? 'Create' : 'Update'}
                        </Button>
                    </form>
                </Grid>
            </Grid>

        </>
    )
}
