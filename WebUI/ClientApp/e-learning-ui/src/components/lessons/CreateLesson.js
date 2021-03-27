import * as React from "react";
import {Button} from "@material-ui/core";


class CreateLesson extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            videoUrl: "",
            courseId: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('this state: ', this.state);
    }


    render() {
        return (
            <article className="text-center">
                <h3>
                    Create Lesson
                </h3>
                <form className='form'>
                    <input
                        type='text'
                        name='title'
                        placeholder='Title'
                    />
                    <input
                        type='text'
                        name='description'
                        placeholder='Description'
                    />
                    <input
                        type='text'
                        name='video url'
                        placeholder='Video URL'
                    />
                    <Button variant="contained" color="primary">
                        Add
                    </Button>
                </form>
            </article>
        )
    }

}

export default CreateLesson;
