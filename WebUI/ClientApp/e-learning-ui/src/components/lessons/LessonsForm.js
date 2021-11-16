import React, {useState} from "react";
import Button from "@material-ui/core/Button";

export default function LessonsForm() {
    const [lesson, setLesson] = useState({
        title: '',
        description: '',
        videoUrl: '',
        courseId: null,
        isDemo: false
    });

    const {title, description, videoUrl, courseId, isDemo} = lesson;

    const onChange = e =>
        setLesson({...lesson, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        console.log('lesson: ', lesson);
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder='Title'
                name='title'
                value={title}
                onChange={onChange}
            />
            <input
                type='text'
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
    )
}
