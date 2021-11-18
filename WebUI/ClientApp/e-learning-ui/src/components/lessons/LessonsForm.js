import React, {useContext, useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import {useParams} from "@reach/router";
import CoursesContext from "../../context/courses/coursesContext";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function LessonsForm() {
    const coursesContext = useContext(CoursesContext);
    const {getCourse, course} = coursesContext;
    const {courseId} = useParams();

    const [lesson, setLesson] = useState({
        title: '',
        description: '',
        videoUrl: '',
        courseId: parseInt(courseId),
        isDemo: false
    });

    const {title, description, videoUrl, isDemo} = lesson;


    useEffect(() => {
        getCourse(courseId);
        // eslint-disable-next-line
    }, []);

    const onChange = e =>
        setLesson({...lesson, [e.target.name]: e.target.value});

    const onChangeChecbkox = () => setLesson({...lesson, isDemo: !isDemo});

    const onSubmit = e => {
        e.preventDefault();
        console.log('lesson: ', lesson);
    };

    return (
        <>
            Course Title: {course.title}
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='Title'
                    name='title'
                    value={title}
                    onChange={onChange}
                />
                <textarea
                    placeholder='Description'
                    name='description'
                    value={description}
                    onChange={onChange}
                />
                <input
                    type='text'
                    placeholder='Video Url'
                    name='videoUrl'
                    value={videoUrl}
                    onChange={onChange}
                />
                <FormGroup className="mb-2">
                    <FormControlLabel control={
                        <Checkbox
                            checked={isDemo}
                            onChange={onChangeChecbkox}
                        />} label="Check if this is demo lesson"/>
                </FormGroup>
                <Button color="secondary"
                        variant="contained" className="w-100" type="submit">
                    Create
                </Button>
            </form>
        </>
    )
}
