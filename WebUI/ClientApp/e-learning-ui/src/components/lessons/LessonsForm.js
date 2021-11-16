import React, {useContext, useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import {useParams} from "@reach/router";
import CoursesContext from "../../context/courses/coursesContext";

export default function LessonsForm() {
    const coursesContext = useContext(CoursesContext);
    const {getCourse, course} = coursesContext;

    const [lesson, setLesson] = useState({
        title: '',
        description: '',
        videoUrl: '',
        courseId: null,
        isDemo: false
    });

    const {title, description, videoUrl, isDemo} = lesson;
    const {courseId} = useParams();

    useEffect(() => {
        getCourse(courseId);
        // eslint-disable-next-line
    }, []);

    const onChange = e =>
        setLesson({...lesson, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        console.log('lesson: ', lesson);
    };

    return (
        <>
            course title: {course.title}
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
                <Button color="secondary"
                        variant="contained" className="w-100" type="submit">
                    Create
                </Button>
            </form>
        </>
    )
}
