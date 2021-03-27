import * as React from "react";
import {Button} from "@material-ui/core";


class CreateLesson extends React.Component {
    state = {
        title: "",
        description: "",
        videoUrl: "",
        courseId: ''
    }


    onSubmit = (e) => {
        e.preventDefault();
        console.log('this state: ', this.state);
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <article className="text-center">
                <h3>
                    Create Lesson
                </h3>
                <form onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        name='title'
                        value={this.state.title}
                        onChange={this.onChange}
                        placeholder='Title'
                    />
                    <input
                        type='text'
                        name='description'
                        value={this.state.description}
                        onChange={this.onChange}
                        placeholder='Description'
                    />
                    <input
                        type='text'
                        name='video url'
                        value={this.state.videoUrl}
                        onChange={this.onChange}
                        placeholder='Video URL'
                    />
                    <Button type="submit"
                            variant="contained"
                            color="primary">
                        Add
                    </Button>
                </form>
            </article>
        )
    }

}

export default CreateLesson;
